import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { StyledInput } from "../style";
type InputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInput = memo(
  forwardRef<HTMLInputElement, InputProps>(function TextInput(
    { ...rest },
    ref
  ) {
    return <StyledInput ref={ref} {...rest} />;
  })
);

export default TextInput;
