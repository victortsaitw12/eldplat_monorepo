import React, { useState } from "react";
import { SelectField, Pane } from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupColumn, {
  RadioColumnField
} from "@components/RadioGroupColumn";
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
function Maintenance({ hide, register, errors }: Props) {
  const [schedule, setSchedule] = useState("0");
  console.log("render Maintenance");
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="維修計畫">
        <RadioGroupColumn
          title="選擇服務項目"
          hint="服務程序自動管理具有共同預防性維護需求的車輛服務提醒"
        >
          <RadioColumnField
            label="無"
            value="0"
            checked={schedule === "0"}
            onChange={setSchedule}
          />
          <RadioColumnField
            label="採購供應商"
            value="1"
            checked={schedule === "1"}
            onChange={setSchedule}
          >
            <SelectField>
              <option value="0">Please Select</option>
            </SelectField>
          </RadioColumnField>
        </RadioGroupColumn>
      </FormCard>
    </Pane>
  );
}

export default Maintenance;
