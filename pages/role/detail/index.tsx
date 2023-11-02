import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { Pane } from "evergreen-ui";

//
import { getLayout } from "@layout/MainLayout";
// import RoleEditForm from "@features/roles/RoleEditForm";
import LoadingSpinner from "@components/LoadingSpinner";

import { BodySTY } from "./style";
import RoleDetail from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";
import { getRoleDetail, I_RoleDetail } from "@services/role/getRoleDetail";
//
const isFullWidth = true;

//
const Page: NextPageWithLayout<never> = () => {
  const [data, setData] = React.useState<I_RoleDetail>({});
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
      <RoleDetail data={data.roleDetail} />
      <AuthPanel data={data.authFunc} />
    </BodySTY>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
