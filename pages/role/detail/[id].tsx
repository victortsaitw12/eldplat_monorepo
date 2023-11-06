import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, Group, Dialog, PlusIcon, EditIcon } from "evergreen-ui";

//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { BodySTY } from "./style";
import RoleDetail from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getRoleDetail, I_RoleDetail } from "@services/role/getRoleDetail";
import ControlBar from "@contents/Roles/ControlBar";
import LeavePageModal from "@components/Modal/LeavePageModal";
import { useConfirmation } from "@hooks/useConfirmation";

//
const isFullWidth = true;

//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const confirmation = useConfirmation();

  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [data, setData] = React.useState<I_RoleDetail>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isLeavePage, setIsLeavePage] = React.useState<boolean>(false);
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
    if (isEdit && isLeavePage) {
      // Show the modal and wait for user interaction
      // const result = await confirmation.open();
      setIsLeavePage(false);

      // if (result) {
      router.push(path);
      // }
      // } else {
      // router.push(path);
    }
  };

  const handleRouteChange = (url: string) => {
    if (isLeavePage) {
      // If the leave modal is shown, do not allow route change
      setIsLeavePage(false);
      return false;
    }
    return true;
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  router.beforePopState(handleRouteChange);

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
        <LeavePageModal
          isShown={confirmation.isOpen}
          onClose={() => setIsLeavePage(false)}
          onConfirm={handleNavigation.bind(null, "/role")}
        />
      </BodySTY>
    </>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
