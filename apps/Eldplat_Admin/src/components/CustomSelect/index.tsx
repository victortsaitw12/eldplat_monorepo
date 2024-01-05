import React from "react";
import { Select } from "evergreen-ui";
import { BodySTY } from "./style";
import { UseFormRegister } from "react-hook-form";
interface I_Option {
  value: string;
  text: string;
}
interface I_Props {
  label?: string;
  selectName?: string;
  options: Array<I_Option>;
  register: UseFormRegister<any>;
  registerProps?: any;
  style?: React.CSSProperties;
  disabled?: boolean;
}
const CustomSelect = ({
  style,
  label,
  selectName,
  options = [
    {
      value: "A",
      text: "A市"
    }
  ],
  register,
  registerProps,
  disabled
}: I_Props) => {
  return (
    <BodySTY style={style} className="custom_select">
      {label && <p>{label}</p>}
      <Select
        disabled={disabled}
        {...register(`${selectName}`, { ...registerProps })}
      >
        {options.map((child, i) => {
          return (
            <option key={child.value + "-" + i} value={child.value}>
              {child.text}
            </option>
          );
        })}
      </Select>
    </BodySTY>
  );
};
export default CustomSelect;
