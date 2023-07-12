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
import ZoomBar from "@components/ZoomBar";
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
  const handleZoombar = (value: boolean) => {
    setIsExpand(value);
  };
  const handleLayout = (type: "monthly" | "daily") => {
    setView(type);
    setIsOpenDrawer(false);
    setIsExpand(false);
  };

  //------ render ------//
  const tableName = [
    <MonthPicker key="monthpicker" initialMonthFirst={initialMonthFirst} />,
    <div key="tabelTitle-type" className="container-header-left">
      {monthlyData ? (
        <>
          <span>{monthlyData[0]?.user_Name}</span>
          <span className="red">
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
      <ViewIdSTY isOpenDrawer={isOpenDrawer}>
        <Head>
          <title>
            駕駛排班 - {monthlyData ? monthlyData[0]?.user_Name : ""}
          </title>
        </Head>
        <Pane className="wrapMain">
          <Tabs
            titles={["全部"]}
            setIsOpenDrawer={setIsOpenDrawer}
            isOpenDrawer={isOpenDrawer}
          />
          <Pane className="pageContent">
            <TableTitle
              tableName={tableName}
              control={[
                <ZoomBar
                  key="zoombar"
                  initScale={isExpand ? 100 : 0}
                  setState={handleZoombar}
                />,
                <LayoutControl key="layoutControl" setState={handleLayout} />
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
                isExpand={isExpand}
              />
            ) : (
              <DailyView
                monthlyData={monthlyData}
                setMonthlyData={setMonthlyData}
                initialMonthFirst={initialMonthFirst}
                setIsOpenDrawer={setIsOpenDrawer}
                view={view}
                isExpand={isExpand}
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
      {/* <AlertBox
        type="none"
        title="提示"
        description="點擊員工列，檢視個別排班資訊。。"
        isRemoveable={true}
      /> */}
    </UIProvider>
  );
};

DriverScheduleView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps, title: <span>駕駛排班</span> });

export default DriverScheduleView;
