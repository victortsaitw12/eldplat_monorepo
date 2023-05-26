import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Radio as EverGreenRadio } from "evergreen-ui";
import { RadioGroupListSTY, RadioListFieldSTY } from "./style";
interface RadioProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  description?: string;
  errorMessage?: string;
  hint?: string;
  value?: string;
  onFormChange: (value: string) => void;
}

const RadioItem = ({
  checked,
  onFormChange,
  radioValue
}: {
  checked: boolean;
  onFormChange: (value: string) => void;
  radioValue: string;
}) => {
  return (
    <RadioListFieldSTY>
      <EverGreenRadio
        value={radioValue}
        checked={checked}
        onChange={(e) => {
          onFormChange(e.target.value);
        }}
      />
    </RadioListFieldSTY>
  );
};

const Radio = ({
  label,
  value,
  options,
  onFormChange,
  errorMessage,
  hint,
  description
}: RadioProps) => {
  return (
    <RadioGroupListSTY>
      <div>{label}</div>
      {options.map((radioValue) => (
        <label key={radioValue}>
          <input
            type="radio"
            value={radioValue}
            checked={value === radioValue}
            onChange={(e) => {
              onFormChange(e.target.value);
            }}
          />
          {radioValue}
        </label>
      ))}
    </RadioGroupListSTY>
  );
};

function ControlledRadio<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  options,
  label,
  description,
  errorMessage,
  hint
}: {
  name: TName;
  control?: Control<TFieldValues>;
  options: string[];
  label: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Radio
          label={label}
          options={options}
          value={value}
          onFormChange={onChange}
          description={description}
          errorMessage={errorMessage}
          hint={hint}
        />
      )}
    />
  );
}

export default ControlledRadio;
