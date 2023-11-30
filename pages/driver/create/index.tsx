import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import ControlBar from "@components/ControlBar";
import InfoCard from "@components/InfoCard";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import CustomTextArea from "@components/CustomTextArea";
import NewUploader from "@components/NewUploader";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomDatePicker from "@components/CustomDatePicker";
import TagGenerator from "@components/TagGenerator";
import Uploader from "@components/Uploader";
import StarRate from "@components/StarRate";

import {
  Select,
  TextInput,
  Textarea,
  FileUploader,
  FileCard,
  SmallPlusIcon,
  Pane,
  InlineAlert,
  TextInputField,
  toaster
} from "evergreen-ui";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  React.useEffect(() => {
    console.log("hello");
  }, []);

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  const BasicInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "駕駛姓名",
      bold: true,
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "英文姓名",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "國籍",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入手機" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身分證字號",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "性別",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "生日",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "語言",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身高",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "體重",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "手機",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "學歷",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "信箱",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    }
  ];

  const EmployeeInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "員工編號",
      bold: false,
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "隸屬組織",
      bold: false,
      value: "--"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      bold: false,
      label: "入職日期",
      value: "--",
      editEle: <TextInput className="required" placeholder="請輸入手機" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      bold: true,
      label: "派駐區域",
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      ),
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      bold: true,
      label: "車隊",
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      ),
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50 m-0",
      readonly: false,
      req: true,
      bold: true,
      label: "排班設定",
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      ),
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    },
    {
      listClassName: "fb-50 m-0",
      readonly: false,
      req: false,
      bold: true,
      label: "駕駛分級",
      value: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      ),
      editEle: <TextInput className="required" placeholder="請輸入信箱" />
    }
  ];

  const TagInFo = [
    {
      listClassName: "fb-100 m-0 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: <TagGenerator />
    }
  ];

  const LicenseInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "駕照種類",
      bold: true,
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
      label: "有效期限",
      bold: true,
      value: <CustomDatePicker placeholder="請輸入有效期限" />
    },
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: true,
      label: "附件/相關檔案",
      bold: true,
      value: <NewUploader />
      // value: <Uploader label="123"/>
    }
  ];

  const CommentInFo = [
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: <CustomTextArea placeholder={"請輸入備註"} />
    }
  ];

  const TrainingInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "項目名稱",
      bold: true,
      value: (
        <Select className={"select-wrapper"} disabled>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "培訓人",
      bold: true,
      value: (
        <CustomTextInputField
          className="input"
          // isInvalid={true}
          placeholder="請輸入培訓人姓名"
          // validationMessage="不可輸入符號"
        />
      )
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "訓練期間",
      bold: true,
      value: <CustomDatePicker placeholder="請輸入訓練期間" isRange />
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "訓練通過日期",
      bold: true,
      value: <CustomDatePicker placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "說明",
      bold: true,
      value: <CustomTextArea placeholder="請輸入訓練通過日期" />
    },
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      label: "附件/相關檔案",
      bold: true,
      value: <NewUploader />
    }
  ];

  return (
    <>
      <ControlBar
        // isEdit={editPage === "edit"}
        isEdit={true}
        handleNavigation={handleNavigation}
        primaryDisable={true}
      />
      <BodySTY>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={false}
            infoData={BasicInFo}
            infoTitle="基本資料"
            hasProfileCard={true}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={false}
            infoData={EmployeeInFo}
            infoTitle="職員資料"
          />
          <InfoCard isEdit={false} infoData={TagInFo} infoTitle="標籤" />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={false} infoData={LicenseInFo} infoTitle="駕照" />
          <SecondaryButton text="新增其他證照" className={"create-more-button"}>
            <SmallPlusIcon />
          </SecondaryButton>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={false} infoData={CommentInFo} infoTitle="備註" />
          <InfoCard
            isEdit={false}
            infoData={TrainingInFo}
            infoTitle="教育訓練"
          />
        </Pane>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
