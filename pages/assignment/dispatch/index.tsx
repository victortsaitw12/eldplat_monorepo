import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane, toaster } from "evergreen-ui";
import { BodySTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import ApprovalTable from "@contents/Schedule/ApprovalTable";
import CreateMission from "@contents/Assignment/Mission/CreateMission";
import LightBox from "@components/Lightbox";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import CustomTextArea from "@components/CustomTextArea";
import InfoItem from "@components/InfoCard/InfoItem";
import { Truculenta } from "next/font/google";
import InfoCard from "@components/InfoCard";
import CustomTextInputField from "@components/CustomTextInputField";

const ApprovalView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { id, editPage } = router.query;
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const modalInfo = {
    listClassName: "",
    readonly: false,
    req: true,
    label: "說明",
    bold: true,
    value: <CustomTextArea placeholder="請輸入說明" />
  };

  const missionInfo = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "任務單號",
        bold: true,
        value: <a>ORD202312310003</a>
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "分類",
        bold: true,
        value: "客製包車"
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "需求",
        bold: true,
        value: "2天2車"
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "出發地",
        bold: true,
        value: "台北車站"
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "回程地",
        bold: true,
        value: "捷運南港站"
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "起始時間",
        bold: true,
        value: "2024-01-01 (一) 08:00"
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "截止時間",
        bold: true,
        value: "2024-01-02 (二) 12:00"
      }
    ]
  ];

  const dispatchInfo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "車輛",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "駕駛",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: <CustomTextArea placeholder="請輸入說明" />
    }
  ];

  //------ functions ------//
  const submitHandler = () => {
    router.push("/assignment");
    toaster.success("成功新增任務");
  };
  const cancelModalHandler = () => {
    setOpenModal(false);
    router.push("/assignment");
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
        <title>任務指派 - 新增派單</title>
      </Head>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          primaryDisable={false}
          secondaryBtnText="取消"
          secondaryBtnOnClick={() => setOpenModal(true)}
          primaryBtnText="確定新增派單"
          primaryBtnOnClick={submitHandler}
        />
      </ControlBar>
      <Pane className="table">
        <Pane className="mission_info_wrapper">
          <InfoCard
            isEdit={false}
            infoData={missionInfo}
            infoTitle="任務資訊"
            hasProfileCard={false}
            hasCollapse={true}
          />
        </Pane>
        <Pane className="mission_dispatch_wrapper">
          <InfoCard
            isEdit={false}
            infoData={dispatchInfo}
            infoTitle="任務指派"
            hasProfileCard={false}
          />
        </Pane>
      </Pane>
      <LightBox
        title="確定要離開嗎?"
        isOpen={isOpenModal}
        handleCloseLightBox={() => setOpenModal(false)}
        onConfirm={cancelModalHandler}
        onCancel={() => setOpenModal(false)}
      >
        如果你現在離開，將會遺失未儲存的資料。
      </LightBox>
    </BodySTY>
  );
};

ApprovalView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default ApprovalView;
