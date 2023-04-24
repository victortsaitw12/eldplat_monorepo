import React from "react";
import { FormCardSTY } from "./style";

export interface I_FormCardProps {
  formTitle?: string;
  children?: React.ReactNode;
}

function FormCard({ formTitle, children }: I_FormCardProps) {
  // TODO: 做 forwardRef 給外部取用
  return (
    <FormCardSTY>
      <h2>{formTitle}</h2>
      <div className="formCard_wrapper">{children}</div>
    </FormCardSTY>
  );
}

export default FormCard;
