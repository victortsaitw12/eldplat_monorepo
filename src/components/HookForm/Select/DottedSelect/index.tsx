import React, { useId } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue
} from "react-hook-form";
import Select from "react-select";
import { BodySYT, colourStyles } from "./style";
import { HelpIcon } from "evergreen-ui";
import Tooltip from "@components/Tooltip";
function StyledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  options,
  isDisabled,
  onFormChange,
  formDefaultValue,
  isRequire,
  label,
  hint
}: {
  options: Array<{ label: string; value: string; color: string }>;
  isDisabled: boolean;
  isRequire?: boolean;
  label: string;
  hint?: string;
  formDefaultValue: PathValue<TFieldValues, TName>;
  onFormChange: (value: string) => void;
}) {
  const id = useId();
  const defaultOption = options.find(
    (option: any) => option.value === formDefaultValue
  );
  const placeholder = isDisabled ? "---" : "請選擇";
  return (
    <BodySYT>
      <div className="title">
        {!!isRequire && <span className="required">*</span>}
        <span>{label}</span>
        {!!hint && (
          <Tooltip text={hint}>
            <HelpIcon />
          </Tooltip>
        )}
      </div>
      <Select
        instanceId={id}
        isMulti={false}
        options={options}
        placeholder={placeholder}
        onChange={(e) => {
          if (e) {
            onFormChange(e.value);
          }
        }}
        defaultValue={defaultOption}
        isDisabled={isDisabled}
        styles={colourStyles}
      />
    </BodySYT>
  );
}

function ControlledSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  options,
  isDisabled,
  isRequire,
  label,
  hint
}: {
  name: TName;
  control?: Control<TFieldValues>;
  options: Array<{ label: string; value: string; color: string }>;
  isDisabled: boolean;
  isRequire?: boolean;
  label: string;
  hint?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <StyledSelect
          options={options}
          isDisabled={isDisabled}
          isRequire={isRequire}
          label={label}
          hint={hint}
          onFormChange={onChange}
          formDefaultValue={value}
        />
      )}
    />
  );
}

export default ControlledSelect;
