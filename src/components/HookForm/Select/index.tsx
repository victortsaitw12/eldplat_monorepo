import React, { forwardRef, memo } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import Select from "react-select";
import type { InputHTMLAttributes } from "react";

// interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
//   value: string;
//   options: string[];
//   description?: string;
//   errorMessage?: string;
//   hint?: string;
//   onFormChange: (value: string) => void;
// }

function ControlledSelect<
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
  options: any;
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
        <Select options={options} onChange={onChange} />
      )}
    />
  );
}

export default ControlledSelect;
