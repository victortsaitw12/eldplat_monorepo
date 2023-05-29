import React from "react";
import { Select, TextInput } from "evergreen-ui";
import InfoBox from "@components/InfoBox";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import FlexWrapper from "@layout/FlexWrapper";
import { UpdateDriverInfoPayload } from "../../driver.type";
import LanguageAbility from "@contents/Driver/Detail/LanguageAbility";
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
  console.log("driverData", driverData);
  console.log("getValues", getValues());
  // 基本資料
  const basicInfo = [
    {
      readonly: true,
      label: "姓名",
      value: info["user_name"]
    },
    {
      readonly: true,
      label: "E-Mail",
      value: info["user_email"]
    },
    {
      readonly: true,
      label: "手機",
      value: info["user_phone"]
    }
  ];
  // 駕駛履歷
  const licenseInfo = [
    {
      readonly: true,
      label: "使用者編號",
      value: driverData["user_name"]
    },
    {
      req: false,
      label: "駕照編號",
      value: getValues("license_no"),
      editEle: <TextInput {...register("license_no")} />
    },
    {
      req: false,
      label: "執照州/省/地區",
      value: getValues("license_area"),
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
      value: getValues("license_lvl"),
      editEle: <TextInput {...register("license_lvl")} />
    },
    {
      req: false,
      label: "駕駛資歷(年)",
      value: getValues("driver_seniority"),
      editEle: <TextInput {...register("driver_seniority")} />
    },
    {
      req: false,
      label: "派遣地區",
      value: getValues("dsph_area"),
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
      value: getValues("dsph_city"),
      editEle: (
        <Select key="dsph_city" {...register("dsph_city")} marginBottom="0">
          <option value="01">台北</option>
          <option value="02">台中</option>
          <option value="03">台南</option>
        </Select>
      )
    }
  ];
  // 駕駛證照
  const plateInfo = [
    {
      req: false,
      label: "證照種類",
      value: getValues("licn_typ"),
      editEle: (
        <Select key="licn_typ" {...register("licn_typ")} marginBottom="0">
          <option value="01">小型車普通駕駛執照</option>
          <option value="02">大貨車普通駕駛執照</option>
          <option value="03">大客車普通駕駛執照</option>
          <option value="04">聯結車普通駕駛執照</option>
          <option value="05">小型車職業駕駛執照</option>
          <option value="06">大貨車職業駕駛執照</option>
          <option value="07">大客車職業駕駛執照</option>
          <option value="08">聯結車職業駕駛執照</option>
          <option value="09">國際駕駛執照</option>
          <option value="10">輕型機車駕駛執照</option>
          <option value="11">小型輕型機車駕駛執照</option>
          <option value="12">普通輕型機車駕駛執照</option>
          <option value="13">重型機車駕駛執照</option>
          <option value="14">普通重型機車駕駛執照</option>
          <option value="15">大型重型機車駕駛執照</option>
        </Select>
      )
    },
    {
      req: false,
      label: "證照名稱",
      value: getValues("licn_name"),
      editEle: <TextInput {...register("licn_name")} />
    },
    {
      req: false,
      label: "發照單位",
      value: getValues("licn_unit"),
      editEle: <TextInput {...register("licn_unit")} />
    },
    {
      req: false,
      label: "發照日期",
      value: getValues("licn_issue"),
      editEle: <TextInput type="date" {...register("licn_issue")} />
    },
    {
      req: false,
      label: "有效日期",
      value: getValues("licn_exp"),
      editEle: <TextInput type="date" {...register("licn_exp")} />
    },
    {
      req: false,
      label: "下次審驗日期",
      value: getValues("licn_examine_date"),
      editEle: <TextInput type="date" {...register("licn_examine_date")} />
    }
  ];
  // 語言
  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={basicInfo} infoTitle="基本資料" />
        <InfoBox isEdit={isEdit} infoData={licenseInfo} infoTitle="駕駛履歷" />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <InfoBox
          isEdit={isEdit}
          infoData={plateInfo}
          infoTitle="駕駛證照"
          style={{ flex: "1" }}
        />

        <LanguageAbility currentUserInfo={driverData} />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default DriverInfo;
