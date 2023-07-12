import React from "react";
import {
  Select,
  TextInput,
  IconButton,
  EyeOpenIcon,
  Checkbox,
  Textarea,
  Tag
} from "evergreen-ui";

import InfoBox from "@components/InfoBox";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import FlexWrapper from "@layout/FlexWrapper";
import { UpdateDriverInfoPayload } from "../../driver.type";
import LanguageAbility from "@contents/Driver/Detail/LanguageAbility";
import TagSelect from "@components/TagSelect";
interface Props {
  selected?: boolean;
  register: UseFormRegister<UpdateDriverInfoPayload>;
  getValues: UseFormGetValues<UpdateDriverInfoPayload>;
  isEdit: boolean;
  driverData: any;
}

function DriverInfo({
  selected,
  register,
  getValues,
  isEdit,
  driverData
}: Props) {
  const { info, healths, languages } = driverData;
  const [checked, setChecked] = React.useState(false);
  console.log("driverData", driverData);
  console.log("getValues", getValues());
  // 基本資料
  const basicInfo = [
    {
      readonly: true,
      label: "姓名",
      value: info["user_name"] || "目前無資料"
    },
    {
      readonly: true,
      label: "E-Mail",
      value: info["user_email"] || "目前無資料"
    },
    {
      readonly: true,
      label: "手機",
      value: info["user_phone"] || "目前無資料"
    }
  ];
  // 駕駛履歷
  const resumeInfo = [
    {
      readonly: true,
      label: "使用者編號",
      value: driverData["user_name"] || "目前無資料"
    },
    {
      req: false,
      label: "駕照編號",
      value: getValues("license_no") || "目前無資料",
      editEle: <TextInput {...register("license_no")} />
    },
    {
      req: false,
      label: "駕駛國家",
      value: getValues("driver_country") || "目前無資料",
      editEle: (
        <Select
          key="driver_country"
          {...register("driver_country")}
          marginBottom="0"
        >
          <option value="01">美國</option>
          <option value="02">新加坡</option>
          <option value="03">台灣</option>
        </Select>
      )
    },
    {
      req: false,
      label: "執照州/省/地區",
      value: getValues("license_area") || "目前無資料",
      editEle: (
        <Select
          key="license_area"
          {...register("license_area")}
          marginBottom="0"
        >
          <option value="01">美加</option>
          <option value="02">東南亞</option>
          <option value="03">台灣</option>
        </Select>
      )
    },
    {
      req: false,
      label: "牌照等級",
      value: getValues("license_lvl") || "目前無資料",
      editEle: <TextInput {...register("license_lvl")} />
    },
    {
      req: false,
      label: "駕駛資歷(年)",
      value: getValues("driver_seniority") || "目前無資料",
      editEle: <TextInput {...register("driver_seniority")} />
    },
    {
      req: false,
      label: "派遣區域",
      value: getValues("dsph_area") || "目前無資料",
      editEle: (
        <Select key="dsph_area" {...register("dsph_area")} marginBottom="0">
          <option value="01">美加</option>
          <option value="02">東南亞</option>
          <option value="03">台灣</option>
        </Select>
      )
    },
    {
      req: false,
      label: "派遣都市",
      value: getValues("dsph_city") || "目前無資料",
      editEle: (
        <Select key="dsph_city" {...register("dsph_city")} marginBottom="0">
          <option value="01">台北</option>
          <option value="02">台中</option>
          <option value="03">台南</option>
        </Select>
      )
    },
    {
      req: false,
      label: "黑名單註記",
      value: <Checkbox checked={checked} disabled />,
      editEle: (
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      )
    },
    {
      req: false,
      label: "黑名單備註",
      value: "目前無資料",
      editEle: <Textarea name="remark" placeholder="備註限制50字元" />
    },
    {
      req: false,
      label: "標籤",
      value: (
        <div className="view-tags">
          <div>特優</div> <div>優良</div>
        </div>
      ),
      editEle: (
        <TagSelect
          options={[
            {
              label: "",
              value: "00"
            },
            {
              label: "特優",
              value: "01"
            },
            {
              label: "優良",
              value: "02"
            }
          ]}
          editData={[
            {
              label: "特優",
              value: "01"
            },
            {
              label: "優良",
              value: "02"
            }
          ]}
          handleCustomData={() => console.log("selected")}
        />
      )
    }
  ];

  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <FlexWrapper flexDirection="column">
        <InfoBox
          isEdit={isEdit}
          infoData={basicInfo}
          infoTitle={
            <span style={{ marginRight: "8px" }}>
              基本資料
              <EyeOpenIcon style={{ marginLeft: "8px" }} />
            </span>
          }
        />
        <LanguageAbility currentUserInfo={driverData} />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={resumeInfo} infoTitle="駕駛履歷" />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default DriverInfo;
