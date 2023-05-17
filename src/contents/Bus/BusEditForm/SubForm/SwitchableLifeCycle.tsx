import React from "react";
import { BusDataTypes } from "../busDefaultData";
import { SubFromProps } from "./type";
import Card from "@components/Card";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import FlexWrapper from "@layout/FlexWrapper";
function Lifecycle({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="服務中">
            <HorizatalInput
              label="服務日期"
              hint="車輛投入車隊服務的日期"
              errorMessage={
                errors?.bus_lifecycle?.in_service_date?.message as string
              }
              {...register("bus_lifecycle.in_service_date")}
            />
            <HorizatalInput
              label="服務里程數"
              hint="車輛投入車隊服務時的里程數"
              errorMessage={
                errors?.bus_lifecycle?.in_service_odometer?.message as string
              }
              {...register("bus_lifecycle.in_service_odometer")}
            />
          </Card>
          <Card title="車輛壽命預估">
            <HorizatalInput
              label="預估使用壽命(月)"
              hint="車輛預計投入現有車隊服務的月數"
              errorMessage={
                errors?.bus_lifecycle?.estimated_service_months
                  ?.message as string
              }
              {...register("bus_lifecycle.estimated_service_months")}
            />
            <HorizatalInput
              label="預估使用壽命(里程)"
              hint="車輛預計在退出車隊服務之前使用 / 運行的里程數"
              errorMessage={
                errors?.bus_lifecycle?.estimated_service_meter
                  ?.message as string
              }
              {...register("bus_lifecycle.estimated_service_meter")}
            />
            <HorizatalInput
              label="預估轉售價值"
              hint="預期退休後通過銷售 / 處置所能回收的金額(扣除任何相關費用)"
              errorMessage={
                errors?.bus_lifecycle?.estimated_resale?.message as string
              }
              {...register("bus_lifecycle.estimated_resale")}
            />
          </Card>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="終止服務">
            <HorizatalInput
              label="停用日期"
              hint="車輛退出車隊服務的日期"
              errorMessage={
                errors?.bus_lifecycle?.out_service_date?.message as string
              }
              {...register("bus_lifecycle.out_service_date")}
            />
            <HorizatalInput
              label="停用里程表數值"
              hint="服役停止當日的最終里程表讀數"
              errorMessage={
                errors?.bus_lifecycle?.out_service_odometer?.message as string
              }
              {...register("bus_lifecycle.out_service_odometer")}
            />
          </Card>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
}

export default Lifecycle;
