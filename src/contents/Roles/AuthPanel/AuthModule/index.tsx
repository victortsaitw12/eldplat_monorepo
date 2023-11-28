import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";
import { DivSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import { I_FuncAuthElemReq } from "@service/role/createRole";
import RadioOptions from "../RadioOptions";
import RadioGroupList from "@components/RadioGroupList";

const AuthModule = ({
  data,
  isEdit
}: {
  data: I_AuthFuncItem;
  isEdit: boolean;
}) => {
  const defaultAuthDataValues = data.func_element.map((item) => {
    return {
      fg_no: data.fg_no,
      func_no: data.func_no,
      module_no: data.module_no,
      element_no: item.element_no,
      element_default: item.element_default
    };
  });
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const [authDataValues, setAuthDataValues] = React.useState<
    I_FuncAuthElemReq[]
  >(defaultAuthDataValues);

  // TODO data.module_enb
  const handleValueChange = (value: string) => {
    setAuthDataValues();
    return;
    // console.log("v:", value);
  };

  const handleEnabled = () => {
    setIsEnabled((prev) => !prev);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <DivSTY className="authFunc">
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
    </DivSTY>
  );
};

export default AuthModule;

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
