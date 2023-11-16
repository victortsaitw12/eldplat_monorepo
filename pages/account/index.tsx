import React, { ReactNode, useState, useMemo } from "react";
import { NextPageWithLayout } from "next";
import { PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";

import { getLayout } from "@layout/MainLayout";
import FilterWrapper from "@layout/FilterWrapper";
import UserList from "@contents/Account/UserList";
import { BodySTY } from "./style";
import { getUserList, I_UserItem } from "@services/account/getUserList";
import { useUserStore } from "@contexts/filter/accountStore";
import { IconLeft } from "@components/Button/Primary";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();

  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useUserStore();
  const [data, setData] = React.useState<I_UserItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getUserList();
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleCreate = () => {
    const id = "create";
    router.push(`/account/detail/${id}?editPage=edit`);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  const createBtn = (
    <IconLeft text="新增使用者" onClick={handleCreate}>
      <PlusIcon size={14} />
    </IconLeft>
  );

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => initializeSubFilter()}
        filter={subFilter}
        btns={createBtn}
      >
        <UserList data={data} />
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
