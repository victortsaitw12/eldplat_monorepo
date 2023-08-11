import React, { useState } from "react";
import { Select } from "evergreen-ui";
import InfoBox from "@components/InfoBox";
import ImageUploader from "@components/ImageUploader";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  Control
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
import TextInput from "@components/CustomTextInput";
import StatusIcon from "@components/StatusIcon";
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  busOptions: any;
  isEdit: boolean;
}
function Details({
  register,
  errors,
  getValues,
  control,
  isEdit,
  busOptions
}: Props) {
  console.log("busOptions", busOptions);
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
      value:
        busOptions?.type_options.find(
          (option: any) => option.no === getValues("bus.type")
        )?.name || "--",
      editEle: (
        <Select key="bus.type" {...register("bus.type")} marginBottom="0">
          {busOptions?.type_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
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
      value:
        busOptions?.make_options.find(
          (option: any) => option.no === getValues("bus.make")
        )?.name || "--",
      editEle: [
        <Select key="bus.make" {...register("bus.make")} marginBottom="0">
          {busOptions?.make_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      ]
    },
    {
      req: false,
      label: "車型",
      value: getValues("bus.model") || "--",
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
      value: getValues("bus.age") + "年"
    },
    {
      req: false,
      label: "配置",
      value: getValues("bus.trim"),

      editEle: [<TextInput key="bus.trim" {...register("bus.trim")} />]
    },
    {
      req: false,
      label: "註冊州/省",
      value: getValues("bus.registration_province"),
      editEle: [
        <TextInput
          key="bus.registration_province"
          {...register("bus.registration_province")}
        />
      ]
    },
    {
      req: false,
      inputType: "custom",
      editEle: [
        <div
          key="bus.bus_picture"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ImageUploader isEdit={isEdit} />
        </div>
      ]
    }
  ];
  // 分類
  const categoryInfo = [
    {
      req: true,
      label: "車隊",
      value:
        busOptions?.bus_group_options.find(
          (option: any) => option.no === getValues("bus.bus_group")
        )?.name || "--",
      // value: getValues("bus.bus_group") || "--",
      editEle: (
        <Select
          key="bus.bus_group"
          {...register("bus.bus_group")}
          marginBottom="0"
        >
          {busOptions?.bus_group_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: true,
      label: "主要駕駛",
      value: busOptions?.operator_options.find(
        (option: any) => option.no === getValues("bus.operator_no")
      )?.name,
      editEle: (
        <Select
          key="bus.operator"
          {...register("bus.operator_no")}
          marginBottom="0"
        >
          {busOptions?.operator_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: true,
      label: "狀態",
      value: <StatusIcon status={getValues("bus.status")}></StatusIcon>,
      editEle: (
        <Select key="bus.status" {...register("bus.status")} marginBottom="0">
          {busOptions?.status_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: true,
      label: "所有權",
      value:
        busOptions?.ownership_options.find(
          (option: any) => option.no === getValues("bus.ownership")
        )?.name || "--",
      editEle: (
        <Select
          key="bus.ownership"
          {...register("bus.ownership")}
          marginBottom="0"
        >
          {busOptions?.ownership_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      )
    }
  ];
  // 其他細項
  const otherDetailInfo = [
    {
      req: false,
      label: "顏色",
      value: getValues("bus.color") || "--",
      editEle: <TextInput {...register("bus.color")} />
    },
    {
      req: false,
      label: "車身類型",
      value: getValues("bus.body_type") || "--",
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
      value: getValues("bus.body_subtype") || "--",
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
      value: getValues("bus.mspr")?.toLocaleString() || "--",
      editEle: <TextInput {...register("bus.mspr")} />
    }
  ];

  const label_info = [
    {
      label: "",
      value: ""
    }
  ];
  // 標籤
  return (
    <FlexWrapper padding="0">
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
        <InfoBox
          isEdit={isEdit}
          infoData={label_info}
          infoType="label"
          infoTitle="標籤"
        />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default Details;
