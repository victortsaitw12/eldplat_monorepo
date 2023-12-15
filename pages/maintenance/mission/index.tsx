import React, { useState, useEffect, ReactNode, useCallback } from "react";
import { NextPageWithLayout } from "next"; //
import { getLayout } from "@layout/MainLayout";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import MaintenanceMissionList from "@contents/maintenance/Mission/MissionList";
import {
  UpdateMaintenanceStatus,
  defaultPageInfo,
  getAllMaintenanceMissions,
  maintenanceParser,
  maintenancePattern
} from "@services/maintenance/getMaintenanceMission";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import MaintenanceCreateForm from "@contents/maintenance/MaintenanceCreateForm";
import FinishBtn from "@contents/maintenance/Mission/MissionList/FinishBtn";
import AssignBtn from "@contents/maintenance/Mission/MissionList/AssignBtn";
import { CloseAssignment } from "@services/maintenance/updateMaintenance";
import Link from "next/link";
import { I_PageInfo } from "@components/PaginationField";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
//
const mainFilterArray = [
  { id: 1, label: "任務", value: "1" },
  { id: 2, label: "取消", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [nowTab, setNowTab] = useState("1");
  const [listStatus, setListStatus] = useState("1");
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);
  const [loading, setLoading] = useState(false);
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
    mainFilter = "1",
    pageQuery = defaultPageInfo
  ) => {
    getAllMaintenanceMissions(subFilter, mainFilter, pageQuery).then((res) => {
      console.log("1️⃣res for mission", res);

      const MainMissionData = mappingQueryData(
        res.contentList,
        maintenancePattern,
        maintenanceParser
      );

      // 處理分頁
      const getPageInfo = { ...res.pageInfo };
      getPageInfo["orderby"] = "maintenance_no";
      setPageInfo(getPageInfo);

      // 由於table內不只有靜態資料顯示(有button功能)，所以客制加工一下 => 結案按鈕
      MainMissionData?.map((item) => {
        if (item["completion_time"].label === "---") {
          const active =
            item["all_assignment_no"].value.length > 30 ? false : true;

          return (item["completion_time"].label = (
            <FinishBtn
              id={item.maintenance_no["value"]}
              disabled={active}
              setListStatus={setListStatus}
            ></FinishBtn>
          ));
        }
      });

      // 派單按鈕邏輯加工
      const assignActive = res?.contentList?.map(
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

        const newString = item["all_assignment_no"].value.split(", ");
        if (item["all_assignment_no"].value.length > 15) {
          return (item["all_assignment_no"].label = (
            <div className="assignment-link">
              {newString.map((v: string) => {
                return (
                  <Link href="/assignment" key={v}>
                    {v}
                  </Link>
                );
              })}
            </div>
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
    const maintenance_status = "2";

    // ⭐按下停用按鈕關閉派單表API
    const assignRes = await CloseAssignment(id, "02");

    // ⭐按下停用按鈕把維保狀態改為2停用
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
    fetchMaintenanceData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab, listStatus]);

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
            pageInfo={pageInfo}
            handlePageChange={handlePageChange}
          />
        </FilterWrapper>
      </TabsWrapper>
      {isDrawerOpen && (
        <Drawer
          tabName={["新增維保計畫"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <MaintenanceCreateForm
            noticeData={data}
            reloadData={() => {
              fetchMaintenanceData(false);
              setDrawerOpen(false);
            }}
            mainCreateDdl={mainCreateDdl}
            setMainCreateDdl={setMainCreateDdl}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
