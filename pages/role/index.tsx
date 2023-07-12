import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import RoleList from "@features/roles/RoleList";
import { BodySTY } from "./style";
//
//
const Page: NextPageWithLayout<never> = () => {
  return (
    <BodySTY>
      <Pane
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="10px"
        overflow="auto"
      >
        {/* Put your component here */}
        {/* <ClientList /> */}
        <RoleList />
      </Pane>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps, title: <span>群組設定</span> });
export default Page;
