import { useState } from "react";
import Image from "next/image";
import { TextInputField, TextareaField, Checkbox, Label } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { AvatarSTY } from "@components/Table/style";
import { StepControlSTY } from "@components/FormCard/style";
import {
  SelectFieldSTY,
  TextInputFieldSTY,
  CheckBoxSTY,
  TextareaFieldSTY
} from "./VehicleReminderFormSTY";

type OptionsType = {
  label: string;
  value: number;
};

type SelectTypes = {
  label: string;
  notRequired?: boolean;
  disabled?: boolean;
  options: OptionsType[];
};

type Props = {
  title: string;
  selectOptions?: SelectTypes[];
};

function VehicleReminderForm({ title, selectOptions }: Props) {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <>
      <FormCard formTitle={`${title}`}>
        <div className="w100">
          {selectOptions?.map((item) => {
            return (
              <SelectFieldSTY
                key={item.label}
                label={item.label}
                required={!item.notRequired}
                disabled={item.disabled}
              >
                {item.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectFieldSTY>
            );
          })}
        </div>

        <TextInputFieldSTY className="w50">
          <TextInputField required label="Due Date" type="date" />
        </TextInputFieldSTY>
        <div className="w50 gap-10">
          <TextInputField
            type="number"
            label="Due Soon Threshold"
            maxWidth="20%"
          />
          <SelectFieldSTY marginTop="18px">
            <option value="weeks">week(s)</option>
          </SelectFieldSTY>
        </div>

        <CheckBoxSTY className="w100">
          <Checkbox
            label="Enable Notifications"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <div className="text">
            When enabled, notifications may be sent according to each
            Watcher&apos;s User Notification Settings
          </div>
        </CheckBoxSTY>

        <div className="w100">
          <SelectFieldSTY label="Watchers" required disabled>
            <option value={1359141}>Annual Inspection Fees</option>
          </SelectFieldSTY>
        </div>
      </FormCard>

      <FormCard formTitle="">
        <Label>Comment</Label>
        <div className="w50 gap-10">
          <AvatarSTY>
            <Image
              width="50"
              height="50"
              src="/images/avatar1.jpg"
              alt="test"
            />
          </AvatarSTY>
          <TextareaFieldSTY placeholder="Add an optional comment" />
        </div>
      </FormCard>

      <StepControlSTY>
        <button>Cancel</button>
        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </StepControlSTY>
    </>
  );
}

export default VehicleReminderForm;
