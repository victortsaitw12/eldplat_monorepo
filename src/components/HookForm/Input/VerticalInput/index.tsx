import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { HelpIcon } from "evergreen-ui";
import { StyledInput, VerticalLabelSTY } from "../style";
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
      <VerticalLabelSTY>
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
          <StyledInput ref={ref} {...rest}></StyledInput>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </VerticalLabelSTY>
    );
  })
);

export default TextInput;
