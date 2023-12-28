import React from "react";
import { signIn } from "next-auth/react";
import { TextInputField, toaster } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import PasswordInputField from "../PasswordInputField";
import { Label as Button } from "@components/Button/Primary";

function SetPasswordForm() {
  const router = useRouter();
  const [inputData, setInputData] = React.useState({
    email: "user@gmail.com", // DUMMY for demo purpose
    password: ""
  });
  const [secondPassword, setSecondPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [errorMsgSecond, setErrorMsgSecond] = React.useState("");

  // --- functions --- //
  const checkPassword = (password: string) => {
    //至少4位英數字不含特殊符號
    if (password.length <= 0) return true;
    if (password === "12345") return false;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (e: any) => {
    const isPasswordValid = checkPassword(inputData.password);
    if (!isPasswordValid) {
      setErrorMsg("至少4碼數字、不可與目前密碼相同"); // DUMMY for demo purpose
      return;
    }
    const isPasswordMatch = inputData.password === secondPassword;
    if (!isPasswordMatch) {
      setErrorMsgSecond("密碼不一致");
      return;
    }
    e.preventDefault();
    const result = await signIn("credentials", {
      ...inputData,
      redirect: false
    });

    if (result?.error) {
      console.log(result.error);
    } else {
      toaster.success("修改密碼成功，系統將自動跳轉至首頁");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  return (
    <BodySTY>
      <div className="inpitFields">
        <PasswordInputField
          label="新密碼"
          errorMsg={errorMsg || undefined}
          onClick={() => setErrorMsg("")}
          onChange={(v: string) => setInputData({ ...inputData, password: v })}
        />
        <PasswordInputField
          label="再次輸入新密碼"
          placeholder="請再次輸入新密碼"
          errorMsg={errorMsgSecond || undefined}
          onClick={() => setErrorMsgSecond("")}
          onChange={(v: string) => setSecondPassword(v)}
        />
      </div>

      <Button text={"確定"} onClick={handleLogin} />
    </BodySTY>
  );
}

export default SetPasswordForm;
