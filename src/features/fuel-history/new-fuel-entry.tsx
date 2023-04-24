import React, { useState } from "react";
import Uploader from "@components/Uploader";
import {
  Pane,
  SelectField,
  TextInputField,
  Checkbox,
  Textarea
} from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";
import { DetailBlock } from "./style";

function FuelHistory() {
  return (
    <Pane marginX="20px">
      <FormCard formTitle="Details">
        <div className="w100">
          <SelectField
            label="Vehicle *"
            placeholder="請選擇"
            paddingTop={10}
            marginBottom={10}
          >
            <option value="請選擇" selected disabled>
              請選擇
            </option>
            <option value="sample">sample</option>
          </SelectField>
        </div>
        <div className="w50">
          <TextInputField
            type="date"
            label="Fuel Entry Date *"
            maxWidth="80%"
            marginBottom={10}
          />
          <TextInputField
            type="time"
            label=""
            maxWidth="20%"
            marginBottom={10}
            paddingTop="18px"
          />
        </div>
        <div className="w100">
          <SelectField
            label="Fuel Type/Grade"
            placeholder="請選擇"
            marginBottom={10}
          >
            <option value="請選擇" selected disabled>
              請選擇
            </option>
            <option value="sample">sample</option>
          </SelectField>
        </div>
        <div className="w100">
          <SelectField
            label="Vendor Name"
            placeholder="請選擇"
            paddingTop={10}
            marginBottom={10}
          >
            <option value="請選擇" selected disabled>
              請選擇
            </option>
            <option value="sample">sample</option>
          </SelectField>
        </div>
        <div className="w100">
          <TextInputField
            label="Reference"
            hint="e.g. invoice number, transaction ID, etc."
            marginBottom={10}
          />
        </div>
        {/* checkbox */}
        <DetailBlock>
          <div className="line" />
          <p className="flags">
            Flags
            <p>
              Enable the options below to flag transactions for personal use, to
              ensure accurate metrics for partial fill-ups, or to reset usage
              after a missed entry.
              <a href="javascript:void(0);"> Learn More</a>
            </p>
          </p>
          <Checkbox label="Personal" />
          <Checkbox label="Partial fuel-up" />
          <Checkbox label="Reset usage" disabled />
        </DetailBlock>
        {/* uploader */}
        <div className="w50">
          <Uploader label="Photos" />
          <Uploader label="Documents" />
        </div>
      </FormCard>
      {/* Comments */}
      <FormCard formTitle="Comments">
        <Textarea name="textarea-1" placeholder="Textarea placeholder..." />
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

export default FuelHistory;
