import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
import { CreateVendorPayload } from "../index";

export interface FiledInputProps {
  horizonLabel?: boolean;
  controlProps: UseControllerProps<CreateVendorPayload>;
  label: string | React.ReactNode;
  hint?: string;
}

const FiledInput = ({ horizonLabel = false, label, controlProps, hint }: FiledInputProps) => {
  const {
    field,
    fieldState: { error }
  } = useController(controlProps);
  return (
    <ItemSTY horizonLabel={horizonLabel}>
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
