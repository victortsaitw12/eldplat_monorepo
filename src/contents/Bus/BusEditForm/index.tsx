import React, { useState, useEffect } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";
import { BodySTY } from "./style";
import {
  Details,
  Financial,
  Lifecycle,
  Maintenance,
  Settings,
  Specifications
} from "./SubForm";
import { isAllRequiredFieldFilled } from "../valueToLabelMapping";
//
interface Props {
  submitForm: (data: any) => void;
  onCancel: () => void;
  formType: string;
}
//
function BusEditForm({ submitForm, onCancel, formType }: Props) {
  const [visibleForm, setVisibleForm] = useState("");
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("into submitFormHandler");
    const formData = new FormData(e.target as HTMLFormElement);
    const submitData: { [key: string]: any } = {};
    for (const [key, value] of formData) {
      submitData[key] = value;
    }
    const [isAllFilled, inValidFields] = isAllRequiredFieldFilled(submitData);
    console.log("isAllFilled", isAllFilled);
    if (!isAllFilled) {
      alert("Please fill all required fields");
      return;
    }
    submitForm(submitData);
  };
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);
  console.log("visibleForm", visibleForm);
  return (
    <BodySTY>
      <form onSubmit={submitFormHandler}>
        <Details hide={visibleForm !== "Detail"} />
        <Maintenance hide={visibleForm !== "Maintenance"} />
        <Lifecycle hide={visibleForm !== "Lifecycle"} />
        <Financial hide={visibleForm !== "Financial"} />
        <Specifications hide={visibleForm !== "Specifications"} />
        <Settings hide={visibleForm !== "Settings"} />
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
    </BodySTY>
  );
}

export default BusEditForm;
