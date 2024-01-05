import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
import { CreateCustomerPayload } from "../index";

export interface FiledInputProps {
  horizonLabel?: boolean;
  controlProps: UseControllerProps<CreateCustomerPayload>;
  required?: boolean;
  label: string | React.ReactNode;
  disabled?: boolean;
  hint?: string;
}

const FiledInput = ({
  horizonLabel = false,
  label,
  controlProps,
  hint,
  required,
  disabled
}: FiledInputProps) => {
  const {
    field,
    fieldState: { error }
  } = useController(controlProps);
  return (
    <ItemSTY horizonLabel={horizonLabel}>
      {label && label !== "" && (
        <div className="field-title">
          {required && <span className="requier-icon">*</span>}
          <span>{label}</span>
          {!!hint && <HelpIcon />}
        </div>
      )}
      <input type="string" disabled={disabled} {...field} />
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
