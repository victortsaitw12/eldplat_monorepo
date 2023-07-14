import { TextInput, TextInputProps } from "evergreen-ui";
import { forwardRef } from "react";
import { BodySTY } from "./style";
const CustomTextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function CustomTextInput(props, ref) {
    return (
      <BodySTY>
        <TextInput {...props} ref={ref} />
      </BodySTY>
    );
  }
);
export default CustomTextInput;
