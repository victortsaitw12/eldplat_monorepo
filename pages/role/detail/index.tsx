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

//
const isFullWidth = true;

//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  const [data, setData] = React.useState<I_RoleDetail>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDialogShown, setIsDialogShown] = React.useState<boolean>(false);

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

  const handleCreateRole = () => {};

  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ControlBar />
      <BodySTY>
        <RoleDetail data={data.roleDetail} />
        {data && (
          <AuthPanel data={data.authFunc} isEdit={editPage === "edit"} />
        )}
        <Dialog
          title="確定要離開嗎?"
          isShown={isDialogShown}
          onCloseComplete={() => setIsDialogShown(false)}
          onConfirm={() => console.log("continue action")}
          confirmLabel="確定"
          cancelLabel="取消"
        >
          <div>如果您現在離開，將會遺失未儲存的資料。</div>
        </Dialog>
      </BodySTY>
    </>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
