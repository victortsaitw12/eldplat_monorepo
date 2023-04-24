import React, { useState } from "react";
import { ChevronDownIcon } from "evergreen-ui";
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
function SubFilterButton({
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
      <button
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
      </button>
      {active && (
        <div className="filter-modal">
          <input
            className="modal-input"
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          />
          <div className="modal-content">{value && <div>{value}</div>}</div>
          <div className="modal-actions">
            <Label
              onClick={() => {
                setActive("");
              }}
              text="取消"
            />
            <Label
              onClick={() => {
                updateFilter(filterValue!);
                setActive("");
              }}
              text="套用"
            />
          </div>
        </div>
      )}
    </BodySTY>
  );
}
export default SubFilterButton;
