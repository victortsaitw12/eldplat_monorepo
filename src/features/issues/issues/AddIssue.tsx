import React from "react";
import { Pane, TextInputField, TextareaField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";

import { StepControlSTY } from "@components/FormCard/style";
import Uploader from "@components/Uploader";

function AddIssue() {
  return (
    <Pane marginX="20px">
      <FormCard formTitle="Details">
        <div className="w100">
          <TextInputField label="Asset" required placeholder="Please select" />
        </div>
        <div className="w50">
          <TextInputField
            maxWidth="25%"
            label="Reported Date"
            required
            type="date"
          />
          <TextInputField maxWidth="25%" type="time" marginTop="18px" />
        </div>
        <div className="w100">
          <TextInputField label="Summary" required />
        </div>
        <div className="w100">
          <TextareaField label="Description" />
        </div>
        <div className="w100">
          <SelectField
            label="Labels"
            hint="Use labels to categorize group, prioritize and more. (e.g Electrical, Priority: High)"
          >
            <option value="">Please select</option>
          </SelectField>
        </div>
        <div className="w100">
          <SelectField label="Reported By">
            <option value="">jason chen</option>
          </SelectField>
        </div>
        <div className="w100">
          <SelectField label="Assigned to">
            <option value="">Please select</option>
          </SelectField>
        </div>
      </FormCard>

      <FormCard formTitle="Overdue Settings">
        <div className="w50">
          <TextInputField
            maxWidth="50%"
            label="Due Date"
            hint="(optional) Considered overdue after this date"
            type="date"
          />
        </div>
      </FormCard>

      <FormCard formTitle="Overdue Settings">
        <div className="w50">
          <Uploader label="Photos" />
          <Uploader label="Documents" />
        </div>
      </FormCard>

      <StepControlSTY>
        <button>Cancel</button>

        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </StepControlSTY>
    </Pane>
  );
}

export default AddIssue;
