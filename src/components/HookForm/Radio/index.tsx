import { InputHTMLAttributes, useId } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Radio as EverGreenRadio } from "evergreen-ui";
import { RadioGroupListSTY, RadioListFieldSTY } from "./style";
interface RadioProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string; description?: string }[];
  errorMessage?: string;
  hint?: string;
  value?: string;
  onFormChange: (value: string) => void;
  isDisabled?: boolean;
}

const RadioItem = ({
  checked,
  onFormChange,
  radioValue,
  label,
  description,
  isDisabled
}: {
  checked: boolean;
  onFormChange: (value: string) => void;
  radioValue: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
}) => {
  return (
    <RadioListFieldSTY checked={checked} className="radio__item">
      <EverGreenRadio
        size={12}
        label={label}
        value={radioValue}
        checked={checked}
        marginY={0}
        disabled={isDisabled}
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          onFormChange(e.target.value);
        }}
      />
      {description && <div className="description">{description}</div>}
    </RadioListFieldSTY>
  );
};

const Radio = ({ value, options, onFormChange, isDisabled }: RadioProps) => {
  const id = useId();
  return (
    <RadioGroupListSTY className="radio__groupList">
      {options.map((radioObject, index) => {
        return (
          <RadioItem
            key={id + "-" + index}
            checked={value === radioObject.value}
            radioValue={radioObject.value}
            label={radioObject.label}
            onFormChange={onFormChange}
            description={radioObject.description}
            isDisabled={isDisabled}
          />
        );
      })}
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
  errorMessage,
  hint,
  isDisabled
}: {
  name: TName;
  control?: Control<TFieldValues>;
  options: { label: string; value: string; description?: string }[];
  errorMessage?: string;
  hint?: string;
  isDisabled?: boolean;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <Radio
            options={options}
            value={value}
            onFormChange={onChange}
            errorMessage={errorMessage}
            hint={hint}
            isDisabled={isDisabled}
          />
        );
      }}
    />
  );
}

export default ControlledRadio;
