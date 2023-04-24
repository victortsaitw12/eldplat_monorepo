import React from "react";
import FormCard from "@components/FormCard";
import {
  TextInputField,
  Label,
  FilePicker,
  SelectField,
  Textarea
} from "evergreen-ui";
import { StepControlSTY, FilePickBtnSTY } from "@components/FormCard/style";
import { AddEquipmentSTY } from "./AddEquipmentSTY";

function AddEquipment() {
  return (
    <AddEquipmentSTY>
      <FormCard formTitle="Identification">
        <div className="w100">
          <TextInputField
            label="Name"
            required
            hint="Enter a nickname to distinguish this equopment in Fleetio"
          />
          <SelectField label="Type" required>
            <option value="Mower">Mower</option>
          </SelectField>
          <TextInputField label="Brand" hint="e.g.Deere,Stihl, etc." />
          <TextInputField label="Model" hint="Z200,Wg14,etc." />
          <TextInputField label="Serial Number" />
          <TextInputField
            label="Labels"
            placeholder="Please select"
            hint="Use labels to categorize,group,prioritize and more.(e.g. Electrical, Priority:Hight)"
          />
          <FilePickBtnSTY>
            <label className="inputFileTitle">Profile Photo</label>
            <FilePicker name="Pick File" multiple />
            <p className="hintText">No file selected</p>
          </FilePickBtnSTY>
        </div>
      </FormCard>
      <FormCard formTitle="Custody">
        <div className="w100">
          <SelectField
            label="Linked Vehicle"
            hint="The vehicle associated with this equipment."
          >
            <option value="">Please select</option>
          </SelectField>
          <SelectField
            label="Current Assignee"
            hint="The person currently responsile for this equipment."
          >
            <option value="">Please select</option>
          </SelectField>
        </div>
      </FormCard>
      <FormCard formTitle="Classification">
        <div className="w100">
          <SelectField label="Group" required>
            <option value="">Please select</option>
          </SelectField>
          <SelectField label="Status" required>
            <option value="In-Service">In-Service</option>
          </SelectField>
        </div>
      </FormCard>

      <FormCard formTitle="Purchase Infomation">
        <div className="w100">
          <SelectField label="Purchase Vendor">
            <option value="">Please select</option>
          </SelectField>
          <TextInputField label="Purchase Price" placeholder="$" />
          <TextInputField
            label="Purchase Date"
            type="date"
            placeholder="e.g. 02/22/2023"
          />
          <TextInputField
            label="Warranty Expiration Date"
            type="date"
            placeholder="e.g. 02/22/2023"
          />
          <Label htmlFor="textarea-2" marginBottom={4} display="block">
            Purchase Comments
          </Label>
          <Textarea id="textarea-2" />
        </div>
      </FormCard>

      <FormCard formTitle="Lifecycle">
        <div className="w100">
          <TextInputField label="In-Service Date" type="date" />
          <TextInputField
            label="Estimated Service Life in Months"
            placeholder="1"
          />
          <TextInputField label="Estimated Resale Value" placeholder="$" />
          <TextInputField
            label="Out-of-Service Date"
            type="date"
            placeholder="e.g. 02/22/2023"
          />
        </div>
      </FormCard>
      <StepControlSTY>
        <button>Cancel</button>
        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </StepControlSTY>
    </AddEquipmentSTY>
  );
}

export default AddEquipment;
