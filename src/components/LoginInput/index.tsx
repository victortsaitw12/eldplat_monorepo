import React from "react";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";

interface I_LoginInput {
  type: string; // input的格式
  inputName: string;
  titleId?: string;
  icon?: string; // google icons
  className?: string;
  onChangeCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: any) => void;
}

const LoginInput: React.FC<I_LoginInput> = (props) => {
  const { type, inputName, titleId, icon, className, onChangeCallback } = props;

  return (
    <BodySTY className={className}>
      <div className="input-box">
        <span className="material-icons">{icon}</span>
        <label htmlFor={inputName}>
          {titleId && <FormattedMessage id={titleId} />}
        </label>
        <input
          type={type}
          id={inputName}
          onChange={(e) => {
            onChangeCallback && onChangeCallback(e);
          }}
        />
      </div>
    </BodySTY>
  );
};

export default LoginInput;
