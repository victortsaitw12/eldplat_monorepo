import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { ItemSTY } from "./style";
import { useController, UseControllerProps } from "react-hook-form";
import classNames from "classnames";

export interface FiledInputProps {
  className?: string;
  style?: React.CSSProperties;
  horizonLabel?: boolean;
  controlProps: UseControllerProps<any>;
  label: string | React.ReactNode;
  hint?: string;
}

const FiledInput = ({
  className,
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
    <ItemSTY className={className} style={style} horizonLabel={horizonLabel}>
      {label && label !== "" && (
        <div className="field-title">
          <span className="requier-icon">*</span>
          <span>{label}</span>
          {!!hint && <HelpIcon />}
        </div>
      )}
      <input className={`${error ? "error" : ""}`} type="string" {...field} />
      {error && <div className="error-message">{error.message}</div>}
    </ItemSTY>
  );
};
export default FiledInput;
