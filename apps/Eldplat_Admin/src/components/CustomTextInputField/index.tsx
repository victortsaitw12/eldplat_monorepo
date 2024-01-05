import { TextInputField, TextInputFieldProps } from "evergreen-ui";
import { BodySTY } from "./style";

function CustomTextInputField(props: TextInputFieldProps) {
  return (
    <BodySTY>
      <TextInputField {...props} />
    </BodySTY>
  );
}
export default CustomTextInputField;
