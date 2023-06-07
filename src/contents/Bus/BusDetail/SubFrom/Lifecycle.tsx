import React, { useState } from "react";
import { TextInput } from "evergreen-ui";
import InfoBox from "@components/InfoBox";
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
function Lifecycle({
  selected,
  register,
  errors,
  getValues,
  control,
  isEdit
}: Props) {
  console.log("Lifecycle", getValues("bus_lifecycle"));
  // 服務中
  const serviceInfo = [
    {
      req: false,
      label: "服務日期",
      value: getValues("bus_lifecycle.in_service_date"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.in_service_date"}
          type="date"
          {...register("bus_lifecycle.in_service_date")}
        />
      )
    },
    {
      req: false,
      label: "服務里程數",
      value: getValues("bus_lifecycle.in_service_odometer"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.in_service_odometer"}
          {...register("bus_lifecycle.in_service_odometer")}
        />
      )
    }
  ];
  // 車輛壽命估計
  const estimateInfo = [
    {
      req: false,
      label: "估計使用壽命(月)",
      value: getValues("bus_lifecycle.estimated_service_months"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.estimated_service_months"}
          {...register("bus_lifecycle.estimated_service_months")}
        />
      )
    },
    {
      req: false,
      label: "估計使用壽命(里程)",
      value: getValues("bus_lifecycle.estimated_service_meter"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.estimated_service_meter"}
          {...register("bus_lifecycle.estimated_service_meter")}
        />
      )
    },
    {
      req: false,
      label: "估計轉售價值",
      value: getValues("bus_lifecycle.out_service_date"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.out_service_date"}
          {...register("bus_lifecycle.out_service_date")}
        />
      )
    }
  ];
  // 終止服務
  const cancelInfo = [
    {
      req: false,
      label: "停用日期",
      value: getValues("bus_lifecycle.out_service_date"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.out_service_date"}
          type="date"
          {...register("bus_lifecycle.out_service_date")}
        />
      )
    },
    {
      req: false,
      label: "停用里程表數值",
      value: getValues("bus_lifecycle.out_service_odometer"),
      editEle: (
        <TextInput
          key={"bus_lifecycle.out_service_odometer"}
          {...register("bus_lifecycle.out_service_odometer")}
        />
      )
    }
  ];
  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <FlexWrapper flexDirection="column" style={{ flex: "1" }}>
        <InfoBox isEdit={isEdit} infoData={serviceInfo} infoTitle="服務中" />
        <InfoBox
          isEdit={isEdit}
          infoData={estimateInfo}
          infoTitle="車輛壽命估計"
        />
      </FlexWrapper>
      <div style={{ flex: "1" }}>
        <InfoBox isEdit={isEdit} infoData={cancelInfo} infoTitle="終止服務" />
      </div>
    </FlexWrapper>
  );
}

export default Lifecycle;