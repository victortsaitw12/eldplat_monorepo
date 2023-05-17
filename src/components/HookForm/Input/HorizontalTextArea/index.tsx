import React, { forwardRef, memo } from "react";
import type { InputHTMLAttributes } from "react";
import { HelpIcon } from "evergreen-ui";
import { StyledTextArea, HorizatalLabelSTY } from "../style";
import Tooltip from "@components/Tooltip";
interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
  errorMessage?: string;
  hint?: string;
  isRequire?: boolean;
}
const TextInput = memo(
  forwardRef<HTMLTextAreaElement, InputProps>(function TextInput(
    { label, description, errorMessage, hint, isRequire, ...rest },
    ref
  ) {
    return (
      <HorizatalLabelSTY>
        <div className="title">
          {!!isRequire && <span className="required">*</span>}
          <span>{label}</span>
          {!!hint && (
            <Tooltip text={hint}>
              <HelpIcon />
            </Tooltip>
          )}
        </div>
        {/* {description && <span className="description">{description}</span>} */}
        <div>
          <StyledTextArea ref={ref} {...rest}></StyledTextArea>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </HorizatalLabelSTY>
    );
  })
);

export default TextInput;
