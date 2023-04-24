import {
  SelectField,
  TextInputField,
  Pane,
  Radio,
  Label,
  Textarea
} from "evergreen-ui";
import FormCard from "@components/FormCard";
import Uploader from "@components/Uploader";
import { StepControlSTY } from "@components/FormCard/style";
import { TextInputFieldSTY, RadioContainerSTY } from "./ExpenseFormSTY";

type OptionsType = {
  label: string;
  value: number;
};

type SelectTypes = {
  label: string;
  notRequired?: boolean;
  options: OptionsType[];
};

type Props = {
  title: string;
  selectOptions?: SelectTypes[];
};

function ExpenseForm({ title, selectOptions }: Props) {
  return (
    <>
      <FormCard formTitle={`${title}`}>
        <div className="w100">
          {selectOptions?.map((item) => {
            return (
              <SelectField
                key={item.label}
                label={item.label}
                required={!item.notRequired}
              >
                {item.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectField>
            );
          })}

          <TextInputFieldSTY isInvalid required label="Amount" type="number" />

          <RadioContainerSTY>
            <Label>Frequency</Label>
            <Pane
              className="frequencyRadio"
              aria-label="Radio Group Label 16"
              role="group"
            >
              <div className="radio">
                <Radio checked size={16} name="group2" label="Single Expense" />
                <span className="radioDescription">
                  A single entry that doesn&apos;t repeat
                </span>
              </div>
              <div className="radio">
                <Radio
                  size={16}
                  name="group2"
                  checked
                  label="Recurring Expense"
                />
                <span className="radioDescription">
                  Repeat on a monthly or annual basis
                </span>
              </div>
            </Pane>
          </RadioContainerSTY>

          <TextInputField isInvalid required label="Date" type="date" />

          <Pane>
            <Label marginBottom={4} display="block">
              Notes
            </Label>
            <Textarea id="textarea-2" />
          </Pane>
        </div>
      </FormCard>

      <FormCard formTitle="">
        <div className="w50">
          <Uploader label="Photos" />
          <Uploader label="Documents" />
        </div>

        <StepControlSTY>
          <button>Cancel</button>
          <div className="next-step">
            <button className="bordered">Save & Add Another</button>
            <button className="fill">Save Vehicle</button>
          </div>
        </StepControlSTY>
      </FormCard>
    </>
  );
}

export default ExpenseForm;
