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
import EditMission from "@contents/Assignment/EditMission";
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
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);

  const modalInfo = {
    listClassName: "",
    readonly: false,
    req: true,
    label: "說明",
    bold: true,
    value: <CustomTextArea placeholder="請輸入說明" />
  };

  //------ functions ------//
  const submitHandler = () => {
    router.push("/assignment");
    toaster.success("成功修改任務");
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
  console.log(editPage);
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
          secondaryBtnOnClick={() => setOpenModal(true)}
          primaryBtnText="確定修改任務"
          primaryBtnOnClick={submitHandler}
        />
      </ControlBar>
      <Pane className="table">
        <EditMission />
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
