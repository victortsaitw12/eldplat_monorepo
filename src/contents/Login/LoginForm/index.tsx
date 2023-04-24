import React, { useState } from "react";
import LoginInput from "../../../components/LoginInput";
import Button from "@components/Button/Primary/Label";
import { BodySTY } from "./style";
//
interface PropsType {
  login: (email: string, password: string) => void;
}

function Form(props: PropsType) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 隨時抓取輸入的帳號和密碼並存入狀態

  return (
    <BodySTY>
      <LoginInput
        type="text"
        inputName="account"
        icon="person"
        titleId="login_account"
        className="account-input"
        onChangeCallback={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <div className="all-password">
        <LoginInput
          type="password"
          inputName="password"
          titleId="login_password"
          icon="key"
          onChangeCallback={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <div className="forgot-password">
          <span className="material-icons">help</span>
          <button>Forget Password</button>
        </div>
      </div>
      <Button
        text={"登入"}
        onClick={(e) => {
          e.preventDefault();
          props.login(email, password);
        }}
      />
    </BodySTY>
  );
}

export default Form;
