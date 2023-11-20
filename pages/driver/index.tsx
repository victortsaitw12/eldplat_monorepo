import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { mappingQueryData } from "@utils/mappingQueryData";
import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver, defaultPageInfo } from "@services/driver/getAllDrivers";
import { deleteDriver } from "@services/driver/deleteDriver";
import { updateDriverStatus } from "@services/driver/updateDriverStatus";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import { BodySTY, StyledDot, UserSTY } from "./style";
import Drawer from "@components/Drawer";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { I_PageInfo } from "@components/PaginationField";
import { useRouter } from "next/router";
import FirstNameIcon from "@components/FirstNameIcon";
import Checkbox from "@components/CheckBox";
import IconBtn from "@components/Button/IconBtn";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();
  React.useEffect(() => {
    let isCanceled = false;
    fetchDriverData(isCanceled, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  const fetchDriverData = React.useCallback(
    async (isCanceled: boolean, pageQuery = defaultPageInfo) => {
      try {
        const res = await getAllDriver(subFilter, pageQuery);
        const { ContentList: driverData, PageInfo } = res;

        const getPageInfo = { ...PageInfo };
        setPageInfo(getPageInfo);

        if (isCanceled) return;

        if (!subFilter) {
          const conditionList = res.ConditionList;
          localStorage.setItem(
            "driverInitFilter",
            JSON.stringify(conditionList)
          );
          initializeSubFilter();
        }

        const dataFitTable = data.map((item: Array<object>, i: number) => {
          return {
            id: item["account_no"],
            checkbox: <Checkbox value={item["account_name"]} />,
            account_name: item["account_name"],
            org_name: item["org_name"],
            role_name_o: item["role_name_o"],
            invt_sts: <InvitSatus value={item["invt_sts"]} />,
            action: (
              <IconBtn
                tip="編輯"
                type="edit"
                onClick={handleEdit.bind(null, item.account_no)}
              />
              // <Tooltip content="編輯">
              //   <EditIcon onClick={handleEdit} />
              // </Tooltip>
            )
          };
        });
        setData(dataHandler(driverData));
      } catch (error) {
        console.error("Error fetching driver data:", error);
        // 可以進行錯誤處理，例如顯示錯誤訊息給使用者
      }
    },
    []
  );

  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    router.push({
      pathname: "/driver/",
      query: { ...router?.query, status: value }
    });
  };

  const handleDeleteDriver = (id: string) => {
    updateDriverStatus(id, "2").then(() => {
      fetchDriverData(false);
    });
  };
  const handleRecoverDriver = (id: string) => {
    updateDriverStatus(id, "1").then(() => {
      fetchDriverData(false);
    });
  };
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      fetchDriverData(false, pageQuery);
    },
    [fetchDriverData, nowTab]
  );
  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      >
        <DriverList
          listType={nowTab}
          driverData={data}
          pageInfo={pageInfo}
          handleDeleteDriver={handleDeleteDriver}
          handleRecoverDriver={handleRecoverDriver}
          handlePageChange={handlePageChange}
        />
      </FilterWrapper>
    </BodySTY>
  );
};
/*

      
*/
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
