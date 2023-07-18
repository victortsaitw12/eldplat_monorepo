import React, { useId } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue
} from "react-hook-form";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { BodySYT, colourStyles } from "./style";
import { HelpIcon, CaretDownIcon } from "evergreen-ui";
import Tooltip from "@components/Tooltip";
import StatusIcon from "@components/StatusIcon";

function DropdownIndicator(props: DropdownIndicatorProps) {
  return (
    <components.DropdownIndicator {...props}>
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "5px",
          backgroundColor: "#F1F6FD",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CaretDownIcon fill={"#696f8c"} />
      </div>
    </components.DropdownIndicator>
  );
}

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
  const defaultOption = options.find(
    (option: any) => option.value === formDefaultValue
  );
  const placeholder = isDisabled ? "--" : "請選擇";
  return (
    <BodySYT vertical={vertical} isDisabled={isDisabled}>
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
          components={{ DropdownIndicator: DropdownIndicator }}
          menuPlacement="auto"
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
