import React from "react";
import {
  TextInputField,
  Label,
  FilePicker,
  SelectField,
  Textarea
} from "evergreen-ui";
import { AddEquipmentSTY } from "./AddEquipmentSTY";

function AddEquipment() {
  return (
    <AddEquipmentSTY>
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>

      <div>
        <button>Cancel</button>
        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </div>
    </AddEquipmentSTY>
  );
}

export default AddEquipment;
