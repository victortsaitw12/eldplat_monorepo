import React from "react";
import { SelectField } from "evergreen-ui";
import { BodySTY } from "./style";
import { UseFormRegister } from "react-hook-form";
interface I_Option {
  value: string;
  text: string;
}
interface I_Props {
  label?: string;
  selectName: string;
  options: Array<I_Option>;
  register: UseFormRegister<any>;
}
const CustomSelect = ({
  label,
  selectName,
  options = [
    {
      value: "A",
      text: "A市"
    }
  ],
  register
}: I_Props) => {
  return (
    <BodySTY className="custom_select">
      {label && <p>{label}</p>}
      <SelectField label="" {...register(`${selectName}`)}>
        {options.map((child, i) => {
          return (
            <option key={child.value + "-" + i} value={child.value}>
              {child.text}
            </option>
          );
        })}
      </SelectField>
    </BodySTY>
  );
};
export default CustomSelect;
