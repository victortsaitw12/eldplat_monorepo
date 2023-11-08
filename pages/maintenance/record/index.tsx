import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";

//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";

import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import {
  defaultPageInfo,
  getAllMaintenanceRecords,
  maintenanceParser,
  maintenancePattern
} from "@services/maintenance/getMaintenanceRecord";
import MaintenanceRecordList from "@contents/maintenance/Record/RecordList";
import { slashDate } from "@utils/convertDate";
import getPageTilte from "@utils/getPageBreadCrumbs";
import { I_PageInfo } from "@components/PaginationField";

//
const mainFilterArray = [
  { id: 1, label: "全部", value: "1" }
  // { id: 2, label: "取消", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [nowTab, setNowTab] = useState("1");
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useMaintenanceStore();
  //

  const fetchMaintenanceData = async (
    isCanceled: boolean,
    mainStatus = "3",
    pageQuery = defaultPageInfo
  ) => {
    getAllMaintenanceRecords(subFilter, (mainStatus = "3"), pageQuery).then(
      (res) => {
        console.log("1️⃣res for record", res);
        // const copyResList = [...res.contentList];
        // const newResList = copyResList?.map((v: any) => {
        //   v["completion_time"] = slashDate(v?.completion_time);
        //   return v;
        // });

        const MainRecordData = mappingQueryData(
          res.contentList,
          maintenancePattern,
          maintenanceParser
        );

        // 處理分頁
        const getPageInfo = { ...res.pageInfo };
        setPageInfo(getPageInfo);

        if (isCanceled) {
          console.log("canceled");
          return;
        }
        if (!subFilter) {
          localStorage.setItem(
            "maintenanceInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
        console.log("MainRecordData", MainRecordData);
        setData(MainRecordData);
      }
    );
  };
  //
  // const deleteItemHandler = async (id: string) => {
  //   deleteCustomer(id).then((res) => {
  //     fetchMaintenanceData(false);
  //   });
  // };
  //進入供應商編輯頁
  // const goToEditPageHandler = (id: string) => {
  //   router.push("/maintenance/detail/" + id + "?editPage=edit");
  // };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/maintenance/detail/${id}?editPage=view`);
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  //
  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  if (!data) {
    return <LoadingSpinner />;
  }

  const handlePageChange = (pageQuery: I_PageInfo) => {
    fetchMaintenanceData(false, nowTab, pageQuery);
  };

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
        >
          <MaintenanceRecordList
            clientData={data}
            goToDetailPage={goToDetailPageHandler}
            pageInfo={pageInfo}
            handlePageChange={handlePageChange}
          />
        </FilterWrapper>
      </TabsWrapper>
      {/* {isDrawerOpen && (
        <Drawer
          tabName={["新增維保計畫"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <MaintenanceCreateForm
            reloadData={() => {
              fetchMaintenanceData(false);
              setDrawerOpen(false);
            }}
          />
        </Drawer>
      )} */}
    </BodySTY>
  );
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
