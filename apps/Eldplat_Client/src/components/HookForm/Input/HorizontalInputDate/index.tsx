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
  isRequire?: boolean;
}
const TextInput = memo(
  forwardRef<HTMLInputElement, InputProps>(function TextInput(
    { label, description, errorMessage, hint, isRequire, ...rest },
    ref
  ) {
    return (
      <HorizatalLabelSTY>
        <div className="title">
          <div className="title-content">
            {!!isRequire && <span className="required">*</span>}
            {label}
          </div>
          {!!hint && (
            <Tooltip text={hint}>
              <HelpIcon />
            </Tooltip>
          )}
        </div>
        {/* {description && <span className="description">{description}</span>} */}
        <div>
          <StyledInput type="date" ref={ref} {...rest}></StyledInput>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </HorizatalLabelSTY>
    );
  })
);

export default TextInput;
