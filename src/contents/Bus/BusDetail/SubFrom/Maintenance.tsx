import React, { useState } from "react";
import { SelectField, Pane } from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupColumn, {
  RadioColumnField
} from "@components/RadioGroupColumn";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../busDefaultData";
import FlexWrapper from "@layout/FlexWrapper";
interface Props {
  selected?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
}
function Maintenance({
  selected,
  register,
  errors,
  getValues,
  control
}: Props) {
  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <div></div>
    </FlexWrapper>
  );
}

export default Maintenance;
