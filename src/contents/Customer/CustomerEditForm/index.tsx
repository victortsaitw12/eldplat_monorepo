import React, { useState, useEffect } from "react";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
  Control
} from "react-hook-form";
import {
  emailValidation,
  textValidation,
  phoneValidation
} from "@utils/inputValidation";
import { CustomerDataTypes } from "./customerDefaultData";
import { BodySTY } from "./style";
import CustomerData from "./SubForm/CustomerData";
//
interface Props {
  submitForm: (data: any) => void;
  onCancel: () => void;
  formType: string;
  control: Control<CustomerDataTypes, any>;
  register: UseFormRegister<CustomerDataTypes>;
  errors: FieldErrors<CustomerDataTypes>;
  handleSubmit: UseFormHandleSubmit<CustomerDataTypes>;
  isDisabled?: boolean;
}
//
function CustomerEditForm({
  submitForm,
  onCancel,
  formType,
  register,
  errors,
  handleSubmit,
  control,
  isDisabled = false
}: Props) {
  const submitFormHandler = (data: any) => {
    console.log("Control form data: ", data);
    submitForm(data);
  };
  return (
    <BodySTY>
      <fieldset style={{ border: "none" }} disabled={isDisabled}>
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <CustomerData register={register} control={control} errors={errors} />
        </form>
      </fieldset>
    </BodySTY>
  );
}

export default CustomerEditForm;
