import React, { useState, useEffect, useCallback } from "react";
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
import CustomerCreateForm from "@contents/Customer/CustomerCreateForm";
import MaintenanceNoticeList from "@contents/maintenance/Notice/NoticeList";
import MaintenanceMissionList from "@contents/maintenance/Mission/MissionList";
import {
  UpdateMaintenanceStatus,
  getAllMaintenanceMissions,
  maintenanceParser,
  maintenancePattern
} from "@services/maintenance/getMaintenanceMission";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import MaintenanceCreateForm from "@contents/maintenance/MaintenanceCreateForm";
import FinishBtn from "@contents/maintenance/Mission/MissionList/FinishBtn";
import AssignBtn from "@contents/maintenance/Mission/MissionList/AssignBtn";
//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
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

  const fetchMaintenanceData = async (
    isCanceled: boolean,
    mainFilter = "1"
  ) => {
    getAllMaintenanceMissions(subFilter, mainFilter).then((res) => {
      console.log("1️⃣res for mission", res);

      const MainMissionData = mappingQueryData(
        res.contentList,
        maintenancePattern,
        maintenanceParser
      );

      // 由於table內不只有靜態資料顯示(有button功能)，所以客制加工一下 => 結案按鈕
      MainMissionData?.map((item) => {
        if (item["completion_time"].label === "---") {
          const active =
            item["all_assignment_no"].value.length > 30 ? false : true;

          return (item["completion_time"].label = (
            <FinishBtn
              id={item.maintenance_no["value"]}
              disabled={active}
            ></FinishBtn>
          ));
        }
      });

      // 派單按鈕邏輯加工
      const assignActive = res.contentList.map(
        (item: { [x: string]: null }) => {
          return item["service_start_date"] !== null &&
            item["service_end_date"] !== null
            ? false
            : true;
        }
      );
      MainMissionData?.map((item, idx) => {
        if (item["all_assignment_no"].value.length < 15) {
          return (item["all_assignment_no"].label = (
            <AssignBtn
              id={item.maintenance_no["value"]}
              disabled={assignActive[idx]}
              assignmentData={res.contentList}
            ></AssignBtn>
          ));
        }
      });

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
      console.log("MainMissionData", MainMissionData);
      setData(MainMissionData);
    });
  };
  //
  const deleteItemHandler = async (id: string) => {
    console.log("888");
    const maintenance_status = "2";
    UpdateMaintenanceStatus(id, maintenance_status)
      .then((res) => {
        console.log("DELETE res", res);
        router.reload();
      })
      .catch((err) => {
        console.log("err of update status ", err);
      });
  };
  //進入供應商編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/maintenance/detail/" + id + "?editPage=edit");
  };
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
          <MaintenanceMissionList
            clientData={data}
            goToCreatePage={() => {
              setDrawerOpen(true);
            }}
            deleteItemHandler={deleteItemHandler}
            goToEditPageHandler={goToEditPageHandler}
            goToDetailPage={goToDetailPageHandler}
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
            reloadData={() => {
              fetchMaintenanceData(false);
              setDrawerOpen(false);
            }}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
