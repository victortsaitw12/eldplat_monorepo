import React, { useState } from "react";
import { SelectField, Pane } from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupColumn, {
  RadioColumnField
} from "@components/RadioGroupColumn";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
}
function Maintenance({
  register,
  errors,
  getValues,
  control,
  isEdit
}: Props) {
  return (
    <FlexWrapper
      padding="0"
    >
      <div></div>
    </FlexWrapper>
  );
}

export default Maintenance;
