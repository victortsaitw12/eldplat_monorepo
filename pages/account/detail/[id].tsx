import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { toaster } from "evergreen-ui";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import BasicInfoBox from "@contents/Account/BasicInfoBox";
import EmployeeInfoBox from "@contents/Account/EmployeeInfoBox";
import { ParsedUrlQuery } from "querystring";
import {
  getOneAccount,
  I_AccountDetailItem,
  DUMMY_DATA_CREATE
} from "@services/account/getOneAccount";
import { createAccount } from "@services/account/createAccount";
import { updateAccount } from "@services/account/updateAccount";
import ControlBar from "@contents/Account/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";
import RoleInfoBox from "@contents/Account/RoleInfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const modal = React.useContext(ModalContext);
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [data, setData] = React.useState<I_AccountDetailItem>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isEdit = editPage === "edit";
  console.log("🍅 id:", id);
  const isCreate = id === "create";
  const defaultValues = isCreate
    ? {
        account_fname: "",
        account_lname: "",
        org_no: "",
        //,staff_no : ""
        //,account_photo_link : ""
        creorgno: "",
        content_phone_tel_country_code1: "+",
        content_phone_tel1: "",
        content_priv_email: "",
        account_role: []
      }
    : {
        account_no: data?.account_no || "",
        account_fname: data?.account_fname || "",
        account_lname: "est",
        //,org_no : "o-00020101"
        //,staff_no : ""
        //,join_dt : ""
        //,account_photo_link : ""
        contact_no: "d7bee654-191a-4882-bbb3-d91831285558",
        content_phone_tel_country_code1: "+886",
        content_phone_tel1: "0987654321",
        creorgno: "o-0001",
        account_role: ["r-auth01", "r-bus01", "r-bus02"]
      };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    try {
      const uk = session.user.account_no;
      const reqBody = {
        account_no: id,
        creorgno: "o-0001"
      };
      const res = await getOneAccount(uk, reqBody);
      const result = res.DataList[0];
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    // const userId = session.user.userID
    const userId = "admin"; //USR202302020002
    console.log("🔜 data:", data);
    try {
      const res = isCreate
        ? await createAccount(userId, data)
        : await updateAccount(userId, data);

      if (res.StatusCode === "200") {
        // refetch();
        toaster.success(`${res.Message}`, {
          duration: 1.5
        });
      } else {
        throw new Error(`${res.Message}`);
      }
    } catch (err: any) {
      toaster.warning(err.message);
    }
  };

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  const handleCreate = () => {
    handleSubmit(asyncSubmitForm)();
  };

  const handleEdit = () => {
    router.push({
      pathname: "/account/detail/" + id,
      query: { editPage: "edit" }
    });
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    if (isCreate) return;
    fetchData();
  }, [session, isCreate]);

  React.useEffect(() => {
    if (isCreate) setData(DUMMY_DATA_CREATE);
  }, [session]);

  React.useEffect(() => {
    if (!isEdit) return;
    const handleRouteChange = (url: string) => {
      console.log("🍅 before", modal);
      modal.showLeavePageModal();
      console.log("🍅 after");
    };

    router.beforePopState(({ url, as, options }) => {
      if (modal.modalContent) {
        // If there's a confirmation modal open, prevent the route change
        return false;
      }
      return true;
    });

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isEdit]);

  const handleCancel = () => {
    console.log("cancel");
  };

  return (
    <>
      <ControlBar
        isEdit={editPage === "edit"}
        handleNavigation={handleNavigation}
        handleEdit={handleEdit}
      />
      <BodySTY>
        {isCreate || data ? (
          <>
            <BasicInfoBox data={data} isEdit={editPage === "edit"} />
            <EmployeeInfoBox data={data} isEdit={editPage === "edit"} />
            <RoleInfoBox
              data={data.account_role}
              isEdit={editPage === "edit"}
            />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </BodySTY>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      id: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

interface Props {
  driverNo: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
