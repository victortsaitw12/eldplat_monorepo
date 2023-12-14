import React from "react";
import { signIn } from "next-auth/react";
import { TextInputField } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import PasswordInputField from "../PasswordInputField";
import { Label as Button } from "@components/Button/Primary";
import AssistRow from "./AssistRow";
import { emailValidation } from "@utils/inputValidation";
//
function Form() {
  const router = useRouter();
  const [inputData, setInputData] = React.useState({
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  // --- functions --- //
  function checkEmail(value: string) {
    if (value.length <= 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
  const checkPassword = (password: string) => {
    //至少4位英數字不含特殊符號
    if (password.length <= 0) return true;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const checkEmailResult = checkEmail(inputData.email);
    const checkPasswordResult = checkPassword(inputData.password);

    if (!checkEmailResult || !checkPasswordResult) {
      if (!checkPasswordResult) setPasswordError("至少4位英數字不含特殊符號");
      if (!checkEmailResult) setEmailError("格式不符");
      return;
    }

    const result = await signIn("credentials", {
      ...inputData,
      redirect: false
    });

    if (result?.error) {
      console.log(result.error);
    } else {
      console.log("Login success!");
      router.push("/");
    }
  };

  return (
    <BodySTY>
      <div className="inpitFields">
        <TextInputField
          className="emailInput"
          type="email"
          placeholder="example@mail.com"
          label="帳號"
          value={inputData.email}
          isInvalid={!checkEmail(inputData.email)}
          validationMessage={emailError ? "格式不符" : undefined}
          onClick={() => setEmailError("")}
          onChange={(e: any) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <PasswordInputField
          label="密碼"
          errorMsg={passwordError || undefined}
          onClick={() => setPasswordError("")}
          onChange={(v: string) => setInputData({ ...inputData, password: v })}
        />
      </div>
      <AssistRow />
      <div>
        測試帳密:
        <span> user@gmail.com +</span>
        <span> 12345</span>
      </div>
      <Button text={"登入"} onClick={handleLogin} />
    </BodySTY>
  );
}

export default Form;
