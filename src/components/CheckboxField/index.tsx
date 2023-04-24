import React from "react";
import { Checkbox } from "evergreen-ui";
import { CheckboxFieldSTY } from "./style";

interface I_CheckboxField {
  label?: string;
  hint?: string;
  item?: any;
  toggleFuelValue: (value: string) => void;
  checked: boolean;
}

function CheckboxField({
  label,
  hint,
  item,
  toggleFuelValue,
  checked
}: I_CheckboxField) {
  const handleCheckbox = (e: any) => {
    toggleFuelValue(e.target.value);
  };
  return (
    <CheckboxFieldSTY>
      <Checkbox
        label={label}
        checked={checked}
        value={item.value}
        onChange={(e: any) => {
          handleCheckbox(e);
        }}
      />
      {hint && <p className="hint">{hint}</p>}
    </CheckboxFieldSTY>
  );
}

export default CheckboxField;
