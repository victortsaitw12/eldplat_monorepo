import React, { useState } from "react";
import { Pane, TextInputField, Checkbox } from "evergreen-ui";
import RadioGroupList, { RadioListField } from "@components/RadioGroupList";
import FormCard from "@components/FormCard";

interface Props {
  hide?: boolean;
}
function Settings({ hide }: Props) {
  const [primaryMeter, setPrimaryMeter] = useState("1");
  const [fuelUnit, setFuelUnit] = useState("1");
  const [measurementUnits, setMeasurementUnits] = useState("1");
  console.log("primaryMeter", primaryMeter);
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="設定">
        <div className="w50">
          <RadioGroupList
            title="主要里程"
            hint="請選擇衡量該車輛使用情況的方式"
          >
            <RadioListField
              label="英里"
              name="primary_meter"
              value="1"
              checked={primaryMeter === "1"}
              onChange={setPrimaryMeter}
            />
            <RadioListField
              label="公里數"
              name="primary_meter"
              value="2"
              checked={primaryMeter === "2"}
              onChange={setPrimaryMeter}
            />
            <RadioListField
              label="小時"
              name="primary_meter"
              value="3"
              checked={primaryMeter === "3"}
              onChange={setPrimaryMeter}
            />
          </RadioGroupList>
        </div>

        <div className="w100">
          <Checkbox label="次要里程" name="secondary_meter" />
        </div>
        <div className="w100">
          <RadioGroupList
            title="燃油單位"
            hint="設置輸入此車輛的燃油記錄時使用的容積單位"
          >
            <RadioListField
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
            />
          </RadioGroupList>
        </div>
        <div className="w100">
          <RadioGroupList
            title="測量單位"
            hint="用於顯示某些屬性的單位，如長度、寬度、重量等"
          >
            <RadioListField
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
            />
          </RadioGroupList>
        </div>
      </FormCard>
    </Pane>
  );
}

export default Settings;
