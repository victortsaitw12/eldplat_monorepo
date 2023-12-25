import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { Pane, toaster } from "evergreen-ui";
import { BodySTY } from "./style";
import Head from "next/head";
import { useRouter } from "next/router";
//
import { getLayout } from "@layout/MainLayout";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_PageInfo } from "@components/PaginationField";

import {
  getAllAssignments,
  defaultPageInfo
} from "@services/assignment/getAllAssignment";

import { getAllMission } from "@services/assignment/getAllMission";
import MonthPicker from "@contents/Schedule/MonthPicker";
import BusTable from "@contents/Assignment/BusTable";
import MissionTable from "@contents/Assignment/MissionTable";
import BusStatusRow from "@contents/Assignment/BusStatusRow";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import { PlusIcon } from "evergreen-ui";

// ----- variables ----- //
const mainFilterArray = [
  { id: 1, label: "任務列表", value: "1" },
  { id: 2, label: "車輛分配", value: "2" }
];
const DUMMY_subfilter = {
  User_Name: {
    field_Name: "User_Name",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "搜尋",
    value: ""
  },
  Dsph_Date: {
    field_Name: "Dsph_Date",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "date",
    label: "日期區間",
    value: ""
  },
  Dsph_catefory: {
    field_Name: "Dsph_catefory",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "string",
    label: "分類",
    value: ""
  }
};
const DUMMY_data = [];

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [nowTab, setNowTab] = useState("1");
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);

  const [renderDate, setRenderDate] = React.useState(new Date());
  const [busData, setBusData] = useState<any>([]);
  const [missionData, setMissionData] = useState<any>([]);

  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useAssignmentStore();

  //------ functions ------//
  const fetchAssignData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo = defaultPageInfo
  ) => {
    getAllAssignments(pageInfo)
      .then((res) => {
        const data = res;
        setBusData(data);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
  };

  const fetchMissionData = async (pageInfo = defaultPageInfo) => {
    getAllMission(pageInfo)
      .then((res) => {
        const data = res;
        setMissionData(data);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
  };
  const handleChangeMonth = (v: Date) => {
    setRenderDate(v);
  };
  // 處理mainFilter
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };

  // 處理切換頁面
  // const upDatePageHandler = (newPageInfo: I_PageInfo) => {
  //   fetchAssignData(false, nowTab, newPageInfo);
  // };

  // const handleAssignCreate = (type: I_FirstDrawer, id: string) => {
  //   fetchDrawerInfo(id);
  //   setFirstDrawerOpen(type);
  // };

  useEffect(() => {
    const isCanceled = false;
    fetchAssignData(isCanceled, "1");
    fetchMissionData();
  }, []);

  return (
    <BodySTY>
      <Head>
        <title>任務指派</title>
      </Head>
      <div className="pageContent">
        <TabsWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
        >
          {nowTab === "1" && <BusStatusRow />}
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={DUMMY_subfilter}
            btns={
              nowTab === "1" ? (
                <PrimaryBtn
                  text="新增任務"
                  onClick={() => router.push("/assignment/detail/create")}
                >
                  <PlusIcon />
                </PrimaryBtn>
              ) : (
                <MonthPicker
                  key="monthpicker"
                  initialDate={renderDate}
                  onMonthChange={handleChangeMonth}
                />
              )
            }
          >
            {nowTab === "1" ? (
              <MissionTable data={missionData} initialDate={renderDate} />
            ) : (
              <Pane className="pageContent">
                <div className="overviewContainer">
                  <BusTable data={busData} initialDate={renderDate} />
                </div>
              </Pane>
            )}
          </FilterWrapper>
        </TabsWrapper>
      </div>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
