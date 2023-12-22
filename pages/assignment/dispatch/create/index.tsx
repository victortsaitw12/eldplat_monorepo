import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";
import DispatchCreate from "@contents/Assignment/DispatchCreate"
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import ApprovalTable from "@contents/Schedule/ApprovalTable";
import CreateMission from "@contents/Assignment/CreateMission";
import LightBox from "@components/Lightbox";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import CustomTextArea from "@components/CustomTextArea";
import InfoItem from "@components/InfoCard/InfoItem";
import { Truculenta } from "next/font/google";
import InfoCard from "@components/InfoCard";

const ApprovalView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { id, editPage } = router.query;
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const BasicInFo = [
    [
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "任務資訊",
            value: <a>ORD202312310003</a>
        },
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "分類",
            value: "客製包車"
        },
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "需求",
            value: "兩天兩車"
        },
    ],
    [

        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "出發地",
            value: "台北車站"
        },
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "回程第",
            value: "捷運南港站"
        },
    ],
    [
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "起始時間",
            value: "2024-01-01(一) 08:00"
        },
        {
            listClassName: "fb-100",
            readonly: false,
            req: false,
            bold: false,
            label: "截止時間",
            value: "2024-01-02(二) 12:00"
        },
    ]
  ]

  const modalInfo = {
    listClassName: "",
    readonly: false,
    req: true,
    label: "說明",
    bold: true,
    value: <CustomTextArea placeholder="請輸入說明" />
  };

  //------ functions ------//
  const cancelApproveHandler = () => {
    setOpenModal(true);
  };
  const cancelModalHandler = () => {
    setOpenModal(false);
    router.push("/schedule/detail/DRV202311210001");
  };
  const fetchData = async () => {
    // setIsLoading(true);
    // try {
    //   const result = await getScheduleList(id);
    //   setMonthlyData(result.data);
    // } catch (e: any) {
    //   console.log(e);
    // }
    // setIsLoading(false);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  return (
    <BodySTY>
      <Head>
        <title>任務指派 - 手動派單</title>
      </Head>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          primaryDisable={false}
          secondaryBtnText="取消"
          secondaryBtnOnClick={cancelApproveHandler}
          primaryBtnText="確定派單"
          // primaryBtnOnClick={isEdit ? handleView : handleEdit}
        />
      </ControlBar>
      <Pane className="dispatch_info_area">
        <InfoCard 
        isEdit={true}
        infoData={BasicInFo}
        infoTitle="任務資訊"
        hasCollapse={true}
        />
      </Pane>
      <Pane className="dispatch_input_area">
        <DispatchCreate />
      </Pane>
      <LightBox
        title="退回"
        isOpen={isOpenModal}
        handleCloseLightBox={() => {
          setOpenModal(false);
        }}
        customBtns={
          <ButtonSet
            primaryBtnText="確定退回"
            secondaryBtnOnClick={() => {
              setOpenModal(false);
            }}
            primaryBtnOnClick={cancelModalHandler}
          />
        }
      >
        <InfoItem item={modalInfo} isEdit={true} />
      </LightBox>
    </BodySTY>
  );
};

ApprovalView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default ApprovalView;
