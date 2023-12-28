import React, { useState, useEffect, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { useRouter } from "next/router";
import { toaster, Pane, Spinner, Select, Group } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_DriverInfo } from "@contents/Driver/driver.type";
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getDriverById } from "@services/driver/getDriverById";
import { updateDriver } from "@services/driver/updateDriver";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import InfoCard from "@components/InfoCard";
import NoData from "@components/NoData";
import InputGenerator from "@components/InputGenerator";
import LightBox from "@components/Lightbox";

const Page: NextPageWithLayout<InferGetServerSidePropsType<never>> = ({
  driverNo
}) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷"edit"
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [driverData, setDriverData] = useState<I_DriverInfo>();
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [isLightOpen, setLightOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data: I_DriverInfo = await getDriverById(driverNo);
        if (!data.info) {
          toaster.warning("查無此使用者，請重新選擇");
          router.push("/driver");
        }
        setDriverData(data);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [driverNo]);

  useEffect(() => {
    setIsEdit(editPage === "edit" || false);
    // setIsEdit(true);
  }, [editPage]);

  const TeamInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      // value: <NoData className={"no-data"} text="尚無建立項目" />,
      value: (
        <ul className={"list-wrapper"}>
          <li>第一車隊</li>
          <li>第二車隊</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const AreaInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>北北基</li>
          <li>桃園</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const LevelInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>A級</li>
          <li>B級</li>
          <li>C級</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const TrainingInFo = [
    {
      listClassName: "fb-100 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <ul className={"list-wrapper"}>
          <li>新人訓練</li>
          <li>道安講座</li>
          <li>集團服務說明</li>
        </ul>
      ),
      editEle: <InputGenerator />
    }
  ];

  const handleEdit = () => {
    router.push("/driver_management?editPage=edit");
  };

  const handleReturn = () => {
    router.push("/driver");
  };

  const handleSave = () => {
    router.push("/driver_management?editPage=view");
    toaster.success("儲存成功");
  };

  const handleCancel = () => {
    setLightOpen(true);
  };

  const handleLightBoxConfirm = () => {
    router.push("/driver_management?editPage=view");
    setLightOpen(false);
  };

  return (
    <BodySTY>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          isEdit={false}
          primaryDisable={false}
          secondaryBtnText={isEdit ? "取消" : "回列表"}
          secondaryBtnOnClick={isEdit ? handleCancel : handleReturn}
          primaryBtnText={isEdit ? "儲存" : "編輯"}
          primaryBtnOnClick={isEdit ? handleSave : handleEdit}
        />
      </ControlBar>
      <Group className="wrapper">
        <Pane className={"main-column"}>
          <InfoCard isEdit={isEdit} infoData={TeamInFo} infoTitle={"車隊"} />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={AreaInFo}
            infoTitle={"派駐區域"}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={LevelInFo}
            infoTitle={"駕駛分級"}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={isEdit}
            infoData={TrainingInFo}
            infoTitle={"教育訓練項目"}
          />
        </Pane>
      </Group>
      <LightBox
        title="確定要離開嗎?"
        isOpen={isLightOpen}
        handleCloseLightBox={() => setLightOpen(false)}
        onConfirm={handleLightBoxConfirm}
        onCancel={() => setLightOpen(false)}
      >
        如果你現在離開，將會遺失未儲存的資料。
      </LightBox>
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
