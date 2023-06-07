import React, { useState } from "react";
import Image from "next/image";
import { Select, Button, FilePicker, TextInput } from "evergreen-ui";
import DottedSelect from "@components/HookForm/Select/DottedSelect";
import InfoBox from "@components/InfoBox";
import { FilePickBtnSTY } from "@components/FormCard/style";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  Control
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
interface Props {
  selected?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
}
function Details({
  selected,
  register,
  errors,
  getValues,
  control,
  isEdit
}: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  // 身分識別
  const identityInfo = [
    {
      readonly: true,
      label: "車輛號碼",
      value: getValues("bus.bus_no")
    },
    {
      req: true,
      label: "車輛名稱",
      value: getValues("bus.bus_name"),
      editEle: <TextInput {...register("bus.bus_name")} />
    },
    {
      req: true,
      label: "車輛識別碼VIN",
      value: getValues("bus.vin"),
      editEle: <TextInput {...register("bus.vin")} />
    },
    {
      req: true,
      label: "車種",
      value: getValues("bus.bus_type"),
      editEle: (
        <Select
          key="bus.bus_type"
          {...register("bus.bus_type")}
          marginBottom="0"
        >
          <option value="01">沙灘車</option>
          <option value="02">船</option>
          <option value="03">巴士</option>
          <option value="04">車</option>
          <option value="05">堆高機</option>
          <option value="06">發電機</option>
          <option value="07">裝載機</option>
          <option value="08">機車</option>
          <option value="09">割草機</option>
          <option value="10">其他</option>
          <option value="11">皮卡車</option>
          <option value="12">半卡車</option>
          <option value="13">越野車</option>
          <option value="14">聯結車</option>
          <option value="15">貨車</option>
        </Select>
      )
    },
    {
      req: true,
      label: "座位數",
      value: getValues("bus.bus_seat"),
      editEle: <TextInput key="bus.bus_seat" {...register("bus.bus_seat")} />
    },
    {
      req: true,
      label: "品牌",
      value: getValues("bus.make"),
      editEle: [
        <Select
          key="bus.bus_type"
          {...register("bus.bus_type")}
          marginBottom="0"
        >
          <option value="01">Toyota</option>
          <option value="02">Mercedes-Benz</option>
          <option value="03">Volkswagen</option>
          <option value="04">BMW</option>
          <option value="05">Tesla</option>
        </Select>
      ]
    },
    {
      req: false,
      label: "車型",
      value: getValues("bus.model"),
      editEle: [
        <Select key="bus.model" {...register("bus.model")} marginBottom="0">
          <option value="01">model-1</option>
          <option value="02">model-2</option>
          <option value="03">model-3</option>
        </Select>
      ]
    },
    {
      req: true,
      label: "車牌",
      value: getValues("bus.license_plate"),

      editEle: [
        <TextInput key="bus.license_plate" {...register("bus.license_plate")} />
      ]
    },

    {
      req: true,
      label: "出廠年份",
      value: getValues("bus.year"),

      editEle: [<TextInput key="bus.year" {...register("bus.year")} />]
    },
    {
      readonly: true,
      label: "車齡",
      value: getValues("bus.age")
    },
    {
      req: true,
      label: "配置",
      value: getValues("bus.trim"),

      editEle: [<TextInput key="bus.trim" {...register("bus.trim")} />]
    },
    {
      req: true,
      label: "註冊州/省",
      value: getValues("bus.registration_province"),
      editEle: [
        <TextInput
          key="bus.registration_province"
          {...register("bus.registration_province")}
        />
      ]
    }
  ];
  // 分類
  const categoryInfo = [
    {
      req: true,
      label: "車輛群組",
      value: getValues("bus.bus_group"),
      editEle: (
        <Select
          key="bus.bus_group"
          {...register("bus.bus_group")}
          marginBottom="0"
        >
          <option value="01">群組1</option>
          <option value="02">群組2</option>
          <option value="03">群組3</option>
          <option value="04">群組4</option>
        </Select>
      )
    },
    {
      req: true,
      label: "主要駕駛",
      value: getValues("bus.operator"),
      editEle: (
        <Select
          key="bus.operator"
          {...register("bus.operator")}
          marginBottom="0"
        >
          <option value="簡忠華(007415)">簡忠華(007415)</option>
          <option value="陳正烽(00F470)">陳正烽(00F470)</option>
          <option value="吳啟元(00A371)">吳啟元(00A371)</option>
          <option value="施純鈞(200120)">施純鈞(200120)</option>
          <option value="王百華(230014)">王百華(230014)</option>
        </Select>
      )
    },
    {
      req: false,
      inputType: "custom",
      editEle: (
        <DottedSelect
          control={control}
          key={"bus.status"}
          name="bus.status"
          label="狀態"
          isRequire={true}
          isDisabled={!isEdit}
          options={[
            { label: "活躍中", value: "01", color: "#52BD94" },
            { label: "已售出", value: "02", color: "#8EA8C7" },
            { label: "終止服務", value: "03", color: "#D14343" },
            { label: "在維修廠", value: "04", color: "#FFB020" },
            { label: "閒置中", value: "05", color: "#3670C9" }
          ]}
        />
      )
    },
    {
      req: true,
      label: "所有權",
      value: getValues("bus.ownership"),
      editEle: (
        <Select
          key="bus.ownership"
          {...register("bus.ownership")}
          marginBottom="0"
        >
          <option value="01">擁有的</option>
          <option value="02">租來的</option>
          <option value="03">出租中</option>
          <option value="04">客戶的</option>
        </Select>
      )
    }
  ];
  // 其他細項
  const otherDetailInfo = [
    {
      req: false,
      label: "顏色",
      value: getValues("bus.color"),
      editEle: <TextInput {...register("bus.color")} />
    },
    {
      req: false,
      label: "車身類型",
      value: getValues("bus.body_type"),
      editEle: (
        <Select
          key="bus.body_type"
          {...register("bus.body_type")}
          marginBottom="0"
        >
          <option value="01">傳統的</option>
          <option value="02">中大型</option>
          <option value="03">掀背</option>
          <option value="04">皮卡</option>
          <option value="05">越野車</option>
        </Select>
      )
    },
    {
      req: false,
      label: "車身子類型",
      value: getValues("bus.body_subtype"),
      editEle: (
        <Select
          key="bus.body_subtype"
          {...register("bus.body_subtype")}
          marginBottom="0"
        >
          <option value="01">貨物</option>
          <option value="02">雙排坐駕駛室</option>
          <option value="03">臥鋪行駕駛室</option>
        </Select>
      )
    },
    {
      req: false,
      label: "建議零售價",
      value: getValues("bus.mspr"),
      editEle: <TextInput {...register("bus.mspr")} />
    }
  ];
  // 標籤
  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <InfoBox
        isEdit={isEdit}
        infoData={identityInfo}
        infoTitle="身分識別"
        style={{ flex: "1" }}
      />
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={categoryInfo} infoTitle="分類" />
        <InfoBox
          isEdit={isEdit}
          infoData={otherDetailInfo}
          infoTitle="其他細項"
        />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default Details;