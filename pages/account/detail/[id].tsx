import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, GetServerSideProps } from "next";

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
  I_AccountRole,
  I_RoleItem,
  DUMMY_DATA_CREATE,
  DUMMY_ONE_ACCOUNT
} from "@services/account/getOneAccount";
import {
  createAccount,
  I_ReqBody as I_CreateReqBody
} from "@services/account/createAccount";
import {
  updateAccount,
  I_ReqBody as I_UpdateReqBody
} from "@services/account/updateAccount";
import ControlBar from "@components/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";
import RoleInfoBox from "@contents/Account/RoleInfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const modal = React.useContext(ModalContext);
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isEdit = editPage === "edit";
  const isCreate = id === "create";

  const defaultCreate: I_CreateReqBody = {
    account_fname: "",
    account_lname: "",
    org_no: "",
    creorgno: "",
    content_phone_tel_country_code1: "+",
    content_phone_tel1: "",
    content_priv_email: "",
    account_role: []
  };

  const defaultUpdate: I_UpdateReqBody = {
    account_no: data?.account_no || "",
    account_fname: data?.account_fname || "",
    account_lname: data?.account_lname || "",
    contact_no: data?.contact_no || "",
    content_phone_tel_country_code1:
      data?.content_phone_tel_country_code1 || "",
    content_phone_tel1: data?.content_phone_tel1 || "",
    creorgno: "o-0001", // TODO useSession
    account_role: (data && getSelectedRoles(data)) || []
  };

  const defaultValues = isCreate ? defaultCreate : defaultUpdate;

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
      // const res = await getOneAccount(uk, reqBody);
      // const result = res.ResoutList[0];
      setData(DUMMY_ONE_ACCOUNT.ResultList[0]);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    // const userId = session.user.userID
    if (!session) return;
    const uk = session.user.account_no;
    console.log("🔜 data:", data);
    try {
      const res = isCreate
        ? await createAccount(uk, data)
        : await updateAccount(uk, data);

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

  const handleCancel = () => {
    handleSubmit(asyncSubmitForm)();
  };

  const handleConfirm = () => {
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

  return (
    <>
      <ControlBar
        isEdit={editPage === "edit"}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        primaryDisable={false}
      />
      <BodySTY>
        {isCreate ||
          (data && (
            <>
              <BasicInfoBox data={data} isEdit={editPage === "edit"} />
              <EmployeeInfoBox data={data} isEdit={editPage === "edit"} />
              <RoleInfoBox
                data={data.account_role}
                isEdit={editPage === "edit"}
              />
            </>
          ))}
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
  id: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

// ===== FUNCTION NOT IN RENDERS ===== //
const getSelectedRoles = (data: I_AccountDetailItem) => {
  if (!data) return;
  const flattenRoleList = data.account_role.flatMap(
    (accoountRole: I_AccountRole) => accoountRole.roles
  );
  const selectedRoleList = flattenRoleList.filter(
    (item: I_RoleItem) => item.is_select === true
  );
  if (selectedRoleList.length === 0) return [];
  const roleStrList = selectedRoleList.map((item) => item.role_no);
  return roleStrList;
};
