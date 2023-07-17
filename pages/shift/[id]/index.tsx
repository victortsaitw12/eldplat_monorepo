import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ViewIdSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import MonthPicker from "@contents/Shift/MonthPicker";
import MonthlyView from "@contents/Shift/MonthlyView";
import DrawerContent from "@contents/Shift/DrawerContent";
import Tabs from "@components/Tabs";
import TableTitle from "@components/Table/TableTitle";
import LayoutControl from "@contents/Shift/LayoutControl";
import DailyView from "@contents/Shift/DailyView";

const DriverScheduleView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { cur } = router.query;
  const [monthlyData, setMonthlyData] = React.useState<MonthlyData[] | null>(
    null
  );
  const [view, setView] = React.useState<"monthly" | "daily">("monthly");
  const [isExpand, setIsExpand] = React.useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false); //如果頁面有 Drawer 時使用

  const initialMonthFirst = new Date(
    Array.isArray(cur) ? cur[0] : cur || Date.now()
  );

  //------ functions ------//
  const handleLayout = (type: "monthly" | "daily") => {
    setView(type);
    setIsOpenDrawer(false);
    setIsExpand(false);
  };

  //------ render ------//
  const tableName = [
    <MonthPicker key="monthpicker" initialMonthFirst={initialMonthFirst} />,
    <div key="tabelTitle-type" className="container-header-left">
      {monthlyData && (
        <span className="red">
          休假天數 {monthlyData[0]?.total_Leave_Days} 天
        </span>
      )}
    </div>
  ];

  return (
    <UIProvider>
      <ViewIdSTY isOpenDrawer={isOpenDrawer}>
        <Head>
          <title>
            駕駛排班 - {monthlyData ? monthlyData[0]?.user_Name : ""}
          </title>
        </Head>
        <Pane className="wrapMain">
          <Tabs
            titles={[monthlyData && monthlyData[0]?.user_Name]}
            setIsOpenDrawer={setIsOpenDrawer}
            isOpenDrawer={isOpenDrawer}
          />
          <Pane
            className="pageContent"
            style={{
              padding: `20px ${
                view === "monthly" ? "0px 20px" : "20px 0px"
              } 20px`
            }}
          >
            <TableTitle
              tableName={tableName}
              control={[
                <LayoutControl key="layoutControl" setState={handleLayout} />
              ]}
              sub={[]}
              page={false}
            />
            {view === "monthly" ? (
              <div className="monthlyContainer" style={{}}>
                <MonthlyView
                  monthlyData={monthlyData}
                  setMonthlyData={setMonthlyData}
                  initialMonthFirst={initialMonthFirst}
                  setIsOpenDrawer={setIsOpenDrawer}
                  view={view}
                  isExpand={isExpand}
                />
              </div>
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
      </ViewIdSTY>
    </UIProvider>
  );
};

DriverScheduleView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default DriverScheduleView;
