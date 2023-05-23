import React, { useState, useEffect } from "react";
import { BodySTY } from "./style";
import {
  SwitchableDetails,
  SwitchableLifeCycle,
  SwitchableMaintenance,
  SwitchableSpecifications,
  SwitchableFinancial
} from "./SubForm";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
  Control
} from "react-hook-form";
import { BusDataTypes } from "./busDefaultData";
//
interface Props {
  submitForm: (data: any) => void;
  onCancel: () => void;
  formType: string;
  control: Control<BusDataTypes, any>;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  handleSubmit: UseFormHandleSubmit<BusDataTypes>;
  isDisabled?: boolean;
}
//
function BusEditForm({
  submitForm,
  onCancel,
  formType,
  register,
  errors,
  handleSubmit,
  control,
  isDisabled = false
}: Props) {
  const [visibleForm, setVisibleForm] = useState("");
  const submitFormHandler = (data: any) => {
    console.log("Control form data: ", data);
    submitForm(data);
  };
  //
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);
  //
  return (
    <BodySTY>
      <fieldset style={{ border: "none" }} disabled={isDisabled}>
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <SwitchableDetails
            hide={visibleForm !== "Detail"}
            register={register}
            errors={errors}
            control={control}
            isDisabled={isDisabled}
          />
          <SwitchableMaintenance
            hide={visibleForm !== "Maintenance"}
            register={register}
            errors={errors}
            control={control}
            isDisabled={isDisabled}
          />
          <SwitchableLifeCycle
            hide={visibleForm !== "Lifecycle"}
            register={register}
            errors={errors}
            control={control}
            isDisabled={isDisabled}
          />
          <SwitchableFinancial
            hide={visibleForm !== "Financial"}
            register={register}
            errors={errors}
            control={control}
            isDisabled={isDisabled}
          />
          <SwitchableSpecifications
            hide={visibleForm !== "Specifications"}
            register={register}
            errors={errors}
            control={control}
            isDisabled={isDisabled}
          />
        </form>
      </fieldset>
    </BodySTY>
  );
}

export default BusEditForm;
