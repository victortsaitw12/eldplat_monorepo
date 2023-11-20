import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { toaster } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import { createRole } from "@services/role/createRole";
import { updateRole } from "@services/role/updateRole";
import DetailPanel from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getOneRole, I_RoleDetail } from "@services/role/getOneRole";
import ControlBar from "@contents/Roles/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const isCreate = router.query.id === "create";
  const modalUI = React.useContext(ModalContext);
  const [data, setData] = React.useState<any>(null);
  const defaultValues = isCreate
    ? {
        role_name: "",
        role_desc: "",
        role_tp: "",
        module_no: "",
        creorgno: "",
        func_auth: [
          {
            fg_no: "org", // 組織
            func_no: "org",
            module_no: "sys",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          },
          {
            fg_no: "role", // 角色
            func_no: "role",
            module_no: "sys",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          },
          {
            fg_no: "account", // 使用者
            func_no: "org",
            module_no: "sys",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          },
          {
            fg_no: "bus", // 車輛
            func_no: "bus",
            module_no: "bus",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          },
          {
            fg_no: "account", // 車輛
            func_no: "org",
            module_no: "sys",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          }
        ]
      }
    : {
        role_no: "r-000201bus08",
        role_name: "組織角色1",
        role_desc: "這是敘述",
        role_tp: "O",
        module_no: "bus",
        creorgno: "o-0001",
        func_auth: [
          {
            fg_no: "bus",
            func_no: "bus",
            module_no: "bus",
            func_element: [
              {
                element_no: "btnAdd",
                element_default: "1"
              },
              {
                element_no: "btnEdit",
                element_default: "2"
              }
            ]
          }
        ]
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
    // const
    const userID = "USR202302020002";
    try {
      const result = await getOneRole(userID);
      setData(result.DataList[0]);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🔜 data:", data);
    //const userID=session.user.userID
    const userID = "USR202302020002";
    try {
      const res = isCreate
        ? await createRole(userID, data)
        : await updateRole(userID, data);

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
    setIsEdit((prev) => !prev);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

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
            <DetailPanel data={data} isEdit={editPage === "edit"} />
            <AuthPanel data={data.func_auth} isEdit={editPage === "edit"} />
          </>
        )}
      </BodySTY>
    </form>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
