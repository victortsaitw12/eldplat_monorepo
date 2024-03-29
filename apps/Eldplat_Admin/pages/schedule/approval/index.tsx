import React, { ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pane, toaster } from "evergreen-ui";
import { ApprovalSTY } from "./style";
import { MonthlyData } from "@contents/Shift/shift.typing";

import { getLayout } from "@layout/MainLayout";
import UIProvider from "@contexts/scheduleContext/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import ApprovalTable from "@contents/Schedule/ApprovalTable";
import LightBox from "@components/Lightbox";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import CustomTextArea from "@components/CustomTextArea";
import InfoItem from "@components/InfoCard/InfoItem";
import { Truculenta } from "next/font/google";

const ApprovalView: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { id, cur } = router.query;

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
  const submitHandler = () => {
    router.push("/schedule/detail/DRV202311210001");
    toaster.success("成功簽核");
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
    <ApprovalSTY>
      <Head>
        <title>駕駛排班 - </title>
      </Head>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          primaryDisable={false}
          secondaryBtnText="退回"
          secondaryBtnOnClick={cancelApproveHandler}
          primaryBtnText="同意"
          primaryBtnOnClick={submitHandler}
        />
      </ControlBar>
      <Pane className="table">
        <ApprovalTable />
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
    </ApprovalSTY>
  );
};

ApprovalView.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default ApprovalView;
