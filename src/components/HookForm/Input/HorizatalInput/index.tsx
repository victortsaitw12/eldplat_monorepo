import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { StyledLabel } from "./style";
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
      <StyledLabel>
        <span className="title">{label}</span>
        {/* {description && <span className="description">{description}</span>} */}
        <div>
          <input className="input" ref={ref} {...rest}></input>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
        {hint && <span className="hint">{hint}</span>}
      </StyledLabel>
    );
  })
);

export default TextInput;
