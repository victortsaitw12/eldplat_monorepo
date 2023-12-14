import React from "react";
import { TextInputField, toaster } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import { Label as Button } from "@components/Button/Primary";

function ForgetPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  // --- functions --- //
  function checkEmail(value: string) {
    if (value.length <= 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = checkEmail(email);
    if (result) {
      toaster.success("已寄送驗證信至您的信箱，3秒後跳轉至");
      setTimeout(() => {
        router.push("/set-password");
      }, 3000);
      return;
    }
    setErrorMsg("格式錯誤");
  };

  return (
    <BodySTY>
      <div className="inpitFields">
        <TextInputField
          className="emailInput"
          type="email"
          placeholder="example@mail.com"
          label="信箱"
          value={email}
          isInvalid={!checkEmail(email)}
          validationMessage={errorMsg ? "格式不符" : undefined}
          onClick={() => setErrorMsg("")}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div>
        測試帳號:
        <span> user@gmail.com </span>
      </div>
      <Button text="寄送驗證信" onClick={handleSubmit} />
    </BodySTY>
  );
}

export default ForgetPasswordForm;
