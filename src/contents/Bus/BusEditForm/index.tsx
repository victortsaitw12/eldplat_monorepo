import React, { useState, useEffect } from "react";
import { StepControlSTY } from "@components/FormCard/style";
import { BodySTY } from "./style";
import {
  Details,
  Financial,
  Lifecycle,
  Maintenance,
  Settings,
  Specifications,
  SwitchableDetails
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
  console.log("errors: ", errors);
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
          <Maintenance
            hide={visibleForm !== "Maintenance"}
            register={register}
            errors={errors}
          />
          <Lifecycle
            hide={visibleForm !== "Lifecycle"}
            register={register}
            errors={errors}
          />
          <Financial
            hide={visibleForm !== "Financial"}
            register={register}
            errors={errors}
          />
          <Specifications
            hide={visibleForm !== "Specifications"}
            register={register}
            errors={errors}
          />
          <Settings
            hide={visibleForm !== "Settings"}
            register={register}
            errors={errors}
          />
          <StepControlSTY>
            <button type="button" onClick={onCancel}>
              取消
            </button>
            <div className="next-step">
              <button className="fill" type="submit">
                儲存車輛
              </button>
            </div>
          </StepControlSTY>
        </form>
      </fieldset>
    </BodySTY>
  );
}

export default BusEditForm;
