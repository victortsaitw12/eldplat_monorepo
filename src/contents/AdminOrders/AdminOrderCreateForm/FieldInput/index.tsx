import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
import { CreatePayload } from "../index";

export interface FiledInputProps {
  style?: React.CSSProperties;
  horizonLabel?: boolean;
  controlProps: UseControllerProps<CreatePayload>;
  label: string | React.ReactNode;
  hint?: string;
}

const FiledInput = ({ style, horizonLabel = false, label, controlProps, hint }: FiledInputProps) => {
  const {
    field,
    fieldState: { error }
  } = useController(controlProps);
  return (
    <ItemSTY style={style} horizonLabel={horizonLabel}>
      {label && label !== "" && <div className="field-title">
        <span className="requier-icon">*</span>
        <span>{label}</span>
        {!!hint && <HelpIcon />}
      </div>}
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