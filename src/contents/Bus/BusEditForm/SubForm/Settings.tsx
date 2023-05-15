import React from "react";
import { Pane } from "evergreen-ui";
import RadioGroupList from "@components/RadioGroupList";
import FormCard from "@components/FormCard";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext
} from "react-hook-form";
import { BusDataTypes } from "../busDefaultData";
interface Props {
  hide?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
}
function Settings({ hide, register, errors }: Props) {
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="設定">
        <div className="w50">
          <RadioGroupList
            title="主要里程"
            hint="請選擇衡量該車輛使用情況的方式"
          >
            <label>
              <input
                type="radio"
                value={"1"}
                {...register("settings.primary_meter")}
              />
              <span>英里</span>
            </label>
            <label>
              <input
                type="radio"
                value={"2"}
                {...register("settings.primary_meter")}
              />
              <span>公里數</span>
            </label>
            <label>
              <input
                type="radio"
                value={"3"}
                {...register("settings.primary_meter")}
              />
              <span>小時</span>
            </label>
          </RadioGroupList>
        </div>
        <div className="w100">
          <label>
            <input type="checkbox" value={1} />
            次要里程
          </label>
          {/* <Checkbox label="次要里程" {...register("secondary_Meter", {})} />
          <Checkbox label="次要里程" {...register("secondary_Meter", {})} /> */}
        </div>
        <div className="w100">
          <RadioGroupList
            title="燃油單位"
            hint="設置輸入此車輛的燃油記錄時使用的容積單位"
          >
            <label>
              <input
                type="radio"
                value={"1"}
                {...register("settings.fuel_unit")}
              />
              <span>加侖（美國）</span>
            </label>
            <label>
              <input
                type="radio"
                value={"2"}
                {...register("settings.fuel_unit")}
              />
              <span>加侖（英國）</span>
            </label>
            <label>
              <input
                type="radio"
                value={"3"}
                {...register("settings.fuel_unit")}
              />
              <span>公升</span>
            </label>
            {/* <RadioListField
              label="加侖（美國）"
              name="fuel_unit"
              value="1"
              checked={fuelUnit === "1"}
              onChange={setFuelUnit}
            />
            <RadioListField
              label="加侖（英國）"
              name="fuel_unit"
              value="2"
              checked={fuelUnit === "2"}
              onChange={setFuelUnit}
            />
            <RadioListField
              label="公升"
              name="fuel_unit"
              value="3"
              checked={fuelUnit === "3"}
              onChange={setFuelUnit}
            /> */}
          </RadioGroupList>
        </div>
        <div className="w100">
          <RadioGroupList
            title="測量單位"
            hint="用於顯示某些屬性的單位，如長度、寬度、重量等"
          >
            {/* <RadioListField
              label="英制（英寸、磅、加侖、英里）"
              name="measurement_units"
              value="1"
              checked={measurementUnits === "1"}
              onChange={setMeasurementUnits}
            />
            <RadioListField
              label="公制（厘米、千克、升、公里）"
              name="measurement_units"
              value="2"
              checked={measurementUnits === "2"}
              onChange={setMeasurementUnits}
            /> */}
            <label>
              <input
                type="radio"
                value={"1"}
                {...register("settings.measurement_units")}
              />
              <span>英制（英寸、磅、加侖、英里）</span>
            </label>
            <label>
              <input
                type="radio"
                value={"2"}
                {...register("settings.measurement_units")}
              />
              <span>公制（厘米、千克、升、公里）</span>
            </label>
            <label></label>
          </RadioGroupList>
        </div>
      </FormCard>
    </Pane>
  );
}

export default Settings;
