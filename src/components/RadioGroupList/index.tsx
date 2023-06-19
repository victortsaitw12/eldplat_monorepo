import React from "react";
import { Radio } from "evergreen-ui";
import { RadioGroupListSTY, RadioListFieldSTY } from "./style";

interface I_RadioGroupList {
  children: React.ReactNode;
  hint?: string;
  title?: string;
}

function RadioGroupList({ title, hint, children }: I_RadioGroupList) {
  return (
    <RadioGroupListSTY>
      <h3 className="title">{title}</h3>
      <p className="hint">{hint}</p>
      <div className="radio-container">{children}</div>
    </RadioGroupListSTY>
  );
}

interface I_RadioListField {
  label?: string;
  children?: React.ReactNode;
  value?: string;
  checked?: boolean;
  name?: string;
  onChange: (e: any) => void;
}

export function RadioListField({
  label,
  value,
  checked = false,
  name,
  onChange
}: I_RadioListField) {
  return (
    <RadioListFieldSTY>
      <Radio
        label={label}
        name={name}
        checked={checked}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
        }}
      />
    </RadioListFieldSTY>
  );
}

export default RadioGroupList;
