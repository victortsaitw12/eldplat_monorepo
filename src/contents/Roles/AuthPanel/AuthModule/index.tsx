import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";
import { DivSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import RadioOptions from "../RadioOptions";
import Radio from "@components/HookForm/Radio";

const AuthModule = ({
  data,
  isEdit,
  index,
  register,
  control,
  setValue
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);

  const { fields } = useFieldArray({
    control,
    name: `func_auth.${index}.func_element`
  });

  // TODO data.module_enb
  const handleValueChange = (value: string) => {
    return;
  };
  console.log("🍅 fields:", fields);
  // console.log("🍅 name:", `func_auth.${index}.func_element`);

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
          <div className="toggleBtn" onClick={handleToggle}>
            {isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
          </div>
          {data.func_name}
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
        {isEdit &&
          fields.map((field, i) => {
            console.log("🍅 field:", field);
            return (
              <div
                className={"authFunc__element authFunc__item"}
                key={`funcElem-${i}`}
              >
                <div className="label">{field.element_name}</div>
                <div className="value">
                  <Radio
                    key={`func_auth.${index}.func_element.${i}.element_default`}
                    control={control}
                    name={`func_auth.${index}.func_element.${i}.element_default`}
                    isDisabled={!isEdit}
                    options={[
                      { value: "1", label: "顯示並可用" },
                      { value: "2", label: "僅供檢視" },
                      { value: "3", label: "不顯示" }
                    ]}
                  />
                </div>
              </div>
            );
          })}
        {!isEdit &&
          data.func_element.map((elem: I_AuthFuncElement, i: number) => {
            return (
              <div
                className={"authFunc__element authFunc__item"}
                key={`funcElem-${i}`}
              >
                <div className="label">{elem.element_name}</div>
                <div className="value">
                  {authFuncViewValue.get(elem.element_default)}
                </div>
              </div>
            );
          })}
      </div>
    </DivSTY>
  );
};

export default AuthModule;

interface I_Props {
  data: I_AuthFuncItem;
  isEdit: boolean;
  index?: number;
  register: UseFormRegister<any>;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
}

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
