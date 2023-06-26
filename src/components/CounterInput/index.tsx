import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";
import { TextInput, MinusIcon, PlusIcon } from "evergreen-ui";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues
} from "react-hook-form";
interface I_Props {
  label: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  inputName: string;
}

const CounterInput = ({
  label = "成人",
  inputName,
  register,
  getValues,
  setValue
}: I_Props) => {
  if (!getValues(inputName)) {
    setValue(`${inputName}`, 0);
  }
  const click_add = () => {
    setValue(`${inputName}`, parseInt(getValues(inputName), 10) + 1);
  };
  const click_minus = () => {
    if (parseInt(getValues(inputName), 10) - 1 <= 0) {
      setValue(`${inputName}`, 0);
    } else {
      setValue(`${inputName}`, parseInt(getValues(inputName), 10) - 1);
    }
  };

  return (
    <BodySTY className="counter_input">
      {label && label !== "" && (
        <div className="counter_input_label">{label}</div>
      )}
      <div className="counter_input_content">
        <MinusIcon onClick={click_minus} />
        <TextInput type="number" {...register(`${inputName}`)} />
        <PlusIcon onClick={click_add} />
      </div>
    </BodySTY>
  );
};
export default CounterInput;
