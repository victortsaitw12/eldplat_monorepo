import React, { useState } from "react";
import { TextInputField, EyeOffIcon, EyeOnIcon, Icon } from "evergreen-ui";
import { DivSTY } from "./style";

interface I_Props {
  onChange: (e: any) => void;
}

function PasswordInputField({ onChange }: I_Props) {
  const [inputData, setInputData] = React.useState("");
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  // --- functions --- //
  function checkPassword(password: string) {
    if (password.length <= 0) return true;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    return passwordRegex.test(password);
  }

  const handleTogglePasswordHide = () => {
    setIsPasswordHide((prev) => !prev);
  };

  const handleChange = (e: any) => {
    onChange && onChange(e.target.value);
    setInputData(e.target.value);
  };

  return (
    <DivSTY>
      <Icon
        className="icon"
        icon={isPasswordHide ? EyeOffIcon : EyeOnIcon}
        size={16}
        onClick={handleTogglePasswordHide}
      />
      <TextInputField
        type={`${isPasswordHide ? "password" : "text"}`}
        placeholder="請輸入您的密碼"
        label="密碼"
        value={inputData}
        isInvalid={!checkPassword(inputData)}
        validationMessage={
          !checkPassword(inputData) ? "至少4位英數字不含特殊符號" : undefined
        }
        onChange={handleChange}
      />
    </DivSTY>
  );
}

export default PasswordInputField;
