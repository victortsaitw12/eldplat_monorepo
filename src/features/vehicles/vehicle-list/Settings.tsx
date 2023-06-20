import React, { useState } from "react";
import { Pane, TextInputField, RadioGroup, Checkbox } from "evergreen-ui";
import FormCard from "@components/FormCard";

const primaryMeterOptions = [
  { label: "Miles", value: "0" },
  {
    label: "Kilometers",
    value: "1"
  },
  {
    label: "Hours",
    value: "2"
  }
];

const fuelUnitOptions = [
  { label: "Gallons (US)", value: "0" },
  {
    label: "Gallons (UK)",
    value: "1"
  },
  {
    label: "Liters",
    value: "2"
  }
];

const measurementUnitsOptions = [
  { label: "Imperial (inches, pounds, gallons, miles)", value: "0" },
  {
    label: "Metric (centimeters, kilograms, liters, kilometers)",
    value: "1"
  }
];

function Settings() {
  const [primaryMeter, setPrimaryMeter] = useState("0");
  const [fuelUnit, setFuelUnit] = useState("0");
  const [measurementUnits, setMeasurementUnits] = useState("0");

  return (
    <Pane marginX="20px">
      <FormCard formTitle="Settings">
        <div className="w50">
          <RadioGroup
            label="Primary Meter"
            value={primaryMeter}
            options={primaryMeterOptions}
            onChange={(event) => setPrimaryMeter(event.target.value)}
          />
          <div>
            <TextInputField label="Current Reading" />
            <TextInputField
              label="Average Usage per Day"
              type="number"
              hint="Average Usage per Day is used to forecast Service Reminders. Normally, it is automatically calculated based on the Vehicle’s Meter Entries. If the Vehicle has few Meter Entries, you can override the automatic calculation to accurately forecast Service Reminders. Learn More"
            />
            <Checkbox label="Automatically calculate" />
          </div>
        </div>

        <div className="w100">
          <Checkbox label="Secondary Meter" />
        </div>

        <div className="w100">
          <RadioGroup
            label="Fuel Unit"
            value={fuelUnit}
            options={fuelUnitOptions}
            onChange={(event) => setFuelUnit(event.target.value)}
          />
          <RadioGroup
            label="Measurement Units"
            value={measurementUnits}
            options={measurementUnitsOptions}
            onChange={(event) => setMeasurementUnits(event.target.value)}
          />
        </div>
      </FormCard>
    </Pane>
  );
}

export default Settings;
