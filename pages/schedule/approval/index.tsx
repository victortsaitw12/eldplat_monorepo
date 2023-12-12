import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ApprovalSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import MonthPicker from "@contents/Shift/MonthPicker";
import MonthlyView from "@contents/Shift/MonthlyView";
import DrawerContent from "@contents/Shift/DrawerContent";
import Tabs from "@components/Tabs";
import TableTitle from "@contents/Shift/TableTitle";
import LayoutControl from "@contents/Shift/LayoutControl";
import DailyView from "@contents/Shift/DailyView";
import TotalLeaveDays from "@contents/Shift/TotalLeaveDays";
import { getScheduleList } from "@services/schedule/getScheduleList";
import MonthlyHeader from "@contents/Shift/MonthlyView/MonthlyHeader";
import ApprovalTable from "@contents/Schedule/ApprovalTable";

const ApprovalView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const containerRef = React.useRef(null);
  const { id, cur } = router.query;
  const [monthlyData, setMonthlyData] = React.useState<MonthlyData[] | null>(
    null
  );
  const [view, setView] = React.useState<"monthly" | "daily">("monthly");
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
  };
  const handleSelectTab = (index: number) => {
    setSelectedIndex(index);
    if (index === 0) router.push("/shift");
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getScheduleList(id);
      setMonthlyData(result.data);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);


  return (
    <UIProvider>
      <ApprovalSTY>
        <Head>
          <title>駕駛排班 - {monthlyData ? userFullName : ""}</title>
        </Head>
        <Pane className="table">
          <ApprovalTable/>
        </Pane>
          {/* <Pane className="pageContent">
            <div className="monthlyContainer" ref={containerRef}>
              <MonthlyHeader />
              <MonthlyView
                monthlyData={monthlyData}
                initialMonthFirst={initialMonthFirst}
                setIsOpenDrawer={setIsOpenDrawer}
                view={view}
                containerRef={containerRef}
              />
            </div>
          </Pane> */}
      </ApprovalSTY>
    </UIProvider>
  );
};

ApprovalView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default ApprovalView;
