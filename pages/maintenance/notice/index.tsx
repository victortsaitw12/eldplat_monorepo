import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { deleteCustomer } from "@services/customer/deleteCustomer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import MaintenanceNoticeList from "@contents/maintenance/Notice/NoticeList";

import {
  defaultPageInfo,
  getAllMaintenanceNotices,
  maintenanceParser,
  maintenancePattern
} from "@services/maintenance/getMaintenanceNotice";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import AddMissionBtn from "@contents/maintenance/Notice/NoticeList/AddMissionBtn";
import MaintenanceCreateForm from "@contents/maintenance/MaintenanceCreateForm";
import { I_PageInfo } from "@components/PaginationField";
//
const mainFilterArray = [
  { id: 1, label: "通知", value: "1" },
  { id: 2, label: "取消", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [checkItems, setCheckItems] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("1");
  const [busNo, setBusNo] = useState<string>("");
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

  const fetchMaintenanceNoticeData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageQuery = defaultPageInfo
  ) => {
    getAllMaintenanceNotices(subFilter, mainFilter).then((res) => {
      console.log("res in notice", res);
      const maintenanceData = mappingQueryData(
        res.contentList,
        maintenancePattern,
        maintenanceParser
      );

      // 處理分頁
      const getPageInfo = { ...res.pageInfo };
      getPageInfo["orderby"] = "reminders_no";
      setPageInfo(getPageInfo);

      res.contentList.map((v: { reminders_no: { label: any } }) => {
        setCheckItems((prev) => [
          ...prev,
          { id: v.reminders_no, checked: false }
        ]);
      });

      const newData = maintenanceData?.map((item, idx) => {
        console.log("😺item", item);
        return {
          id: { label: item.id.label, value: item.id.value },
          bus_name: { label: item.bus_name.label, value: item.bus_name.value },
          driver_name: {
            label: item.driver_name.label,
            value: item.driver_name.value
          },
          meter: { label: item.meter.label, value: item.meter.value },
          vendor_name: {
            label: item.vendor_name.label,
            value: item.vendor_name.value
          },
          component_name: {
            label: item.component_name.label,
            value: item.component_name.value
          },
          mission: {
            label: (
              <AddMissionBtn
                item={item}
                setDrawerOpen={setDrawerOpen}
                setBusNo={setBusNo}
              ></AddMissionBtn>
            ),
            value: item.reminders_no.label
          }
        };
      });
      console.log("newData", newData);
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
      console.log("notice maintenanceData", maintenanceData);

      setData(newData);
    });
  };

  const deleteItemHandler = async (id: string) => {
    deleteCustomer(id).then((res) => {
      fetchMaintenanceNoticeData(false);
    });
  };

  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  //
  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceNoticeData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  if (!data) {
    return <LoadingSpinner />;
  }

  const handlePageChange = (pageQuery: I_PageInfo) => {
    fetchMaintenanceNoticeData(false, nowTab, pageQuery);
  };

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
          <MaintenanceNoticeList
            clientData={data}
            checkboxData={checkItems}
            setCheckboxData={setCheckItems}
            goToCreatePage={() => {
              setDrawerOpen(true);
            }}
            deleteItemHandler={deleteItemHandler}
            pageInfo={pageInfo}
            handlePageChange={handlePageChange}
          />
        </FilterWrapper>
      </TableWrapper>
      {isDrawerOpen && (
        <Drawer
          tabName={["新增維保計畫"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <MaintenanceCreateForm
            data={data}
            reloadData={() => {
              fetchMaintenanceNoticeData(false);
              setDrawerOpen(false);
            }}
            busNo={busNo}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
