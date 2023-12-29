import React, { useState } from "react";
import { Pane, TextInputField, RadioGroup, Checkbox } from "evergreen-ui";

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
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
    </Pane>
  );
}

export default Settings;
