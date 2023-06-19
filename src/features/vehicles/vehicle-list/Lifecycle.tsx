import React from "react";
import { Pane, TextInputField } from "evergreen-ui";
import FormCard from "@components/FormCard";

function Lifecycle() {
  return (
    <Pane marginX="20px">
      <FormCard formTitle="In-Service">
        <div className="w100">
          <TextInputField
            label="In-Service Date"
            hint="Date vehicle entered active fleet service"
            type="date"
          />
        </div>
        <div className="w100">
          <TextInputField
            label="In-Service Odometer"
            hint="Odometer reading on in-service date"
            type="number"
          />
        </div>
      </FormCard>

      <FormCard formTitle="Vehicle Life Estimates">
        <div className="w100">
          <TextInputField
            type="number"
            label="Estimated Service Life in Months"
            hint="Number of months vehicle is expected to be in active fleet service"
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="Estimated Service Life in Meter"
            hint="Primary meter value vehicle is expected to use/run before retiring from fleet service"
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="Estimated Resale Value"
            placeholder="$"
            hint="Amount expected to be recuperated after retirement and sale/disposal (less any associated costs)"
          />
        </div>
      </FormCard>

      <FormCard formTitle="Out-of-Service">
        <div className="w100">
          <TextInputField
            type="date"
            label="Out-of-Service Date"
            hint="Date vehicle was retired from fleet service"
          />
        </div>
        <div className="w100">
          <TextInputField
            type="number"
            label="Out-of-Service Odometer"
            hint="Final odometer reading on out-of-service date"
          />
        </div>
      </FormCard>
    </Pane>
  );
}

export default Lifecycle;
