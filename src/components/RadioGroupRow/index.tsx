import React from "react";
import { Radio } from "evergreen-ui";
import { RadioGroupRowSTY } from "./style";

interface I_RadioGroupRow {
  children: React.ReactNode;
}

function RadioGroupRow({ children }: I_RadioGroupRow) {
  return <RadioGroupRowSTY>{children}</RadioGroupRowSTY>;
}

interface I_RadioField {
  name?: string;
  value?: string;
  label?: string;
  hint?: string | React.ReactNode;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RadioField({
  label,
  hint,
  name,
  checked,
  value,
  onChange = (value: any) => {
    console.log(value);
  }
}: I_RadioField) {
  return (
    <div className="radio-block">
      <Radio
        label={label}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {hint && <p>{hint}</p>}
    </div>
  );
}

export default RadioGroupRow;
