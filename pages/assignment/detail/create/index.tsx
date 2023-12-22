import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";
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
        <title>任務指派 - 新增任務</title>
      </Head>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          primaryDisable={false}
          secondaryBtnText="取消"
          secondaryBtnOnClick={cancelApproveHandler}
          primaryBtnText="確定新增任務"
          // primaryBtnOnClick={isEdit ? handleView : handleEdit}
        />
      </ControlBar>
      <Pane className="table">
        <CreateMission />
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
