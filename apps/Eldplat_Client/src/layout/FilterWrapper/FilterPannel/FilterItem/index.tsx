import React, { useState, useEffect } from "react";
//
import { BodySTY } from "./style";
import StringInput from "./StringInput";
import NumberInput from "./NumberInput";
import OptionInput from "./OptionInput";
import DateInput from "./DateInput";
//
interface Props {
  field: string;
  filterData: any;
}

function FilterItem({ field, filterData }: Props) {
  const [value, setValue] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  useEffect(() => {
    setValue(filterData.value);
  }, [filterData]);
  console.log(field, filterData);
  return (
    <BodySTY>
      <div className="filter-name">{filterData.label}</div>
      <select
        className="filter-option"
        onChange={(e) => {
          setCondition(e.target.value);
        }}
        value={condition}
      >
        <option value="" disabled hidden>
          Please Choose...
        </option>
        {filterData.arrayConditions.map((arrayCondition: string) => {
          return (
            <option key={arrayCondition} value={arrayCondition}>
              {arrayCondition}
            </option>
          );
        })}
      </select>
      {filterData.dataType === "string" && (
        <StringInput
          value={value}
          name={field}
          updateValue={(value: string) => {
            setValue(value);
          }}
        />
      )}
      {filterData.dataType === "number" && (
        <NumberInput
          value={value}
          name={field}
          updateValue={(value: string) => {
            setValue(value);
          }}
        />
      )}
      {filterData.dataType === "date" && (
        <DateInput
          value={value}
          name={field}
          updateValue={(value: string) => {
            setValue(value);
          }}
        />
      )}
      {filterData.dataType === "option" && (
        <OptionInput
          value={value}
          name={field}
          updateValue={(value: string) => {
            setValue(value);
          }}
        />
      )}
    </BodySTY>
  );
}
export default FilterItem;
