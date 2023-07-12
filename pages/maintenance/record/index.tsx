import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { NextPageWithLayout } from "next";

//
import { getLayout } from "@layout/MainLayout";
import CustomerList from "@contents/Customer/CustomerList";
import {
  getAllCustomers,
  customerParser,
  customerPattern
} from "@services/customer/getAllCustomers";
import LoadingSpinner from "@components/LoadingSpinner";
import { useCustomerStore } from "@contexts/filter/customerStore";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { deleteCustomer } from "@services/customer/deleteCustomer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";

import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import MaintenanceCreateForm from "@contents/maintenance/MaintenanceCreateForm";
import {
  getAllMaintenanceRecords,
  maintenanceParser,
  maintenancePattern
} from "@services/maintenance/getMaintenanceRecord";
import MaintenanceRecordList from "@contents/maintenance/Record/RecordList";
import { slashDate } from "@utils/convertDate";
import getPageTilte from "@utils/getPageBreadCrumbs";

//
const mainFilterArray = [
  { id: 1, label: "通知", value: "1" },
  { id: 2, label: "取消", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
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

  // useEffect(() => {
  //   const dateString = "06/05/2023 11:38:34";
  //   const date = new Date(dateString);
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   const formattedDate = `${year}/${month}/${day}`;
  //   console.log("formattedDate", formattedDate);
  // }, []);

  const fetchMaintenanceData = async (
    isCanceled: boolean,
    mainStatus = "3"
  ) => {
    getAllMaintenanceRecords(subFilter, (mainStatus = "3")).then((res) => {
      console.log("1️⃣res for record", res);
      const copyResList = [...res.contentList];
      const newResList = copyResList?.map((v: any) => {
        v["completion_time"] = slashDate(v?.completion_time);
        return v;
      });

      const MainRecordData = mappingQueryData(
        res.contentList,
        maintenancePattern,
        maintenanceParser
      );
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
    });
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
          <MaintenanceRecordList
            clientData={data}
            goToDetailPage={goToDetailPageHandler}
          />
        </FilterWrapper>
      </TableWrapper>
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
