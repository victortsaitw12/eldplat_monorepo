import React from "react";

import { TextInputField, Checkbox, Select, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";

import { DetailsHistorySTY } from "./style";

function DetailsHistory() {
  const [checked, setChecked] = React.useState<{ [key: number]: boolean }>({});

  return (
    <DetailsHistorySTY>
      <FormCard formTitle="Details">
        <div className="w100 input-wrap">
          <SelectField label="Vehicle" placeholder="請選擇">
            <option selected disabled>
              請選擇
            </option>
          </SelectField>
          <SelectField label="Service Task" placeholder="請選擇">
            <option selected disabled>
              請選擇
            </option>
          </SelectField>
        </div>
        <div className="w50 input-wrap">
          <div className="w50 input-wrap">
            <TextInputField label="Vehicle" placeholder="請輸入" />
            <Select>
              <option value="foo" selected>
                day(s)
              </option>
              <option value="bar">week(s)</option>
            </Select>
          </div>
          <div className="w50 input-wrap">
            <TextInputField
              label="Time Due Soon Threshold"
              placeholder="請輸入"
            />
            <Select>
              <option value="foo" selected>
                day(s)
              </option>
              <option value="bar">week(s)</option>
            </Select>
          </div>
          <SelectField label="Primary Meter Interval" placeholder="請選擇">
            <option selected disabled>
              請選擇
            </option>
          </SelectField>
          <SelectField
            label="Primary Meter Due Soon Threshold"
            placeholder="請選擇"
          >
            <option selected disabled>
              請選擇
            </option>
          </SelectField>
        </div>
        <div className="w100 no-line">
          <Checkbox
            className="checkbox"
            label={
              <>
                <div>
                  Manually set the due date and/or meter for the next reminder
                </div>
                <div className="remark">
                  Adjust the schedule by updating the next reminder's meter
                  and/or date.
                </div>
              </>
            }
            marginTop="unset"
            checked={checked[0]}
            onChange={(e) =>
              setChecked((prev) => {
                prev[0] = e.target.checked;

                return { ...prev };
              })
            }
          />
        </div>
        <div className="w100 input-wrap">
          <Checkbox
            className="checkbox"
            label={
              <>
                <div>Notifications</div>
                <div className="remark">
                  If ON, and the user has Notification Settings enabled for
                  Service Reminders, the user will receive a notification at
                  7:00 am once the reminder becomes Due Soon or Overdue, and
                  then weekly until the Reminder is resolved.
                </div>
              </>
            }
            marginTop="unset"
            checked={checked[1]}
            onChange={(e) =>
              setChecked((prev) => {
                prev[1] = e.target.checked;

                return { ...prev };
              })
            }
          />
          <SelectField label="Watchers" width="100%" disabled>
            <option selected>請選擇</option>
          </SelectField>
        </div>
        <StepControlSTY className="step-control">
          <button>Cancel</button>
          <div className="next-step">
            <button className="bordered">Save & Add Another</button>
            <button className="fill">Save Service Reminder</button>
          </div>
        </StepControlSTY>
      </FormCard>
    </DetailsHistorySTY>
  );
}

export default DetailsHistory;
