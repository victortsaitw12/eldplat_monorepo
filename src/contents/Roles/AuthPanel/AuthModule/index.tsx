import React from "react";
import { Switch, CaretDownIcon, CaretRightIcon } from "evergreen-ui";
import {
  Control,
  useFieldArray,
  UseFormRegister,
  useWatch,
  UseFormGetValues
} from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";
import { DivSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import Radio from "@components/HookForm/Radio";

const AuthModule = ({
  data,
  isEdit,
  index,
  getValues,
  control,
  setValue,
  filter,
  subFilter
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const { fields } = useFieldArray({
    control,
    name: `func_auth.${index}.func_element`
  });

  const toggleChecked = () => {
    setIsChecked((prev) => !prev);
    if (isChecked) {
      for (let i = 0; i < fields.length; i++) {
        setValue(`func_auth.${index}.func_element.${i}.element_default`, "3");
      }
    } else {
      for (let i = 0; i < fields.length; i++) {
        setValue(`func_auth.${index}.func_element.${i}.element_default`, "1");
      }
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const isFilteredOut = (fg_no: string) => {
    if (filter === "") return false;
    if (filter === fg_no) return false;
    return true;
  };

  const isAuthFuncDisabled = (value: I_AuthFuncElement[]) => {
    if (!isEdit) return true;
    return value.every((elem) => elem.element_default === "3");
  };

  const isAuthFuncChecked = (value: I_AuthFuncElement[]) => {
    return !value.every((elem) => elem.element_default === "3");
  };

  const isAuthFuncElemDisabled = (value: string) => {
    return value === "3";
  };

  const currentFunElement = useWatch({
    control,
    name: `func_auth.${index}.func_element`
  });

  React.useEffect(() => {
    const result = isAuthFuncDisabled(data.func_element);
    if (result) setIsEnabled(false);
  }, []);

  React.useEffect(() => {
    const result = isAuthFuncChecked(currentFunElement);
    if (result) setIsChecked(false);
  }, [currentFunElement]);

  return (
    <DivSTY className="authFunc">
      <div
        className={`authFunc__title authFunc__item ${
          isFilteredOut(data.fg_no) ? "hide" : ""
        }`}
      >
        <div className="label">
          <div className="toggleBtn" onClick={handleToggle}>
            {isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
          </div>
          {data.func_name}
        </div>
        <Switch
          className="value"
          onChange={toggleChecked}
          checked={isAuthFuncChecked(
            getValues(`func_auth.${index}.func_element`)
          )}
          disabled={!isEdit || !isEnabled}
        />
      </div>
      <div
        className={`authFunc__contents ${isOpen ? "" : "hide"} ${
          isEnabled ? "" : "disabled"
        }  ${isFilteredOut(data.fg_no) ? "hide" : ""}`}
      >
        {fields.map((field: any, i) => {
          return (
            <div
              className={`authFunc__element authFunc__item ${
                isAuthFuncElemDisabled(data.func_element[i].element_default)
                  ? "disabled"
                  : ""
              } ${subFilter && field.element_no !== subFilter ? "hide" : ""}`}
              key={`funcElem-${i}`}
            >
              <div className="label">{field.element_name}</div>
              <div
                className={`value ${
                  isAuthFuncElemDisabled(field.element_default) ? "hide" : ""
                }`}
              >
                {isEdit ? (
                  <Radio
                    key={`func_auth.${index}.func_element.${i}.element_default`}
                    control={control}
                    name={`func_auth.${index}.func_element.${i}.element_default`}
                    isDisabled={
                      !isEdit || isAuthFuncElemDisabled(field.element_default)
                    }
                    options={Array.from(
                      authFuncViewValue,
                      ([value, label]) => ({ value, label })
                    )}
                  />
                ) : (
                  <div className="value">
                    {authFuncViewValue.get(
                      getValues(
                        `func_auth.${index}.func_element.${i}.element_default`
                      )
                    )}
                  </div>
                )}
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
  getValues: UseFormGetValues<any>;
  filter: string;
  subFilter: string;
}

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
