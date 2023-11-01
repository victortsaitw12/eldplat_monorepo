import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
// import RoleEditForm from "@features/roles/RoleEditForm";
import { BodySTY } from "./style";
import RoleDetail, { I_RoleDetail } from "@contents/Roles/RoleDetail";
import { getRoleDetail } from "@services/role/getRoleDetail";
//
const isFullWidth = true;

//
const Page: NextPageWithLayout<never> = () => {
  const [data, setData] = React.useState<I_RoleDetail[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
    <BodySTY>
      <RoleDetail data={data} />
      <div>權限</div>
    </BodySTY>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
