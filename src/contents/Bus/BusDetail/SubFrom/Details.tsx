import React, { useState } from "react";
import Image from "next/image";
import { Select, Pane } from "evergreen-ui";
import InfoBox from "@components/InfoBox";
import ImageUploader from "@components/ImageUploader";
import ImeageSketleton from "@components/ImageSkeleton";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
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
  setValue: UseFormSetValue<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  busOptions: any;
  isEdit: boolean;
  fetchDDL: (v: any) => void;
}
function Details({
  register,
  errors,
  getValues,
  setValue,
  control,
  isEdit,
  busOptions,
  fetchDDL
}: Props) {
  console.log("busOptions", busOptions);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDriverDDLLoading, setIsDriverDDLoading] = useState<boolean>(false);

  const handleDriverGroupChange = async (e: any) => {
    setIsDriverDDLoading(true);
    setValue("bus.operator_no", "");
    setValue("bus.operator_bus_group_name", e.target.label);
    const bus_group = e.target.value;
    await fetchDDL(bus_group);
    setIsDriverDDLoading(false);
  };

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
      inputType:
        // getValues("bus.photo_url") ? "custom" :
        "valueOnly",
      editEle:
        // 照片要先放預設圖片 for demo 先comment掉
        // getValues("bus.photo_url") ?
        [
          <div
            key="bus.bus_picture"
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              height: "200px",
              maxWidth: "270px"
            }}
          >
            {/* <ImeageSketleton /> */}
            <Image
              src="/image/bus34.jpg"
              alt="Picture of the bus"
              sizes="width:100%"
              style={{ borderRadius: "5px", objectFit: "cover" }} //"contain"
              fill={true}
            />
          </div>
        ]
      // : [
      //     <div key="bus.bus_picture">
      //       <ImageUploader isEdit={isEdit} />
      //     </div>
      //   ]
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
        <Select {...register("bus.bus_group")} marginBottom="0">
          {busOptions?.bus_group_options.map((item: any) => (
            <option key={item.no} value={item.no} label={item.name} />
          ))}
        </Select>
      )
    },
    {
      req: true,
      label: "主要駕駛",
      value: `${getValues("bus.operator_bus_group_name")} / ${getValues(
        "bus.driver_name"
      )}`,
      editEle: (
        <Pane
          className="operator_bus_group_select"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <Select
            marginBottom="0"
            {...register("bus.operator_bus_group_no", {
              onChange: handleDriverGroupChange
            })}
          >
            <option value={""} disabled hidden>
              請選擇車隊
            </option>
            {busOptions?.operator_bus_group_options?.map((item: any) => {
              return (
                <option
                  key={`operator_bus_group_options-${item.no}`}
                  value={item.no}
                  label={item.name}
                />
              );
            })}
          </Select>
          <Select
            {...register("bus.operator_no")}
            marginBottom="0"
            disabled={isDriverDDLLoading}
          >
            <option value="" disabled>
              請選擇駕駛
            </option>
            {busOptions?.operator_options.map((item: any) => (
              <option
                key={`operator_no-${item.no}`}
                value={item.no}
                label={item.name}
                selected={getValues("bus.operator_no") === item.no}
              />
            ))}
          </Select>
        </Pane>
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
