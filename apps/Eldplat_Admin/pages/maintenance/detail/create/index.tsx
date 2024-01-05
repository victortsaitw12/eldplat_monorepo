import React, { useState, ReactNode } from "react";
import { 
  NextPageWithLayout 
} from "next";
import { getLayout } from "@layout/MainLayout";
import ControlBar from "@components/ControlBar";
import ButtonSet from "@components/ButtonSet";
import InfoCard from "@components/InfoCard";
import CustomDatePicker from "@components/CustomDatePicker";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomTextArea from "@components/CustomTextArea";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import NewUploader from "@components/NewUploader";

import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { Select,SmallPlusIcon, Pane, Group } from "evergreen-ui";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [newCheckItem, setNewCheckItem] = useState<any>([]);

  const BasicInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "車牌",
      bold: true,
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
  ];

  const MissionInFo = [
    [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "分類",
      bold: false,
      value: (
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
      req: false,
      bold: false,
      label: "維修廠",
      value: (
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
      label: "項目",
      value: (<CustomTextArea placeholder="請輸入項目" />)
    },
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: true,
      bold: true,
      label: "維保日期",
      value: (<CustomDatePicker placeholder="請輸入訓練期間" isRange />)
    },
    ],
    [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "出發地",
      bold: false,
      value: (
        <Pane className="flex gap-1 flex-col">
          <Group className="flex gap-1">
            <CustomTextInputField
              className="required input"
              placeholder="郵遞區號"
            />
            <CustomTextInputField
              className="required"
              placeholder="國家"
            />
            <CustomTextInputField
              className="required"
              placeholder="城市"
            />
          </Group>
          <CustomTextInputField
              className="required w-full max-w-full"
              placeholder="地址"
          />
        </Pane>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      bold: true,
      label: "派工駕駛",
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      ),
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },

    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      bold: true,
      label: "維保里程",
      value: (
        <CustomTextInputField
          className="input"
          placeholder="里程"
        />
      )
    }
    ]
  ];
  
  const CheckItemInFo = [[
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "發票號碼",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          placeholder="Placeholder"
        />
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "金額",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          placeholder="Placeholder"
        />
      )
    },],[
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: true,
      label: "附件/相關檔案",
      bold: true,
      value: <NewUploader isEditable={true} />
    },],
    [{
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "備註",
      bold: true,
      value: (
        <CustomTextArea
          placeholder="請輸入備註"
        />
      )
    },
  ]];

  const newCheckItemInfo= [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "發票號碼",
        bold: true,
        value: (
          <CustomTextInputField
            className="input"
            placeholder="Placeholder"
          />
        )
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "金額",
        bold: true,
        value: (
          <CustomTextInputField
            className="input"
            placeholder="Placeholder"
          />
        )
      },],[
      {
        listClassName: "fb-100 m-0",
        readonly: false,
        req: true,
        label: "附件/相關檔案",
        bold: true,
        value: <NewUploader isEditable={true} />
      },],
      [{
        listClassName: "fb-100",
        readonly: false,
        req: true,
        label: "備註",
        bold: true,
        value: (
          <CustomTextArea
            placeholder="請輸入備註"
          />
        )
      },
    ]
  ];

  const handleCancel = () => {
    router.push("/maintenance/mission");
  };

  const handleSave = () => {
    router.push("/maintenance/mission");
  };

  const handleAddInfoCard = () => {
    const newCheckItemInfoCard = getNewCheckItemInfoCar(newCheckItem.length + 1);
    setNewCheckItem([...newCheckItem, newCheckItemInfoCard]);
  };

  const getNewCheckItemInfoCar = (id:number) => {
    console.log(id);
    const newCheckItemInfoCard = (
      <InfoCard key={id} isEdit={true} infoData={newCheckItemInfo} infoTitle="檢查項目" />
    );
    return newCheckItemInfoCard;
  }


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
       <Pane className={"main-column fb-33"}>
          <InfoCard
            isEdit={true}
            infoData={BasicInFo}
            infoTitle="車輛資料"
          />
        </Pane>
        <Pane className={"main-column fb-66"}>
          <InfoCard
            isEdit={true}
            infoData={MissionInFo}
            infoTitle="任務指派"
          />
        </Pane>
        <Pane className={"main-column w-full"}>
          <InfoCard isEdit={true} infoData={CheckItemInFo} infoTitle="檢查項目" />
          {newCheckItem}
          <SecondaryButton
            text="新增其他證照"
            className={"create-more-button"}
            onClick={handleAddInfoCard}
          >
            <SmallPlusIcon />
          </SecondaryButton>
        </Pane>
      </BodySTY>
  
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
