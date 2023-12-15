import React from "react";
import { BoxComponent, Checkbox, CheckboxOwnProps } from "evergreen-ui";
import { BodySTY } from "./style";
interface Props extends CheckboxOwnProps {
  style?: React.CSSProperties;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  defaultChecked?: boolean;
  isLabelAfter?: boolean;
  showCheckbox?: boolean;
}
const StyledCheckBox: BoxComponent<Props, "input"> = ({
  style,
  label,
  name,
  value,
  onChange,
  disabled,
  defaultChecked,
  isLabelAfter = false
}: Props) => {
  const [checked, setChecked] = React.useState(defaultChecked);
  return (
    <BodySTY style={style}>
      {!isLabelAfter && <div className="checkbox-title">{label}</div>}
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
      {isLabelAfter && <div className="checkbox-title">{label}</div>}
    </BodySTY>
  );
};

export default StyledCheckBox;
