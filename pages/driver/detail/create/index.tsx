import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar, toaster } from "evergreen-ui";

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
import ButtonSet from "@components/ButtonSet";
import LightBox from "@components/Lightbox";

import { Select, SmallPlusIcon, Pane } from "evergreen-ui";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [newLicense, setNewLicense] = useState<any>(null);
  const [isLightOpen, setLightOpen] = useState(false);

  React.useEffect(() => {
    console.log("hello");
  }, []);

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
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身分證字號",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "性別",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "生日",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "語言",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身高",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "體重",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "手機",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "學歷",
      value: "--"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "信箱",
      value: "--"
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
      value: "--"
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
      editEle: (
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
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
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
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
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
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const TagInFo = [
    {
      listClassName: "fb-100 m-0 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: <TagGenerator minHeight />
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
      value: <NewUploader isEditable={true} />
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
      req: true,
      label: "附件/相關檔案",
      bold: true,
      value: <NewUploader isMultiple={true} isEditable={true} />
    }
  ];

  const newLicenseInfo = [
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
      value: <NewUploader isEditable={true} />
    }
  ];

  const handleCancel = () => {
    setLightOpen(true);
  };

  const handleSave = () => {
    router.push("/driver");
    toaster.success("儲存成功");
  };

  const handleLightBoxConfirm = () => {
    router.push("/driver");
    setLightOpen(false);
  };

  const handleAddInfoCard = () => {
    setNewLicense(newLicenseInfoCard);
  };

  const newLicenseInfoCard = (
    <InfoCard isEdit={true} infoData={newLicenseInfo} infoTitle="證照1" />
  );

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
          <InfoCard
            isEdit={true}
            infoData={BasicInFo}
            infoTitle="基本資料"
            hasProfileCard={true}
          />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard
            isEdit={true}
            infoData={EmployeeInFo}
            infoTitle="職員資料"
          />
          <InfoCard isEdit={true} infoData={TagInFo} infoTitle="標籤" />
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoData={LicenseInFo} infoTitle="駕照" />
          {newLicense}
          <SecondaryButton
            text="新增其他證照"
            className={"create-more-button"}
            onClick={handleAddInfoCard}
          >
            <SmallPlusIcon />
          </SecondaryButton>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoData={CommentInFo} infoTitle="備註" />
          <InfoCard
            isEdit={true}
            infoData={TrainingInFo}
            infoTitle="教育訓練"
          />
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
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
