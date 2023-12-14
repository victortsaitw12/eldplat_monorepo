import React, { useState } from "react";
import { TextInputField, EyeOffIcon, EyeOnIcon, Icon } from "evergreen-ui";
import { DivSTY } from "./style";

interface I_Props {
  label?: string;
  placeholder?: string;
  errorMsg?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
}

function PasswordInputField({
  label,
  placeholder,
  errorMsg,
  onClick,
  onChange,
  ...props
}: I_Props) {
  const [inputData, setInputData] = React.useState("");
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  // --- functions --- //

  const handleTogglePasswordHide = () => {
    setIsPasswordHide((prev) => !prev);
  };

  const handleChange = (e: any) => {
    onChange && onChange(e.target.value);
    setInputData(e.target.value);
  };

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <DivSTY hasLabel={!!label}>
      <Icon
        className="icon"
        icon={isPasswordHide ? EyeOffIcon : EyeOnIcon}
        size={16}
        onClick={handleTogglePasswordHide}
      />
      <TextInputField
        type={`${isPasswordHide ? "password" : "text"}`}
        placeholder={`${placeholder ? placeholder : "請輸入您的密碼"}`}
        label={label ? label : undefined}
        value={inputData}
        isInvalid={!!errorMsg || undefined}
        validationMessage={!!errorMsg ? errorMsg : undefined}
        onChange={handleChange}
        onClick={handleClick}
        {...props}
      />
    </DivSTY>
  );
}

export default PasswordInputField;
