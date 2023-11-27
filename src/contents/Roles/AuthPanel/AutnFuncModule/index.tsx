import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import RadioOptions from "../RadioOptions";

const AutnFuncModule = ({
  data,
  isEdit
}: {
  data: I_AuthFuncItem;
  isEdit: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  // TODO data.module_enb
  const handleValueChange = (value: string) => {
    return;
    // console.log("v:", value);
  };

  const handleEnabled = (value: string) => {
    setIsEnabled((prev) => !prev);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="authFunc">
      <div className="authFunc__title authFunc__item">
        <div className="label">
          {isOpen ? (
            <div className="toggleBtn" onClick={handleToggle}>
              <CaretDownIcon />
            </div>
          ) : (
            <div className="toggleBtn" onClick={handleToggle}>
              <CaretRightIcon />
            </div>
          )}
          {data.func_name}{" "}
        </div>
        <Switch
          className="value"
          checked={isEnabled}
          onChange={handleEnabled}
          disabled={!isEdit}
        />
      </div>
      <div
        className={`authFunc__contents ${isOpen ? "" : "hide"} ${
          isEnabled ? "" : "disabled"
        }`}
      >
        {data.func_element.map((elem: I_AuthFuncElement, i: number) => (
          <div
            className={"authFunc__element authFunc__item"}
            key={`funcElem-${i}`}
          >
            <div className="label">{elem.element_name}</div>
            <div className="value">
              {isEdit ? (
                <RadioOptions
                  value={elem.element_default}
                  name={elem.element_no}
                  onChange={handleValueChange}
                />
              ) : (
                authFuncViewValue.get(elem.element_default)
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutnFuncModule;

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
