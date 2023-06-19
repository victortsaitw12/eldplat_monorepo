import React from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import RoleEditForm from "@features/roles/RoleEditForm";
import { BodySTY } from "./style";
//
const isFullWidth = true;
//
const DUMMY_DATA = [];
//
const Index: NextPageWithLayout<never> = () => {
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
Index.getLayout = getLayout;
export default Index;
