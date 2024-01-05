import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/MainLayout";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
import LoadingSpinner from "@components/LoadingSpinner";
import DataOverview from "@components/DataOverview";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import InfoCard from "@components/InfoCard";
import CustomTextInputField from "@components/CustomTextInputField";
import FileCard from "@components/FileCard";
import NewUploader from "@components/NewUploader";
import { Pane, Select, DotIcon } from "evergreen-ui";
import CustomDatePicker from "@components/CustomDatePicker";
import LightBox from "@components/Lightbox";

const FuelInfo = [
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "交易日期",
      value: "2023-12-01",
      editEle: <CustomDatePicker placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "供應商",
      value: "N072全國文德",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "交易人",
      value: "簡中華",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "當下里程",
      value: "12,000 公里",
      editEle: <CustomTextInputField placeholder="請輸入訓練期間" />
    }
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "發票號碼",
      value: "RD-05467486",
      editEle: <CustomTextInputField placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      bold: false,
      label: "油品單價",
      value: "NT 28",
      editEle: <CustomTextInputField placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "加油量",
      value: "300 公升",
      editEle: <CustomTextInputField placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      bold: false,
      label: "交易金額",
      value: "NT 8,400",
      editEle: <CustomTextInputField placeholder="請輸入訓練期間" />
    },
  ],
  [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: false,
      label: "附件/相關檔案",
      value: <FileCard />,
      editEle: <NewUploader isEditable={true} />
    }
  ]
];

const dataOverviewArray = [
  "大巴",
  "43 客座",
  "車齡 1 年",
  "內湖停車場",
  "第一組"
];

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ busId }) => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [busEquipmentData, setBusEquipmentData] = useState<any>(null);
  const [isLightOpen, setLightOpen] = useState(false);

  const handleSave = () => {
    // router.push(`/bus/equipment/${busId}?editPage=view`);
    router.push("/bus/detail/1?editPage=view");
  };

  const handleCancel = () => {
    setLightOpen(true);
  };

  const handleLightBoxConfirm = () => {
    router.push("/bus/detail/1?editPage=view");
    setLightOpen(false);
  };

  useEffect(() => {
    setIsEdit(editPage === "edit" ? true : false);
  }, [editPage]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BodySTY>
      <ControlBar hasShadow>
        <DataOverview
          title="KAA-001 雄雄獅頭號"
          subtitle={
            <>
              <DotIcon size={12} color="success" /> 待機中
            </>
          }
          infoArray={dataOverviewArray}
          hasImage={false}
        />
        <ButtonSet
          isEdit={false}
          primaryDisable={true}
          secondaryBtnText={"取消"}
          secondaryBtnOnClick={handleCancel}
          primaryBtnText={"儲存"}
          primaryBtnOnClick={handleSave}
        />
      </ControlBar>
      <Pane className={"main-column"}>
        <InfoCard isEdit={true} infoTitle="油耗紀錄" infoData={FuelInfo} />
      </Pane>
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

interface Props {
  busId: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      busId: params ? params.id : ""
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
