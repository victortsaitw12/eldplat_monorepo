import React from "react";
import { RadioGroup } from "evergreen-ui";

const RadioOptions = ({
  value,
  onChange
}: {
  value: string;
  name: string;
  onChange: (v: string) => void;
}) => {
  const [newValue, setNewValue] = React.useState(value);
  const [options] = React.useState([
    { label: "顯示並可用", value: "1" },
    { label: "僅供檢視", value: "2" },
    { label: "不顯示", value: "3" }
  ]);

  React.useEffect(() => {
    onChange(newValue);
  }, [newValue, onChange]);
  return (
    <RadioGroup
      label=""
      value={value}
      size={16}
      options={options}
      onChange={(event) => setNewValue(event.target.value)}
    />
  );
};

export default RadioOptions;
