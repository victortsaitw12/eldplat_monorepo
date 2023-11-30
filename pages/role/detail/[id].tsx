import React, { ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toaster } from "evergreen-ui";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { DivSTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { createRole } from "@services/role/createRole";
import { updateRole } from "@services/role/updateRole";
import DetailPanel from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getOneRole, I_RoleDetail, I_RoleReq } from "@services/role/getOneRole";
import { defaultCreatValues, I_CreateRoleReq } from "@services/role/createRole";
import { defaultUpdateValues } from "@services/role/updateRole";
import ControlBar from "@contents/Roles/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";
import { string } from "zod";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const isCreate = router.query.id === "create";
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const { data: session } = useSession();
  const modalUI = React.useContext(ModalContext);
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);
  const defaultValues = getDefaultValues(data);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues
  });
  console.log("🍅 defaultValues", defaultValues);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    const uk = session?.user.account_no;
    const createData = {
      creorgno: session.user.org_no
    };
    const data = isCreate
      ? createData
      : { ...createData, role_no: router.query.id };
    try {
      const result = await getOneRole(uk, data as I_RoleReq);
      setData(result.DataList[0]);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🍅 call asyncSubmitForm");

    console.log("🔜 data:", data);
    if (!session) return;
    const uk = session.user.account_no;
    // try {
    //   const res = isCreate
    //     ? await createRole(uk, {...data,creorgno: session?.user.org_no})
    //     : await updateRole(uk,{...data,creorgno: session?.user.org_no});

    //   if (res.StatusCode === "200") {
    //     toaster.success(`${res.Message}`, {
    //       duration: 1.5
    //     });
    //   } else {
    //     throw new Error(`${res.Message}`);
    //   }
    // } catch (err: any) {
    //   toaster.warning(err.message);
    // }
  };

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  const handleEdit = () => {
    router.push(`/role/detail/${router.query.id}?editPage=edit`);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  // TODO write a url state in ModalProvider
  React.useEffect(() => {
    if (!isEdit) return;

    const handleRouteChange = (url: string) => {
      console.log(" before", modalUI);
      modalUI.showLeavePageModal();
      console.log(" after");
    };

    router.beforePopState(({ url, as, options }) => {
      if (modalUI.modalContent) {
        // If there's a confirmation modal open, prevent the route change
        return false;
      }
      return true;
    });

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("called");
        asyncSubmitForm({
          ...data
        });
      })}
    >
      <ControlBar
        isEdit={editPage === "edit"}
        handleNavigation={handleNavigation}
        handleEdit={handleEdit}
      />
      <DivSTY>
        {data && (
          <>
            <DetailPanel
              data={data}
              isEdit={editPage === "edit"}
              isCreate={isCreate}
              register={register}
              errors={errors}
            />
            <AuthPanel
              data={data.func_auth}
              isEdit={editPage === "edit"}
              register={register}
              control={control}
              setValue={setValue}
              errors={errors}
            />
          </>
        )}
      </DivSTY>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params, query } = context;
  return {
    props: {
      editPage: query.editPage == "edit",
      id: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

// ===== FUNCTION NOT IN RENDERS ===== //
const getDefaultValues = (data: I_RoleDetail) => {
  if (!data)
    return {
      // role_no: "",
      role_name: ""
      // role_desc: "",
      // role_tp: "O",
      // module_no: "bus"
      // func_auth: []
    };
  return {
    // role_no: data.role_no || "",
    role_name: data.role_name || ""
    // role_desc: data.role_desc || "",
    // role_tp: "O",
    // module_no: data.module_no || "bus"
    // func_auth: data.func_auth || []
  };
};
const getFlattenAuthDataArr = (data: I_RoleDetail) => {
  const result = data?.func_auth.map((item) => {
    item.func_element.map((elem) => {
      return {
        fg_no: item.fg_no,
        func_no: item.func_no,
        module_no: item.module_no,
        element_no: elem.element_no,
        element_default: elem.element_default
      };
    });
  });
  return result;
};

interface Props {
  id: string;
}
