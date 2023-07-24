import React, { ReactNode, useMemo, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import RoleEditForm from "@contents/Roles/RoleEditForm";
import BusRoleEditForm from "@contents/Roles/BusRoleEditForm";
import { BodySTY } from "./style";
import TableWrapper from "@layout/TableWrapper";
//
const Page: NextPageWithLayout<never> = () => {
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "基本", value: "1" },
      { id: 2, label: "車產", value: "2" }
    ],
    []
  );
  const [nowTab, setNowTab] = useState("1");
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };
  return (
    <BodySTY>
      <TableWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={nowTab}
        mainFilterArray={mainFilterArray}
        isEdit={true}
      >
        {/* Put your component here */}
        {nowTab === "1" && <RoleEditForm submitForm={asyncSubmitForm} />}
        {nowTab === "2" && <BusRoleEditForm submitForm={asyncSubmitForm} />}
      </TableWrapper>
    </BodySTY>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
