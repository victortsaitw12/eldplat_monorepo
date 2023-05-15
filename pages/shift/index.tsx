import React from "react";
import { NextPageWithLayout } from "next";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ShiftSTY } from "./style";
import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import MonthPicker from "@contents/Shift/MonthPicker";
import Tabs from "@components/Tabs";
import TableTitle from "@components/Table/TableTitle";
import OverviewTable from "@contents/Shift/OverviewTable";
import ZoomBar from "@components/ZoomBar";
import { EVENT_TYPE } from "@contents/Shift/shift.data";
import EventTag from "@contents/Shift/EventTag";

const ShiftPage: NextPageWithLayout<never> = () => {
  const [isExpand, setIsExpand] = React.useState(false);

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

  return (
    <UIProvider>
      <ShiftSTY>
        <Head>
          <title>駕駛排班總覽</title>
        </Head>
        <Pane className="wrap">
          <Tabs titles={["全部"]} />
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
              sub={Array.from(EVENT_TYPE).map(([key, value]) => (
                <EventTag key={key} value={value} />
              ))}
              page={true}
            />
            <OverviewTable
              initialMonthFirst={initialMonthFirst}
              isExpand={isExpand}
            />
            {/* <Test />  for dnd*/}
          </Pane>
        </Pane>
      </ShiftSTY>
    </UIProvider>
  );
};

ShiftPage.getLayout = getLayout;
export default ShiftPage;
