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
import StatusIcon from "@components/StatusIcon";
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
  vertical,
  hint
}: {
  options: Array<{ label: string; value: string; color: string }>;
  isDisabled: boolean;
  isRequire?: boolean;
  label: string;
  hint?: string;
  vertical: boolean;
  formDefaultValue: PathValue<TFieldValues, TName>;
  onFormChange: (value: string) => void;
}) {
  const id = useId();
  console.log("formDefaultValue", formDefaultValue);
  console.log("options", options);
  const defaultOption = options.find(
    (option: any) => option.value === formDefaultValue
  );
  const placeholder = isDisabled ? "--" : "請選擇";
  return (
    <BodySYT vertical={vertical}>
      <div className="title">
        {!!isRequire && <span className="required">*</span>}
        <span>{label}</span>
        {!!hint && (
          <Tooltip text={hint}>
            <HelpIcon />
          </Tooltip>
        )}
      </div>
      {isDisabled ? (
        <div>
          <StatusIcon status={formDefaultValue}></StatusIcon>
        </div>
      ) : (
        <Select
          instanceId={id}
          isMulti={false}
          options={options}
          placeholder={placeholder}
          onChange={(e: any) => {
            if (e) {
              onFormChange(e.value);
            }
          }}
          defaultValue={defaultOption}
          styles={colourStyles}
        />
      )}
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
  hint,
  vertical = false
}: {
  name: TName;
  control?: Control<TFieldValues>;
  options: Array<{ label: string; value: string; color: string }>;
  isDisabled: boolean;
  vertical?: boolean;
  isRequire?: boolean;
  label: string;
  hint?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        console.log("value", value);
        return (
          <StyledSelect
            options={options}
            isDisabled={isDisabled}
            isRequire={isRequire}
            label={label}
            hint={hint}
            onFormChange={onChange}
            formDefaultValue={value}
            vertical={vertical}
          />
        );
      }}
    />
  );
}

export default ControlledSelect;
