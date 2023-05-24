import React from "react";
import { Pane, TextInputField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext
} from "react-hook-form";
import { BusDataTypes } from "../../busDefaultData";
interface Props {
  hide?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
}
function Lifecycle({ hide, register, errors }: Props) {
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="在職">
        <div className="w100">
          <TextInputField
            label="在職日期"
            hint="車輛投入車隊服務的日期"
            type="date"
            {...register("lifecycle.in_service_date")}
          />
        </div>
        <div className="w100">
          <TextInputField
            label="在職里程數"
            hint="車輛投入車隊服務時的里程數"
            type="number"
            {...register("lifecycle.in_service_odometer")}
          />
        </div>
      </FormCard>

      <FormCard formTitle="車輛壽命估計">
        <div className="w100">
          <TextInputField
            type="number"
            label="估計使用壽命(以月為單位)"
            hint="車輛預計投入現有車隊服務的月數"
            {...register("lifecycle.estimated_service_months")}
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="估計使用壽命(以里程為單位)"
            hint="車輛預計在退出車隊服務之前使用/運行的里程數"
            {...register("lifecycle.estimated_service_meter")}
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="估計轉售價值"
            placeholder="$"
            hint="預期退休後通過銷售/處置所能回收的金額（扣除任何相關費用）"
            {...register("lifecycle.estimated_resale")}
          />
        </div>
      </FormCard>

      <FormCard formTitle="終止服務">
        <div className="w100">
          <TextInputField
            type="date"
            label="停用日期"
            hint="車輛退出車隊服務的日期"
            {...register("lifecycle.out_service_date")}
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="停用里程表數值"
            hint="服役停止當日的最終里程表讀數"
            {...register("lifecycle.out_service_odometer")}
          />
        </div>
      </FormCard>
    </Pane>
  );
}

export default Lifecycle;
