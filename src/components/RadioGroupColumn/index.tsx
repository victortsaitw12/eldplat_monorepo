import React from "react";
import { RadioGroupColumnSTY, RadioColumnFieldSTY } from "./style";

interface I_RadioGroupColumn {
  title?: string;
  hint?: string;
  children?: React.ReactNode;
}

function RadioGroupColumn({ title, children, hint }: I_RadioGroupColumn) {
  return (
    <RadioGroupColumnSTY>
      <h3 className="title">{title}</h3>
      <p className="hint">{hint}</p>
      {children}
    </RadioGroupColumnSTY>
  );
}

interface I_RadioColumnField {
  label?: string;
  children?: React.ReactNode;
  value?: string;
  checked?: boolean;
  name?: string;
  onChange?: (value: any) => void;
}

export function RadioColumnField({
  label,
  children,
  value,
  checked = false,
  name,
  onChange = (value) => {
    console.log(value);
  }
}: I_RadioColumnField) {
  return (
    <RadioColumnFieldSTY onClick={() => onChange(value)}>
      <input name={name} type="radio" checked={checked} value={value} />
      <div className="content">
        <label>{label}</label>
        {checked && children}
      </div>
    </RadioColumnFieldSTY>
  );
}

export default RadioGroupColumn;
