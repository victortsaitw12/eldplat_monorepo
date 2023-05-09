import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
import { CreateVendorPayload } from "../index";

interface FiledInputProps {
  controlProps: UseControllerProps<CreateVendorPayload>;
  label: string;
  hint?: string;
}

const FiledInput = ({ label, controlProps, hint }: FiledInputProps) => {
  const {
    field,
    fieldState: { error }
  } = useController(controlProps);
  return (
    <ItemSTY>
      <div className="field-title">
        <span className="requier-icon">*</span>
        <span>{label}</span>
        {!!hint && <HelpIcon />}
      </div>
      <input type="string" {...field} />
      {error && (
        <div className="error-message">
          <ErrorIcon />
          {error.message}
        </div>
      )}
    </ItemSTY>
  );
};
export default FiledInput;
