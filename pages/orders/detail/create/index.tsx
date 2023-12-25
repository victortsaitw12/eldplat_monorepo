import React, { ReactNode } from "react";
import {
  GetServerSideProps,
  NextPageWithLayout,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import ControlBar from "@components/ControlBar";
import InfoCard from "@components/InfoCard/PureStyle";
import { Select, Pane, Checkbox } from "evergreen-ui";
import ButtonSet from "@components/ButtonSet";
import Collapse from "@components/Collapse";
import InfoItem from "@components/InfoCard/InfoItem";
import CustomDatePicker from "@components/CustomDatePicker";
import CustomTextInputField from "@components/CustomTextInputField";

export interface I_infoData {
  editEle?: React.ReactNode;
  readonly?: boolean; //只讀
  req?: boolean; //必填
  value?: string | Array<string> | React.ReactNode; //值
  label?: string | React.ReactNode; //label文字
  inputType?: string;
  listClassName?: string;
  bold?: boolean;
}

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();

  const OrderContactInFo = [
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: true,
      label: "姓名",
      bold: true,
      value: (
        <CustomTextInputField
          placeholder="姓氏"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-2",
      readonly: false,
      req: false,
      label: "",
      value: (
        <CustomTextInputField
          placeholder="名字"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 mt-1",
      readonly: false,
      req: true,
      label: "國籍",
      value: (
        <Select width="100%">
          <option value="foo">請選擇</option>
        </Select>
      )
    },
    {
      listClassName: "fb-50 mb-1",
      readonly: false,
      req: true,
      label: "電話",
      value: (
        <CustomTextInputField
          placeholder="請輸入電話"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 mb-1",
      readonly: false,
      req: true,
      label: "信箱",
      value: (
        <CustomTextInputField
          placeholder="請輸入信箱"
          width="100%"
        ></CustomTextInputField>
      )
    }
  ];

  const PassengerInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: <Checkbox label="同訂單聯絡人"></Checkbox>
    },
    {
      listClassName: "fb-25",
      readonly: false,
      req: true,
      label: "姓名",
      bold: true,
      value: (
        <CustomTextInputField
          placeholder="姓氏"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: false,
      label: "",
      value: (
        <CustomTextInputField
          placeholder="名字"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: false,
      label: "",
      value: ""
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "電話",
      value: (
        <CustomTextInputField
          placeholder="請輸入電話"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 ",
      readonly: false,
      req: true,
      label: "信箱",
      value: (
        <CustomTextInputField
          placeholder="請輸入信箱"
          width="100%"
        ></CustomTextInputField>
      )
    }
  ];

  const ServiceInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "服務項目",
      bold: false,
      value: (
        <Select width="100%">
          <option value="foo">請選擇</option>
        </Select>
      )
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: <CustomDatePicker></CustomDatePicker>
    },
    {
      listClassName: "fb-33",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: (
        <>
          <div className="mb-3 label">出發</div>
          <div className="mb-2 value">2023-11-22 （三）</div>
          <div className="mb-3 label">回程</div>
          <div className="mb-2 value">2023-11-24 （五）</div>
          <hr />
        </>
      )
    }
  ];

  const ItineraryInFo = [
    {
      listClassName: "fb-25",
      readonly: false,
      req: false,
      label: "出發時間",
      bold: false,
      value: (
        <>
          <CustomTextInputField placeholder="出發時間"></CustomTextInputField>
        </>
      )
    }
  ];

  function MakeInfoCard(info: I_infoData[]): ReactNode {
    return (
      <ul className="col">
        {info.map((item, index) => (
          <InfoItem key={index} item={item} isEdit={true} />
        ))}
      </ul>
    );
  }

  const handleCancel = () => {
    router.push("/orders");
  };

  const handleSave = () => {
    router.push("/orders");
  };

  return (
    <>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          isEdit={false}
          primaryDisable={true}
          secondaryBtnText={"取消"}
          secondaryBtnOnClick={handleCancel}
          primaryBtnText={"儲存"}
          primaryBtnOnClick={handleSave}
        />
      </ControlBar>
      <BodySTY>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoTitle="聯絡資訊">
            <Collapse
              title="訂單聯絡人"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(OrderContactInFo)}
            </Collapse>
            <Collapse
              title="乘車代表人"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(PassengerInFo)}
            </Collapse>
          </InfoCard>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoTitle="選擇項目">
            {MakeInfoCard(ServiceInFo)}
          </InfoCard>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoTitle="行程資訊">
            <Collapse
              title="訂單聯絡人"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(ItineraryInFo)}
            </Collapse>
          </InfoCard>
        </Pane>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
