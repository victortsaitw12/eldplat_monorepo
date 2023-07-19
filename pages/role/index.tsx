import React, { ReactNode, useState, useMemo } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { Pane } from "evergreen-ui";
import RoleList from "@contents/Roles/RoleList";
import { BodySTY } from "./style";

//@contexts
import { useRoleStore } from "@contexts/filter/roleStore";

const Page: NextPageWithLayout<never> = () => {
  //
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
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useRoleStore();
  //套用新版filter

  return (
    <BodySTY>
      <TableWrapper
        onChangeTab={changeMainFilterHandler}
        mainFilter={nowTab}
        mainFilterArray={mainFilterArray}
        viewOnly={true}
      >
        <FilterWrapper
          updateFilter={updateSubFilter}
          resetFilter={() => {
            initializeSubFilter();
          }}
          filter={subFilter}
        >
          <RoleList />
        </FilterWrapper>
      </TableWrapper>
      {/* Put your component here */}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
