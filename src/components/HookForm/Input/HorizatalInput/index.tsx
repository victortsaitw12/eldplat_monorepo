import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { StyledInput, HorizatalLabelSTY } from "../style";
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
      <HorizatalLabelSTY>
        <span className="title">{label}</span>
        {/* {description && <span className="description">{description}</span>} */}
        <div>
          <StyledInput ref={ref} {...rest}></StyledInput>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
        {hint && <span className="hint">{hint}</span>}
      </HorizatalLabelSTY>
    );
  })
);

export default TextInput;
