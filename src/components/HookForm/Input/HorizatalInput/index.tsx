import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { HelpIcon } from "evergreen-ui";
import { StyledInput, HorizatalLabelSTY } from "../style";
import Tooltip from "@components/Tooltip";
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
        <div className="title">
          <span>{label}</span>
          {!!hint && (
            <Tooltip text={hint}>
              <HelpIcon />
            </Tooltip>
          )}
        </div>
        {/* {description && <span className="description">{description}</span>} */}
        <div>
          <StyledInput ref={ref} {...rest}></StyledInput>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </HorizatalLabelSTY>
    );
  })
);

export default TextInput;
