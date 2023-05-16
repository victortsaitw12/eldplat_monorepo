import React from "react";
import { Pane, TextInputField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext
} from "react-hook-form";
import { BusDataTypes } from "../busDefaultData";
import { SubFromProps } from "./type";
import Card from "@components/Card";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
function Lifecycle({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <Card title="服務中">
        <HorizatalInput
          label="服務日期"
          errorMessage={
            errors?.bus_lifecycle?.in_service_date?.message as string
          }
          {...register("bus_lifecycle.in_service_date")}
        />
        <HorizatalInput
          label="服務里程數"
          errorMessage={
            errors?.bus_lifecycle?.in_service_odometer?.message as string
          }
          {...register("bus_lifecycle.in_service_odometer")}
        />
      </Card>
      <Card title="車輛壽命預估">
        <HorizatalInput
          label="預估使用壽命(月)"
          errorMessage={
            errors?.bus_lifecycle?.estimated_service_months?.message as string
          }
          {...register("bus_lifecycle.estimated_service_months")}
        />
        <HorizatalInput
          label="預估使用壽命(里程)"
          errorMessage={
            errors?.bus_lifecycle?.estimated_service_meter?.message as string
          }
          {...register("bus_lifecycle.estimated_service_meter")}
        />
        <HorizatalInput
          label="預估轉售價值"
          errorMessage={
            errors?.bus_lifecycle?.estimated_resale?.message as string
          }
          {...register("bus_lifecycle.estimated_resale")}
        />
      </Card>
      <Card title="終止服務">
        <HorizatalInput
          label="停用日期"
          errorMessage={
            errors?.bus_lifecycle?.out_service_date?.message as string
          }
          {...register("bus_lifecycle.out_service_date")}
        />
        <HorizatalInput
          label="停用里程表數值"
          errorMessage={
            errors?.bus_lifecycle?.out_service_odometer?.message as string
          }
          {...register("bus_lifecycle.out_service_odometer")}
        />
      </Card>
    </div>
  );
}

export default Lifecycle;
