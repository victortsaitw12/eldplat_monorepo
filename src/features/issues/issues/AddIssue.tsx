import React from "react";
import { Pane, TextInputField, TextareaField, SelectField } from "evergreen-ui";

function AddIssue() {
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

export default AddIssue;
