import React, { ReactNode, useState, useMemo } from "react";
import { NextPageWithLayout } from "next";
import { PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { getLayout } from "@layout/MainLayout";
import FilterWrapper from "@layout/FilterWrapper";
import AccountList from "@contents/Account/AccountList";
import { BodySTY } from "./style";
import {
  getAccountList,
  I_AccountItem,
  DUMMY_ACC_LIST
} from "@services/account/getAccountList";
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
  const { data: session } = useSession();
  const [data, setData] = React.useState<I_AccountItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    const uk = session.user.account_no;
    const reqBody = {
      x: "",
      filter_needed: true,
      filter: [],
      page_info: {
        Page_Index: 1,
        Page_Size: 10
      }
    };
    try {
      // const result = await getAccountList(uk, reqBody);
      // setData(result.ResultList);
      setData(DUMMY_ACC_LIST.ResultList);
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
    if (!session) return;
    fetchData();
  }, [session]);

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
        <AccountList data={data} />
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
