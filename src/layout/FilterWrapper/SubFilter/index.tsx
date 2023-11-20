import React, { useState } from "react";
import { ChevronDownIcon, Select } from "evergreen-ui";
//
import { Label } from "@components/Button/Primary";
import { BodySTY } from "./style";
//
interface Props {
  label: string;
  value: string;
  active: boolean;
  filterTag: string;
  updateFilter: (value: string) => void;
  setActive: (value: string) => void;
}
//
function SubFilter({
  value,
  label,
  updateFilter,
  active = false,
  setActive,
  filterTag
}: Props) {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  return (
    <BodySTY>
      <Select onChange={(event) => alert(event.target.value)}>
        <option value="foo" selected>
          {label}
        </option>
      </Select>
      {/* <button
        onClick={() => {
          if (active) {
            setActive("");
          } else {
            setActive(filterTag);
          }
        }}
        className="filter-button"
      >
        <span>{label}</span>
        <ChevronDownIcon />
      </button> */}
    </BodySTY>
  );
}
export default SubFilter;
