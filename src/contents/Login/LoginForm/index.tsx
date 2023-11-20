import React, { useState } from "react";
import signIn from "next-auth";
import LoginInput from "../../../components/LoginInput";
import Button from "@components/Button/Primary/Label";
import { BodySTY } from "./style";
//
interface PropsType {
  login: (email: string, password: string) => void;
}

function Form(props: PropsType) {
  const [company, setCompany] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await signIn("credentials", { username: "jsmith", password: "1234" })
    await signIn("credentials", {
      companyNo: "lionTravel",
      username: "atrain",
      password: "password.current",
      redirect: true,
      callbackUrl: props.callbackUrl ?? "/test/next-auth"
    });
  };

  // 隨時抓取輸入的帳號和密碼並存入狀態

  return (
    <BodySTY>
      <LoginInput
        type="text"
        inputName="company"
        icon=""
        titleId="company"
        className="account-input"
        onChangeCallback={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <LoginInput
        type="text"
        inputName="username"
        icon=""
        titleId="username"
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
          titleId="password"
          icon=""
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
