import React from "react";
import { Select } from "evergreen-ui";

import { I_AuthFuncItem } from "@services/role/getOneRole";

const FilterSelect = ({
  filter,
  subFilter,
  data,
  onChange,
  onSubChange
}: {
  data: I_AuthFuncItem[];
  onChange: (v: string) => void;
  onSubChange: (v: string) => void;
  filter: string;
  subFilter: string;
}) => {
  //------ functions ------//
  const handleChange = (e: any) => {
    console.log(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleSubChange = (e: any) => {
    console.log(e.target.value);
    onSubChange && onSubChange(e.target.value);
  };

  const handleEsc = (e: any) => {
    if (e.key === "Escape") onChange && onChange("");
  };

  return (
    <div className="authPanel__control">
      <div className="group">
        <Select onChange={handleChange} onKeyDown={handleEsc}>
          <option value="" selected disabled={filter ? false : true}>
            {filter ? "清除選項" : "功能"}
          </option>
          {data.map((item: I_AuthFuncItem, i: number) => (
            <option key={`module-${i}`} value={item.func_no}>
              {item.func_name}
            </option>
          ))}
        </Select>
        <Select onChange={handleSubChange}>
          <option value="" disabled={subFilter ? false : true}>
            {subFilter ? "清除選項" : "元件"}
          </option>
          <option value="btnAdd">新增</option>
          <option value="btnEdit">編輯</option>
          <option value="btnView">檢視</option>
        </Select>
      </div>
    </div>
  );
};

export default FilterSelect;
