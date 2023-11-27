import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toaster } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { createRole } from "@services/role/createRole";
import { updateRole } from "@services/role/updateRole";
import DetailPanel from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getOneRole, I_AuthFuncItem } from "@services/role/getOneRole";
import { defaultCreatValues } from "@services/role/createRole";
import { defaultUpdateValues } from "@services/role/updateRole";
import ControlBar from "@contents/Roles/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const isCreate = router.query.id === "create";
  const modalUI = React.useContext(ModalContext);
  const [data, setData] = React.useState<any>(null);
  const defaultValues = isCreate
    ? defaultCreatValues
    : {
        role_no: data?.role_no || "",
        role_name: data?.role_name || "",
        role_desc: data?.role_desc || "",
        role_tp: "O", //TODO ????
        module_no: data?.module_no || "",
        creorgno: session?.user.org_no || "",
        func_auth: data?.func_auth.map((module: I_AuthFuncItem) => {
          return {
            fg_no: module.fg_no,
            func_no: module.func_no,
            module_no: module.module_no,
            element_no: module.func_element[0].element_no
          };
        })
      };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    const uk = session?.user.account_no;
    const data = {
      role_no: router.query.id,
      creorgno: session.user.org_no
    };
    try {
      const result = await getOneRole(uk, data);
      setData(result.DataList[0]);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🔜 data:", data);
    if (!session) return;
    const uk = session.user.account_no;
    try {
      const res = isCreate
        ? await createRole(uk, data)
        : await updateRole(uk, data);

      if (res.StatusCode === "200") {
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

  const handleSave = () => {
    handleSubmit(asyncSubmitForm)();
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
  }, [isEdit]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({ ...data });
      })}
    >
      <ControlBar
        isEdit={editPage === "edit"}
        handleNavigation={handleNavigation}
        handleEdit={handleEdit}
      />
      <BodySTY>
        {data && (
          <>
            <DetailPanel
              data={data}
              isEdit={editPage === "edit"}
              isCreate={isCreate}
              register={register}
            />
            <AuthPanel
              data={data.func_auth}
              isEdit={editPage === "edit"}
              isCreate={isCreate}
              register={register}
            />
          </>
        )}
      </BodySTY>
    </form>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
