import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
interface RadioProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  description?: string;
  errorMessage?: string;
  hint?: string;
  value?: string;
  onFormChange: (value: string) => void;
}
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
    <div>
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
    </div>
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
