import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { StyledLabel } from "./style";
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  description?: string;
  errorMessage?: string;
  hint?: string;
}

const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(function TextInput(
    { label, options, description, errorMessage, hint, ...rest },
    ref
  ) {
    return (
      <StyledLabel>
        <span className="title">{label}</span>
        {description && <span className="description">{description}</span>}
        <select className="select" ref={ref} {...rest}>
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {errorMessage && <span className="error">{errorMessage}</span>}
        {hint && <span className="hint">{hint}</span>}
      </StyledLabel>
    );
  })
);

export default Select;
