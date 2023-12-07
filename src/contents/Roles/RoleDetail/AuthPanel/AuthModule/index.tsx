import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";
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
import { getValue } from "evergreen-ui/types/theme";

const AuthModule = ({
  data,
  isEdit,
  index,
  register,
  getValues,
  control,
  setValue
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const { fields } = useFieldArray({
    control,
    name: `func_auth.${index}.func_element`
  });

  // TODO data.module_enb
  const handleValueChange = (value: string) => {
    return;
  };

  const handleEnabled = () => {
    setIsEnabled((prev) => !prev);
    if (isEnabled) {
      for (let i = 0; i < fields.length; i++) {
        setValue(`func_auth.${index}.func_element.${i}.element_default`, "3");
      }
    }
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const isAuthFuncDisabled = (value: I_AuthFuncElement[]) => {
    if (!isEdit) return;
    return value.every((elem) => elem.element_default === "3");
  };

  const isAuthFuncElemDisabled = (value: string) => {
    return value === "3";
  };

  const currentFunElement = useWatch({
    control,
    name: `func_auth.${index}.func_element`
  });

  React.useEffect(() => {
    const result = isAuthFuncDisabled(currentFunElement);
    if (result) setIsChecked(false);
  }, [currentFunElement]);

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
          onChange={handleEnabled}
          checked={
            isEnabled &&
            !isAuthFuncDisabled(getValues(`func_auth.${index}.func_element`))
          }
          disabled={!isEdit || isAuthFuncDisabled(data.func_element)}
        />
      </div>
      <div
        className={`authFunc__contents ${isOpen ? "" : "hide"} ${
          isEnabled ? "" : "disabled"
        }`}
      >
        {isEdit &&
          fields.map((field: any, i) => {
            return (
              <div
                className={`authFunc__element authFunc__item ${
                  isAuthFuncElemDisabled(field.element_default)
                    ? "disabled"
                    : ""
                }`}
                key={`funcElem-${i}`}
              >
                <div className="label">{field.element_name}</div>
                <div
                  className={`value ${
                    isAuthFuncElemDisabled(field.element_default) ? "hide" : ""
                  }`}
                >
                  <Radio
                    key={`func_auth.${index}.func_element.${i}.element_default`}
                    control={control}
                    name={`func_auth.${index}.func_element.${i}.element_default`}
                    isDisabled={
                      !isEdit || isAuthFuncElemDisabled(field.element_default)
                    }
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
  getValues: UseFormGetValues<any>;
}

// ===== VARIABLES NOT IN RENDERS ===== //
const authFuncViewValue = new Map([
  ["1", "顯示並可用"],
  ["2", "僅供檢視"],
  ["3", "不顯示"]
]);
