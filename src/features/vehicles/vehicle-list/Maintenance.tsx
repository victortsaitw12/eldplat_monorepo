import React, { useState } from "react";
import { SelectField, Pane } from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupColumn, {
  RadioColumnField
} from "@components/RadioGroupColumn";

function Maintenance() {
  const [schedule, setSchedule] = useState("0");

  return (
    <Pane marginX="20px">
      <FormCard formTitle="Maintenance Schedule">
        <RadioGroupColumn
          title="Choose a Service Program"
          hint="Service Programs automatically manage Service Reminders for Vehicles
        that share common preventative maintenance needs."
        >
          <RadioColumnField
            label="None"
            value="0"
            checked={schedule === "0"}
            onChange={setSchedule}
          />
          <RadioColumnField
            label="Purchase Vendor"
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
