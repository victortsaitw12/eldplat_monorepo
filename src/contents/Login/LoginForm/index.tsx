import React from "react";
import { signIn } from "next-auth/react";
import { TextInputField } from "evergreen-ui";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import PasswordInputField from "../PasswordInputField";
import { Label as Button } from "@components/Button/Primary";
import Checkbox from "@components/Checkbox";
//
interface PropsType {
  login: (email: string, password: string) => void;
}

function Form(props: PropsType) {
  const router = useRouter();
  const [inputData, setInputData] = React.useState({
    email: "",
    password: ""
  });

  const formType = router.pathname.split("/")[1];
  //forgot-password, first-login, login

  // --- functions --- //
  function checkEmail(value: string) {
    if (value.length <= 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
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
          validationMessage={
            !checkEmail(inputData.email) ? "格式錯誤" : undefined
          }
          onChange={(e: any) =>
            setInputData({ ...inputData, email: e.target.value })
          }
        />
        <PasswordInputField
          onChange={(v: string) => setInputData({ ...inputData, password: v })}
        />
      </div>
      <div className="asstRow">
        <div className="asstRow__storeAcct">
          <Checkbox />
          記住帳號
        </div>
        <div className="asstRow__forgetPw">
          <a>忘記密碼</a>
        </div>
      </div>
      <div>
        <div>測試帳號: user@gmail.com</div>
        <div>測試密碼: 12345</div>
      </div>
      <Button text={"登入"} onClick={handleLogin} />
    </BodySTY>
  );
}

export default Form;
