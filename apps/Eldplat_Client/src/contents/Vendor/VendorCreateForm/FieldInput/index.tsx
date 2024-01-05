import { HelpIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
// import { CreateVendorPayload } from "../index";

export interface FiledInputProps {
  disabled?: boolean;
  req?: boolean;
  style?: React.CSSProperties;
  horizonLabel?: boolean;
  controlProps: UseControllerProps<any>;
  label: string | React.ReactNode;
  hint?: string;
}

const FiledInput = ({
  disabled = false,
  req = true,
  style,
  horizonLabel = false,
  label,
  controlProps,
  hint
}: FiledInputProps) => {
  const {
    field,
    fieldState: { error }
  } = useController(controlProps);
  return (
    <ItemSTY style={style} horizonLabel={horizonLabel}>
      {label && label !== "" && (
        <div className="field-title">
          {req && <span className="requier-icon">*</span>}
          <span>{label}</span>
          {!!hint && <HelpIcon />}
        </div>
      )}
      <input disabled={disabled} {...field} />
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
