import React from "react";
import {
  Select,
  TextInput,
  EyeOpenIcon,
  Checkbox,
  Textarea
} from "evergreen-ui";

import InfoBox from "@components/InfoBox";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import FlexWrapper from "@layout/FlexWrapper";
import { UpdateDriverInfoPayload } from "../../driver.type";
import LanguageAbility from "@contents/Driver/Detail/LanguageAbility";
import TagSelect from "@components/TagSelect";
import {
  DRIVER_COUNTRY,
  LICENSE_AREA,
  DSPH_AREA,
  DSPH_CITY
} from "@services/getDDL";

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
  const { info, workinghours } = driverData;
  const [checked, setChecked] = React.useState(false);
  // 基本資料
  const basicInfo = [
    {
      readonly: true,
      label: "姓名",
      value: info["user_name"] || "--"
    },
    {
      readonly: true,
      label: "E-Mail",
      value: info["user_email"] || "--"
    },
    {
      readonly: true,
      label: "手機",
      value: info["user_phone"] || "--"
    }
  ];
  // 排班設定
  console.log("🍅🍅🍅driverData", driverData);
  const schdInfo = [
    {
      readonly: true,
      label: "使用者編號",
      value: info["user_no"] || "--"
    },
    {
      req: true,
      label: "休假設定",
      value: info["working_hours_name"] || "--",
      editEle: (
        <Select
          key="working_hours_code"
          {...register("working_hours_code")}
          marginBottom="0"
        >
          {workinghours.map((item: any, i: number) => (
            <option key={`working_hours-${i}`} value={item.working_hours_code}>
              {item.working_hours_name || "--"}
            </option>
          ))}
        </Select>
      )
    }
  ];
  // 駕駛履歷
  const resumeInfo = [
    {
      readonly: true,
      label: "使用者編號",
      value: info["user_no"] || "--"
    },
    {
      req: false,
      label: "駕照編號",
      value: getValues("license_no") || "--",
      editEle: <TextInput {...register("license_no")} />
    },
    {
      req: false,
      label: "駕駛國家",
      value: getValues("driver_country") || "--",
      editEle: (
        <Select
          key="driver_country"
          {...register("driver_country")}
          marginBottom="0"
        >
          {Object.keys(DRIVER_COUNTRY).map((key) => (
            <option key={key} value={key}>
              {DRIVER_COUNTRY[key].label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "執照州/省/地區",
      value: getValues("license_area") || "--",
      editEle: (
        <Select
          key="license_area"
          {...register("license_area")}
          marginBottom="0"
        >
          {Object.keys(LICENSE_AREA).map((key) => (
            <option key={key} value={key}>
              {LICENSE_AREA[key].label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "牌照等級",
      value: getValues("license_lvl") || "--",
      editEle: <TextInput {...register("license_lvl")} />
    },
    {
      req: false,
      label: "駕駛資歷(年)",
      value: getValues("driver_seniority") || "--",
      editEle: <TextInput {...register("driver_seniority")} />
    },
    {
      req: false,
      label: "派遣車隊",
      value: getValues("dsph_area") || "--",
      editEle: (
        <Select key="dsph_area" {...register("dsph_area")} marginBottom="0">
          {Object.keys(DSPH_AREA).map((key) => (
            <option key={key} value={key}>
              {DSPH_AREA[key].label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "派遣都市",
      value: getValues("dsph_city") || "--",
      editEle: (
        <Select key="dsph_city" {...register("dsph_city")} marginBottom="0">
          {Object.keys(DSPH_CITY).map((key) => (
            <option key={key} value={key}>
              {DSPH_CITY[key].label}
            </option>
          ))}
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
      value: "--",
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
        <InfoBox
          isEdit={isEdit}
          infoData={schdInfo}
          infoTitle={<span style={{ marginRight: "8px" }}>排班設定</span>}
        />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={resumeInfo} infoTitle="駕駛履歷" />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default DriverInfo;
