import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { StyledInput, VerticalLabelSTY } from "../style";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
}
const TextInput = memo(
  forwardRef<HTMLInputElement, InputProps>(function TextInput(
    { label, description, errorMessage, hint, ...rest },
    ref
  ) {
    return (
      <VerticalLabelSTY>
        <span className="title">{label}</span>
        {description && <span className="description">{description}</span>}
        <StyledInput ref={ref} {...rest}></StyledInput>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {hint && <span className="hint">{hint}</span>}
      </VerticalLabelSTY>
    );
  })
);

export default TextInput;
