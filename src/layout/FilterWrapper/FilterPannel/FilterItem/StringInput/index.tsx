import React from "react";
import { StyledInput } from "./style";

function StringInput({
  value,
  name,
  updateValue
}: {
  value: string;
  name: string;
  updateValue: (value: string) => void;
}) {
  return (
    <StyledInput
      className="filter-input"
      type="text"
      placeholder="search text"
      value={value}
      name={name}
      onChange={(e) => {
        updateValue(e.target.value);
      }}
    />
  );
}

export default StringInput;
