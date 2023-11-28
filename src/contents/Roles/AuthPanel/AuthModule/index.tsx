import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";
import { useFieldArray } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";
import { DivSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import RadioOptions from "../RadioOptions";
import RadioGroupList from "@components/RadioGroupList";

const AuthModule = ({ data, isEdit, index, control, setValue }: I_Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const { fields } = useFieldArray({
    control,
    name: `func_auth.${index}.func_element`
  });
  console.log("fields:", fields);
  // TODO data.module_enb
  const handleValueChange = (value: string) => {
    return;
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
        {/* {data.func_element.map((elem: I_AuthFuncElement, i: number) => ( */}
        {fields.map((elem, i: number) => (
          <div
            className={"authFunc__element authFunc__item"}
            key={`funcElem-${i}`}
          >
            {/* <div className="label">{elem.element_name}</div> */}
            <div className="label">label</div>
            <div className="value">
              {isEdit ? (
                <RadioOptions
                  value={elem.element_default}
                  // value="1"
                  // name={elem.element_no}
                  name={`func_auth.${index}.func_element.${i}.element_default`}
                  // onChange={handleValueChange}
                  onChange={(value) =>
                    setValue(
                      `func_auth.${index}.func_element.${i}.element_default`,
                      value
                    )
                  }
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

interface I_Props {
  data: I_AuthFuncItem;
  isEdit: boolean;
  index?: number;
  control: any;
  setValue: UseFormSetValue<any>;
}

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
