import React, { useId } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue
} from "react-hook-form";
import Select from "react-select";

function StyledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  options,
  isDisabled,
  onFormChange,
  formDefaultValue
}: {
  options: Array<{ label: string; value: string }>;
  isDisabled: boolean;
  formDefaultValue: PathValue<TFieldValues, TName>;
  onFormChange: (value: string) => void;
}) {
  const id = useId();
  const defaultOption = options.find(
    (option: any) => option.value === formDefaultValue
  );
  return (
    <Select
      instanceId={id}
      options={options}
      onChange={(e) => {
        if (e) {
          onFormChange(e.value);
        }
      }}
      defaultValue={defaultOption}
      isDisabled={isDisabled}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: state.isDisabled
            ? "none"
            : state.isFocused
            ? "1px solid #679DEF"
            : "1px solid #AFC3DA",
          backgroundColor: state.isDisabled ? "transparent" : "white",
          boxShadow: state.isFocused ? "0 0 0 2px #D6E0FF" : "none"
        }),
        indicatorsContainer: (baseStyles, state) => ({
          ...baseStyles,
          display: state.isDisabled ? "none" : "block"
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: state.isDisabled ? "#567190" : "#718BAA"
        })
      }}
    />
  );
}

function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  options,
  isDisabled
}: {
  name: TName;
  control?: Control<TFieldValues>;
  options: Array<{ label: string; value: string }>;
  isDisabled: boolean;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <StyledSelect
          options={options}
          isDisabled={isDisabled}
          onFormChange={onChange}
          formDefaultValue={value}
        />
      )}
    />
  );
}

export default ControlledSelect;
