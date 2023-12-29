import React, { useState } from "react";
import {
  TextInputField,
  Pane,
  Button,
  FilePicker,
  SelectField
} from "evergreen-ui";

function Indentification() {
  const [vehicleNameValue, setVehicleNameValue] = useState("");
  const [VINValue, setVINValue] = useState("");

  const handleChangevehicleNameValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVehicleNameValue(e.target.value);
  };

  const handleChangeVINValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVINValue(e.target.value);
  };

  return (
    <>
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
    </>
  );
}

export default Indentification;
