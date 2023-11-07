import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import RoleDetail from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getRoleDetail, I_RoleDetail } from "@services/role/getRoleDetail";
import ControlBar from "@contents/Roles/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const modal = React.useContext(ModalContext);
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [data, setData] = React.useState<I_RoleDetail>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isEdit = editPage === "edit";

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getRoleDetail();
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <>
      <ControlBar
        isEdit={editPage === "edit"}
        handleNavigation={handleNavigation}
      />
      <BodySTY>
        <RoleDetail data={data.roleDetail} isEdit={editPage === "edit"} />
        {data && (
          <AuthPanel data={data.authFunc} isEdit={editPage === "edit"} />
        )}
      </BodySTY>
    </>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
