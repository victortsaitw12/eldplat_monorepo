import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { ViewIdSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import MonthlyView from "@contents/Shift/MonthlyView";
import DrawerContent from "@contents/Shift/DrawerContent";
import Tabs from "@components/Tabs";
import TableTitle from "@contents/Shift/TableTitle";
import LayoutControl from "@contents/Shift/LayoutControl";
import DailyView from "@contents/Shift/DailyView";
import TotalLeaveDays from "@contents/Shift/TotalLeaveDays";
import { getScheduleList } from "@services/schedule/getScheduleList";
import MonthlyHeader from "@contents/Shift/MonthlyView/MonthlyHeader";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import MonthPicker from "@contents/Schedule/MonthPicker";
import Schedule from "@contents/Schedule/ScheduleTable";
import ButtonSet from "@components/ButtonSet";

const DriverScheduleView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  // const containerRef = useRef(null);
  // const { id, curitPage } = router.query;
  const { id, editPage } = router.query;
  const [monthlyData, setMonthlyData] = useState<MonthlyData[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderDate, setRenderDate] = useState(new Date());
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  // const userFullName = monthlyData
  //   ?.at(0)
  //   ?.user_First_Name.concat(monthlyData[0]?.user_Name);
  const DUMMY_driverData= {
      user_no: "USR202305240008",
      user_name: "鍾俊儀",
      user_email: "ania@test.com",
      user_phone: "0968547854",
      driver_no: "DRV202307060001",
      license_no: "A100000",
      license_area: "2039003000000000",
      license_area_name: "台北市",
      license_lvl: "S級",
      driver_seniority: "5",
      driver_country: "2039000000000000",
      driver_country_name: "台灣",
      dsph_area: "03",
      dsph_area_name: "北北基",
      dsph_group: "03",
      dsph_group_name: "第一車隊",
      working_hours_code: "01",
      working_hours_name: "八週變形工時"
    };

  //------ functions ------//
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
  const handleChangeMonth = (v: Date) => {
    setRenderDate(v);
  };
  // ------- useEffect ------- //
  useEffect(() => {
    if (!id) return;
    fetchData();
    setIsEdit(editPage === "edit" || false);
  }, [id]);
  //------ render ------//
  // const tableName = [
  //   <MonthPicker key="monthpicker" initialMonthFirst={initialMonthFirst} />,
  //   <TotalLeaveDays
  //     key="totalLeaveDays"
  //     monthlyData={monthlyData}
  //     initialMonthFirst={initialMonthFirst}
  //   />
  // ];

  return (
    <UIProvider>
      <ViewIdSTY>
        <Head>
          <title>駕駛排班 - {id}</title>
        </Head>
        <Pane className="pageContent">
          <ControlBar>
            <DataOverview
              data={DUMMY_driverData} 
              hasImage={isEdit ? false : true}
            />
            {
              isEdit ? 
              <ButtonSet
                primaryDisable={false}
                secondaryBtnText="退回"
                // secondaryBtnOnClick={handleView}
                primaryBtnText="同意"
                // primaryBtnOnClick={isEdit ? handleView : handleEdit}
              /> : 
              <MonthPicker
                key="monthpicker"
                initialDate={renderDate}
                onMonthChange={handleChangeMonth}
              /> 
            }
          </ControlBar>
          <Schedule
            initialDate={renderDate}
          />
          </Pane>
      </ViewIdSTY> 
    </UIProvider>
  );
};

DriverScheduleView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default DriverScheduleView;