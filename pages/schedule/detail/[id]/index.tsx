import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane, DotIcon } from "evergreen-ui";
import { ViewIdSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import MonthPicker from "@contents/Schedule/MonthPicker";
import Schedule from "@contents/Schedule/ScheduleTable";
import ButtonSet from "@components/ButtonSet";
import LightBox from "@components/Lightbox";
import InfoItem from "@components/InfoCard/InfoItem";
import CustomTextArea from "@components/CustomTextArea";
import LoadingSpinner from "@components/LoadingSpinner";

const dataOverviewArray = [
  "第一車隊",
  "北北基",
  "S級",
  "0912-345-678",
  "應休 15 天",
  "已休 10 天"
];

const editDataOverviewArray = ["0912-345-678", "應休 15 天", "已休 10 天"];

const DriverScheduleView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  // const containerRef = useRef(null);
  // const { id, curitPage } = router.query;
  const { id, editPage } = router.query;
  const [monthlyData, setMonthlyData] = useState<MonthlyData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderDate, setRenderDate] = useState(new Date());
  const [shiftData, setShiftData] = useState<any>([]);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);

  const modalInfo = {
    listClassName: "",
    readonly: false,
    req: true,
    label: "說明",
    bold: true,
    value: <CustomTextArea placeholder="請輸入說明" />
  };

  const DUMMY_driverData = {
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
  const cancelApproveHandler = () => {
    setOpenModal(true);
  };
  const cancelModalHandler = () => {
    setOpenModal(false);
    router.push("/schedule");
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getScheduleList(id);
      setShiftData(result);
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
    // setIsEdit(editPage === "edit" || false);
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
              title={
                isEdit
                  ? "鍾俊儀 2023-12-31 ～ 2024-02-24 預排班表"
                  : "鍾俊儀 JUN-YI ZHONG"
              }
              subtitle={isEdit ? "" : "🏳️‍⚧️ 台灣"}
              infoArray={isEdit ? editDataOverviewArray : dataOverviewArray}
              hasImage={isEdit ? false : true}
            />
            {isEdit ? (
              <ButtonSet
                primaryDisable={false}
                secondaryBtnText="退回"
                secondaryBtnOnClick={cancelApproveHandler}
                primaryBtnText="同意"
                // primaryBtnOnClick={isEdit ? handleView : handleEdit}
              />
            ) : (
              <MonthPicker
                key="monthpicker"
                initialDate={renderDate}
                onMonthChange={handleChangeMonth}
              />
            )}
          </ControlBar>
          {shiftData.length !== 0 && (
            <Schedule initialDate={renderDate} shiftData={shiftData} />
          )}
          {isEdit && (
            <LightBox
              title="退回"
              isOpen={isOpenModal}
              handleCloseLightBox={() => {
                setOpenModal(false);
              }}
              customBtns={
                <ButtonSet
                  primaryBtnText="確定退回"
                  secondaryBtnOnClick={cancelModalHandler}
                />
              }
            >
              <InfoItem item={modalInfo} isEdit={true} />
            </LightBox>
          )}
        </Pane>
      </ViewIdSTY>
    </UIProvider>
  );
};

DriverScheduleView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default DriverScheduleView;
