import React from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ViewSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/UIProvider";
import MonthPicker from "@contents/Shift/MonthPicker";
import MonthlyView from "@contents/Shift/MonthlyView";
import DrawerContent from "@contents/Shift/DrawerContent";
import Tabs from "@components/Tabs";
import TableTitle from "@components/Table/TableTitle";
import ZoomBar from "@components/ZoomBar";
import LayoutControl from "@contents/Shift/LayoutControl";
import DailyView from "@contents/Shift/DailyView";

const DriverScheduleView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { cur } = router.query;
  const [monthlyData, setMonthlyData] = React.useState<MonthlyData[] | null>(
    null
  );
  const [view, setView] = React.useState<"monthly" | "daily">("daily");

  const initialMonthFirst = new Date(
    Array.isArray(cur) ? cur[0] : cur || Date.now()
  );
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false); //如果頁面有 Drawer 時使用

  //------ render ------//
  const tableName = [
    <MonthPicker key="monthpicker" initialMonthFirst={initialMonthFirst} />,
    <div key="tabelTitle-type" className="container-header-left">
      {monthlyData ? (
        <>
          <span>{monthlyData[0]?.user_Name}</span>
          <span style={{ color: "red" }}>
            休假天數 {monthlyData[0]?.total_Leave_Days} 天
          </span>
        </>
      ) : (
        ""
      )}
    </div>
  ];

  return (
    <UIProvider>
      <ViewSTY isOpenDrawer={isOpenDrawer}>
        <Head>
          <title>駕駛排班 - 個人</title>
        </Head>
        <Pane className="wrap">
          <Tabs titles={["全部"]} />
          <Pane className="pageContent">
            <TableTitle
              tableName={tableName}
              control={[
                <ZoomBar key="zoombar" />,
                <LayoutControl
                  key="layoutControl"
                  view={view}
                  setView={setView}
                  setIsOpenDrawer={setIsOpenDrawer}
                />
              ]}
              sub={[]}
              page={false}
            />
            {view === "monthly" ? (
              <MonthlyView
                monthlyData={monthlyData}
                setMonthlyData={setMonthlyData}
                initialMonthFirst={initialMonthFirst}
                setIsOpenDrawer={setIsOpenDrawer}
                view={view}
              />
            ) : (
              <DailyView
                monthlyData={monthlyData}
                setMonthlyData={setMonthlyData}
                initialMonthFirst={initialMonthFirst}
                setIsOpenDrawer={setIsOpenDrawer}
                view={view}
              />
            )}
          </Pane>
        </Pane>
        <DrawerContent
          isOpenDrawer={isOpenDrawer}
          setIsOpenDrawer={setIsOpenDrawer}
          view={view}
        />
      </ViewSTY>
    </UIProvider>
  );
};

DriverScheduleView.getLayout = getLayout;
export default DriverScheduleView;