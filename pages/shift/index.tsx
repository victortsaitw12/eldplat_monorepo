import React from "react";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ShiftSTY, AlertSTY } from "./style";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { useShiftStore } from "@contexts/filter/shiftStore";
import { getAllDriverScheduleListFiltered } from "@services/schedule/getAllDriverScheduleListFiltered";
import MainBookmark from "@contents/MainBookmark";
import MonthPicker from "@contents/Shift/MonthPicker";
import Tabs from "@components/Tabs";
import TableTitle from "@components/Table/TableTitle";
import OverviewTable from "@contents/Shift/OverviewTable";
import ZoomBar from "@components/ZoomBar";
import { EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";
import AlertBox from "@components/AlertBox";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

const ShiftPage: NextPageWithLayout<never> = () => {
  const UI = React.useContext(UIContext);

  const [isExpand, setIsExpand] = React.useState(false);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useShiftStore();

  React.useEffect(() => {
    updateMainFilter("active");
  }, []);

  React.useEffect(() => {
    let isCanceled = false;
    const dateStr = `${initialMonthFirst.getFullYear()}-${(
      initialMonthFirst.getMonth() +
      1 +
      0
    )
      // UI.monthCount
      .toString()
      .padStart(2, "0")}`;
    const fetchFilterData = async (isCanceled: boolean) => {
      getAllDriverScheduleListFiltered(dateStr, subFilter).then((res) => {
        // const resultData = res.contentList ? [...res.contentList] : [];
        if (isCanceled) return;
        if (!subFilter) {
          localStorage.setItem(
            "shiftInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
      });
    };
    fetchFilterData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, [mainFilter, subFilter, initializeSubFilter]);

  //------ functions ------//
  const handleZoombar = (value: boolean) => {
    setIsExpand(value);
  };

  //------ get current month from user ------//
  const TODAY = new Date();
  const initialMonthFirst: Date = new Date(
    TODAY.getFullYear(),
    TODAY.getMonth(),
    1
  );

  // TODO 滑鼠左右滾的動作 目前用onWeel 放在 OverviewTable裡面 TableSTY上

  return (
    <UIProvider>
      <ShiftSTY>
        <Head>
          <title>駕駛排班總覽</title>
        </Head>
        <Pane className="wrap">
          <Tabs titles={["啟用"]} />
          {/* <MainBookmark
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={subFilter}
          > */}
          <Pane className="pageContent">
            <TableTitle
              tableName={[
                <MonthPicker
                  key="monthpicker"
                  initialMonthFirst={initialMonthFirst}
                />,
                <div key="tabelTitle-type" className="container-header-left">
                  <span>全部區域</span>
                  <span>全部都市</span>
                </div>
              ]}
              control={[<ZoomBar key="zoombar" setState={handleZoombar} />]}
              sub={Array.from(EVENT_TYPE).map(([key, value]) => {
                if (key !== "00") return <EventTag key={key} value={value} />;
              })}
              page={true}
            />
            <OverviewTable
              initialMonthFirst={initialMonthFirst}
              isExpand={isExpand}
            />
            {/* <Test />  for dnd*/}
          </Pane>
          {/* </MainBookmark> */}
        </Pane>
      </ShiftSTY>
    </UIProvider>
  );
};

ShiftPage.getLayout = getLayout;
export default ShiftPage;
