import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import RoleEditForm from "@features/roles/RoleEditForm";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<never> = () => {
  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };
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
        <RoleEditForm submitForm={asyncSubmitForm} />
      </Pane>
    </BodySTY>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
