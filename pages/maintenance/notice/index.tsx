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

import MaintenanceCreateForm from "@contents/maintenance/MaintenanceCreateForm";
import { I_PageInfo } from "@components/PaginationField";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
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
  const [reminderNo, setReminderNo] = useState<string>("");
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const {
    initializeSubFilter,
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
    setLoading(true);
    try {
      getAllMaintenanceNotices(subFilter, mainFilter, pageQuery).then((res) => {
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
        console.log("maintenanceData", maintenanceData);
        // const newData = maintenanceData?.map((item, idx) => {
        //   const mappingItem = {
        //     id: { label: item.id.label, value: item.id.value },
        //     bus_name: { label: item.bus_name.label, value: item.bus_name.value },
        //     driver_name: {
        //       label: item.driver_name.label,
        //       value: item.driver_name.value
        //     },
        //     meter: { label: item.meter.label, value: item.meter.value },
        //     vendor_name: {
        //       label: item.vendor_name.label,
        //       value: item.vendor_name.value
        //     },
        //     component_name: {
        //       label: item.component_name.label,
        //       value: item.component_name.value
        //     },
        //     mission: {
        //       label: (
        //         <AddMissionBtn
        //           item={item}
        //           setDrawerOpen={setDrawerOpen}
        //           setBusNo={setBusNo}
        //           setReminderNo={setReminderNo}
        //         ></AddMissionBtn>
        //       ),
        //       value: item.reminders_no.label
        //     }
        //   };
        //   return mappingItem;
        // });
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

        setData(maintenanceData);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
    setDrawerOpen(false);
  }, []);
  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceNoticeData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  useEffect(() => {
    setLoading(true);
    try {
      getCreateDdl().then((DDLdata) => {
        console.log("DDL data", DDLdata);
        const newData = { ...DDLdata.dataList[0] };
        setMainCreateDdl(newData);
        setLoading(false);
      });
    } catch (err) {
      throw new Error("getDDL maintenance error");
    } finally {
      setLoading(false);
    }
  }, []);
  /**
   * 
/ 取得新增時的下拉式資料
   */
  if (!data) {
    return <LoadingSpinner />;
  }

  const handlePageChange = async (pageQuery: I_PageInfo) => {
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
            maintenanceData={data}
            checkboxData={checkItems}
            setCheckboxData={setCheckItems}
            goToCreatePage={() => {
              setDrawerOpen(true);
            }}
            deleteItemHandler={deleteItemHandler}
            pageInfo={pageInfo}
            handlePageChange={handlePageChange}
            setReminderNo={setReminderNo}
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
            noticeData={data}
            reminderNo={reminderNo}
            reloadData={() => {
              fetchMaintenanceNoticeData(false);
              setDrawerOpen(false);
            }}
            mainCreateDdl={mainCreateDdl}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
