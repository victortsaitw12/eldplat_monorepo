import { InputHTMLAttributes } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { StyledCheckBoxContainer } from "./style";
interface CheckBoxProps extends InputHTMLAttributes<HTMLSelectElement> {
  checkBoxState?: boolean;
  onFormChange: (value: boolean) => void;
}
const CheckBox = ({ checkBoxState = false, onFormChange }: CheckBoxProps) => {
  return (
    <StyledCheckBoxContainer>
      <input
        type="checkbox"
        checked={checkBoxState}
        onChange={(e) => {
          if (e.target.checked) {
            onFormChange(true);
          } else {
            onFormChange(false);
          }
        }}
      />
      <label></label>
    </StyledCheckBoxContainer>
  );
};

function ControlledCheckBox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  control,
  description,
  errorMessage,
  hint
}: {
  name: TName;
  control?: Control<TFieldValues>;
  description?: string;
  errorMessage?: string;
  hint?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <CheckBox checkBoxState={value} onFormChange={onChange} />
      )}
    />
  );
}

export default ControlledCheckBox;
