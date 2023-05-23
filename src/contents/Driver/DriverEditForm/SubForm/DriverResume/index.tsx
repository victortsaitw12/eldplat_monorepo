import { SelectField, Textarea, TextInput } from "evergreen-ui";
import React from "react";
import { useFormContext } from "react-hook-form";

import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import { region_DATA, city_DATA, country_DATA } from "./data";
import InfoBox from "@components/InfoBox";

interface Props {
  userId: string;
  isEdit: boolean;
  currentUserInfo: any;
  isLoading: boolean;
}

// userId={userId}
// isEdit={isEdit}
// currentUserInfo={currentUserInfo}
// isLoading={isLoading}

function DriverResume({ userId, isEdit, currentUserInfo, isLoading }: Props) {
  const { register, errors, control, handleSubmit } = useFormContext();

  const resume_info = [
    {
      readonly: true,
      label: "使用者編號",
      value: currentUserInfo?.user_No || userId
    },
    {
      req: true,
      label: "駕照編號",
      value: currentUserInfo.license_no,
      editEle: (
        <TextInput
          {...register("license_no", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "執照州/省/地區",
      value: currentUserInfo.license_area,
      editEle: (
        <SelectField
          className="inputField"
          key="license_area"
          {...register("license_area", {
            required: "必填"
          })}
        >
          {country_DATA.map((item) => (
            <option key={`city-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectField>
      )
    },
    {
      req: true,
      label: "牌照等級",
      value: currentUserInfo.license_lvl,
      editEle: (
        <TextInput
          {...register("license_lvl", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "駕駛資歷(年)",
      value: currentUserInfo.driver_seniority,
      editEle: <TextInput {...register("driver_seniority")} />
    },
    {
      req: true,
      label: "派遣區域",
      value: currentUserInfo.dsph_area,
      editEle: (
        <SelectField
          key="dsph_area"
          {...register("dsph_area", {
            required: "必填"
          })}
        >
          {region_DATA.map((item) => (
            <option key={`city-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectField>
      )
    },
    {
      req: true,
      label: "派遣都市",
      value: currentUserInfo.dsph_city,
      editEle: (
        <SelectField
          key="dsph_city"
          {...register("dsph_city", {
            required: "必填"
          })}
        >
          {city_DATA.map((item) => (
            <option key={`city-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectField>
      )
    },
    {
      req: false,
      label: "黑名單註記",
      value: currentUserInfo.dsph_city,
      editEle: (
        <input
          className="checkbox"
          type="checkbox"
          // checked={currentUserInfo.blocklist_mark}
          {...register("blocklist_mark", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: false,
      label: "黑名單備註",
      value: currentUserInfo.dsph_city,
      editEle: <Textarea {...register("remark")} />
    }
  ];
  return (
    <>
      {!isLoading && currentUserInfo && (
        <InfoBox isEdit={isEdit} infoData={resume_info} infoTitle="駕駛履歷" />
      )}
    </>
  );
}

export default DriverResume;
