import React from "react";
import {
  Pane,
  SelectField,
  TextInputField,
  Checkbox,
  Textarea
} from "evergreen-ui";
import { DetailBlock } from "./style";

function FuelHistory() {
  return (
    <Pane marginX="20px">
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
      <div>
        <button>Cancel</button>
        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </div>
    </Pane>
  );
}

export default FuelHistory;
