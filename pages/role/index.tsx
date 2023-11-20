import React, { ReactNode, useState, useMemo } from "react";
import { NextPageWithLayout } from "next";
import { PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

//
import { getLayout } from "@layout/MainLayout";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import RoleList from "@contents/Roles/RoleList";
import { BodySTY } from "./style";
import { getRoleList, I_RoleListItem } from "@services/role/getRoleList";
import { useRoleStore } from "@contexts/filter/roleStore";
import { IconLeft } from "@components/Button/Primary";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "啟用", value: "1" },
      { id: 2, label: "停用", value: "2" }
    ],
    []
  );
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    router.push({
      pathname: "/role/",
      query: { ...router?.query, status: value }
    });
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
  const { data: session } = useSession();
  const [data, setData] = React.useState<I_RoleListItem[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    // get userID from session after login api
    // const userID = session.userID
    const userID = "USR202302020002";
    try {
      const result = await getRoleList(userID);
      console.log("🍅 result:", result);
      setData(result.ContentList);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleCreate = () => {
    const id = "create";
    router.push(`/role/detail/${id}?editPage=edit`);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  const createBtn = (
    <IconLeft text="新增角色" onClick={handleCreate}>
      <PlusIcon size={14} />
    </IconLeft>
  );

  return (
    <BodySTY>
      <TabsWrapper
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
          btns={createBtn}
        >
          <RoleList data={data} />
        </FilterWrapper>
      </TabsWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
