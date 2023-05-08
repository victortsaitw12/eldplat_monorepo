import React from "react";
import { BoxComponent, Checkbox, CheckboxOwnProps } from "evergreen-ui";

interface Props extends CheckboxOwnProps {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean
}
const StyledCheckBox: BoxComponent<Props, "input"> = ({
  label,
  name,
  value,
  onChange,
  disabled
}: Props) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      label={label}
      checked={checked}
      name={name}
      value={value}
      onChange={(e) => {
        setChecked(e.target.checked);
        onChange && onChange(e);
      }}
      disabled={disabled}
    />
  );
};

export default StyledCheckBox;
