import React, { ReactNode, useState } from "react";
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
import { I_PageInfo, defaultPageInfo } from "@components/PaginationField";

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
  const { data: session, status } = useSession();
  const [data, setData] = React.useState<I_AccountItem[]>([]);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    try {
      // const uk = session.user.account_no;
      // const reqBody = {
      //   x: "",
      //   filter_needed: true,
      //   filter: [],
      //   page_info: {
      //     Page_Index: 1,
      //     Page_Size: 10
      //   }
      // };
      // const result = await getAccountList(uk, reqBody);
      // setData(result.ResultList);
      const data = DUMMY_ACC_LIST.ResultList;
      const pageInfo = DUMMY_ACC_LIST.PageInfo;
      const isUpdatedDataAfterCreate =
        localStorage.getItem("accountCreateData");
      if (isUpdatedDataAfterCreate) {
        setData([JSON.parse(isUpdatedDataAfterCreate), ...data]);
        setPageInfo({
          ...pageInfo,
          Total: (pageInfo.Total || 0) + 1
        });
      } else {
        setData(data);
        setPageInfo(pageInfo);
      }

      if (!subFilter) {
        localStorage.setItem(
          "accountInitFilter",
          JSON.stringify(DUMMY_ACC_LIST.ConditionList)
        );
        initializeSubFilter();
      }
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

  React.useEffect(() => {
    localStorage.removeItem("accountCreateData");
  }, [router]);

  React.useEffect(() => {
    localStorage.removeItem("accountEditData");
  }, [router]);

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
        <AccountList data={data} pageInfo={pageInfo} />
      </FilterWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
