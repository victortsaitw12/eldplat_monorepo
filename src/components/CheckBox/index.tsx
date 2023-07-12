import React from "react";
import { BoxComponent, Checkbox, CheckboxOwnProps } from "evergreen-ui";
import { BodySTY } from "./style";
interface Props extends CheckboxOwnProps {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultChecked?: boolean;
}
const StyledCheckBox: BoxComponent<Props, "input"> = ({
  label,
  name,
  value,
  onChange,
  disabled,
  defaultChecked
}: Props) => {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <BodySTY>
      <div className="checkbox-title">{label}</div>
      <Checkbox
        checked={checked}
        name={name}
        value={value}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange && onChange(e);
        }}
        disabled={disabled}
      />
    </BodySTY>
  );
};

export default StyledCheckBox;
