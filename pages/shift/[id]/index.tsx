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
import TotalLeaveDays from "@contents/shift/TotalLeaveDays";

const DriverScheduleView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { cur } = router.query;
  const [monthlyData, setMonthlyData] = React.useState<MonthlyData[] | null>(
    null
  );
  const [view, setView] = React.useState<"monthly" | "daily">("monthly");
  const [isExpand, setIsExpand] = React.useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false); //如果頁面有 Drawer 時使用
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

  const initialMonthFirst = new Date(
    Array.isArray(cur) ? cur[0] : cur || Date.now()
  );

  const userFullName = monthlyData
    ?.at(0)
    ?.user_First_Name.concat(monthlyData[0]?.user_Name);

  //------ functions ------//
  const handleLayout = (type: "monthly" | "daily") => {
    setView(type);
    setIsOpenDrawer(false);
    setIsExpand(false);
  };
  //------ render ------//
  const tableName = [
    <MonthPicker key="monthpicker" initialMonthFirst={initialMonthFirst} />,
    <TotalLeaveDays
      key="totalLeaveDays"
      monthlyData={monthlyData}
      initialMonthFirst={initialMonthFirst}
    />
  ];

  return (
    <UIProvider>
      <ViewIdSTY isOpenDrawer={isOpenDrawer}>
        <Head>
          <title>駕駛排班 - {monthlyData ? userFullName : ""}</title>
        </Head>
        <Pane className="wrapMain">
          <Tabs
            titles={["回到總表", monthlyData && userFullName]}
            selectedIdx={selectedIndex}
            isOpenDrawer={isOpenDrawer}
            onSelect={(index) => {
              setSelectedIndex(index);
              if (index === 0) router.push("/shift");
            }}
          />
          <Pane className="pageContent">
            <TableTitle
              tableName={tableName}
              control={[
                <LayoutControl
                  key="layoutControl"
                  setState={handleLayout}
                  isOpenDrawer={isOpenDrawer}
                  setIsOpenDrawer={setIsOpenDrawer}
                />
              ]}
              sub={[]}
              page={false}
            />
            {view === "monthly" ? (
              <div className="monthlyContainer">
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
              <div className="dailyContainer">
                <DailyView
                  monthlyData={monthlyData}
                  setMonthlyData={setMonthlyData}
                  initialMonthFirst={initialMonthFirst}
                  setIsOpenDrawer={setIsOpenDrawer}
                  view={view}
                />
              </div>
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
