import { InputHTMLAttributes, useState } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
interface CheckBoxProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  description?: string;
  errorMessage?: string;
  hint?: string;
  value?: Array<string>;
  onFormChange: (value: string[]) => void;
}
const CheckBox = ({
  label,
  value = [],
  options,
  onFormChange,
  errorMessage,
  hint,
  description
}: CheckBoxProps) => {
  return (
    <div>
      <div>{label}</div>
      {options.map((checkBoxValue) => (
        <label key={checkBoxValue}>
          {checkBoxValue}
          <input
            type="checkbox"
            value={checkBoxValue}
            checked={value.includes(checkBoxValue)}
            onChange={(e) => {
              if (e.target.checked) {
                onFormChange([...value, e.target.value]);
              } else {
                onFormChange(value.filter((v) => v !== e.target.value));
              }
            }}
          />
        </label>
      ))}
    </div>
  );
};

function ControlledCheckBox<
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
        <CheckBox
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

export default ControlledCheckBox;
