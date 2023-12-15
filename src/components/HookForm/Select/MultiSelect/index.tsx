import React, { useId } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions
} from "react-hook-form";
import Select, { MultiValue } from "react-select";
import { selectStyles, BodySTY } from "./style";
type Option = { label: string; value: string };
function StyledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  options,
  isDisabled,
  onFormChange,
  formValue
}: {
  options: Array<Option>;
  isDisabled: boolean;
  formValue: Array<string>;
  onFormChange: (value: Array<string>) => void;
}) {
  const id = useId();
  // const [value, setValue] = useState(formValue);
  const placeholder = isDisabled ? "--" : "請選擇";
  const selectedOptions = options.filter((option) =>
    formValue.includes(option.value)
  );
  return (
    <BodySTY>
      <Select
        instanceId={id}
        options={options}
        onChange={(newValue: any) => {
          const newValueArray = newValue.map((item: any) => item.value);
          onFormChange(newValueArray);
        }}
        defaultValue={[]}
        isDisabled={isDisabled}
        placeholder={placeholder}
        isMulti
        value={selectedOptions}
        styles={selectStyles}
      />
    </BodySTY>
  );
}

function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  rules,
  options,
  isDisabled
}: {
  name: TName;
  control?: Control<TFieldValues>;
  rules?: RegisterOptions;
  options: Array<{ label: string; value: string }>;
  isDisabled: boolean;
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules ? rules : undefined}
      render={({ field: { onChange, value } }) => (
        <StyledSelect
          options={options}
          isDisabled={isDisabled}
          onFormChange={onChange}
          formValue={value}
        />
      )}
    />
  );
}

export default ControlledSelect;
