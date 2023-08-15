import React from "react";
import {
  Select,
  TextInput,
  EyeOpenIcon,
  Checkbox,
  Textarea
} from "evergreen-ui";
import { DivSTY } from "./style";

import InfoBox from "@components/InfoBox";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import FlexWrapper from "@layout/FlexWrapper";
import { UpdateDriverInfoPayload } from "../../driver.type";
import LanguageAbility from "@contents/Employee/LanguageAbility";
import TagSelect from "@components/TagSelect";
import {
  getDriverCountryDDL,
  getLicenseAreaDDL,
  I_AreaDDL
} from "@services/driver/getAreaDDL";
import {
  getOneDDL,
  I_DsphGroupDDL,
  I_DsphAreaDDL
} from "@services/driver/getOneDDL";

interface Props {
  selected?: boolean;
  register: UseFormRegister<UpdateDriverInfoPayload>;
  getValues: UseFormGetValues<UpdateDriverInfoPayload>;
  isEdit: boolean;
  driverData: any;
}
interface I_LabelVal {
  label: any;
  value: any;
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
  const [driverCountryDDL, setDriverCountryDDL] = React.useState<I_LabelVal[]>(
    []
  );
  const [licenseAreaDDL, setLicenseAreaDDL] = React.useState([]);
  const [dsphGroupDDL, setDsphGroupDDL] = React.useState<I_DsphGroupDDL[]>([]);
  const [dsphAreaDDL, setDsphAreaDDL] = React.useState<I_DsphAreaDDL[]>([]);

  // TODO const driverCountryDDL and licenseAreaDDL
  React.useEffect(() => {
    const fetchDDL = async () => {
      const resCountryDDL = await getDriverCountryDDL();
      const resAreaDDL = await getLicenseAreaDDL();
      const resDsphGroupDDL = await getOneDDL("bus_group", "bus");
      const resDispachAreaDDL = await getOneDDL("registration_province", "bus");

      const driverCountryDDL = resCountryDDL.options.map((item: I_AreaDDL) => {
        return { label: item.area_Name_Tw, value: item.area_No };
      });
      const licenseAreaDDL = resAreaDDL.options.map((item: I_AreaDDL) => {
        return { label: item.area_Name_Tw, value: item.area_No };
      });
      const dsphGroupDDL: I_DsphGroupDDL[] = resDsphGroupDDL.map(
        (item: I_DsphGroupDDL) => {
          return { label: item.label, value: item.value, edit: item.edit };
        }
      );
      const dsphAreaDDL: I_DsphAreaDDL[] = resDispachAreaDDL.map(
        (item: I_DsphAreaDDL) => {
          return { label: item.label, value: item.value, edit: item.edit };
        }
      );
      setDriverCountryDDL(driverCountryDDL);
      setLicenseAreaDDL(licenseAreaDDL);
      setDsphGroupDDL(dsphGroupDDL);
      setDsphAreaDDL(dsphAreaDDL);
    };
    fetchDDL();
  }, []);

  // 基本資料
  const basicInfo = [
    {
      readonly: true,
      label: "姓名",
      value: info["user_first_name"].concat(info["user_name"]) || "--"
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
  const schdInfo = [
    {
      req: true,
      label: "工時設定",
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
      value:
        driverCountryDDL.find(
          (item: I_LabelVal) => item.value === getValues("driver_country")
        )?.label || "--",
      editEle: (
        <Select
          key="driver_country"
          {...register("driver_country")}
          marginBottom="0"
        >
          {driverCountryDDL?.map((item: any) => (
            <option key={`driver_country${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "執照州/省/地區",
      value: driverData.info.license_area_name || "--",
      editEle: (
        <Select
          key="license_area"
          {...register("license_area")}
          marginBottom="0"
        >
          {licenseAreaDDL?.map((item: any) => (
            <option key={`driver_country${item.value}`} value={item.value}>
              {item.label}
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
      label: "派駐地",
      value:
        dsphAreaDDL?.find(
          (item: I_DsphAreaDDL) => item.value === getValues("dsph_area")
        )?.label || "--",
      editEle: (
        <Select key="dsph_area" {...register("dsph_area")} marginBottom="0">
          <option key="dsph_area-0"></option>
          {dsphAreaDDL?.map((item: I_DsphAreaDDL) => (
            <option key={`dsph_area-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "車隊",
      value:
        dsphGroupDDL?.find(
          (item: I_DsphGroupDDL) => item.value === getValues("dsph_group")
        )?.label || "--",
      editEle: (
        <Select key="dsph_group" {...register("dsph_group")} marginBottom="0">
          {dsphGroupDDL?.map((item: I_DsphGroupDDL) => (
            <option key={`dsph_area-${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: false,
      label: "黑名單註記",
      value: (
        <Checkbox
          checked={checked}
          disabled
          style={{ height: "14px", marginTop: "0", marginBottom: "0" }}
        />
      ),
      editEle: (
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          style={{ margin: "0" }}
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
        <div className="view-tags" style={{ justifyContent: "flex-start" }}>
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
        <DivSTY>
          <LanguageAbility insertData={driverData} viewOnly />
        </DivSTY>
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
