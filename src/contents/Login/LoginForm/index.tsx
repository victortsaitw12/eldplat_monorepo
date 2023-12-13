import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { TextInput, TextInputField, EyeOffIcon, EyeOnIcon } from "evergreen-ui";
import { useRouter } from "next/router";

import LoginInput from "../../../components/LoginInput";
import Button from "@components/Button/Primary/Label";
import { BodySTY } from "./style";
import Checkbox from "@components/Checkbox";
//
interface PropsType {
  login: (email: string, password: string) => void;
}

function Form(props: PropsType) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputData, setInputData] = React.useState({
    email: "",
    password: ""
  });
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  // --- functions --- //
  function checkEmail(value: string) {
    if (value.length <= 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function checkPassword(password: string) {
    if (password.length <= 0) return true;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;
    return passwordRegex.test(password);
  }

  const handleTogglePasswordHide = () => {
    setIsPasswordHide((prev) => !prev);
  };

  // 隨時抓取輸入的帳號和密碼並存入狀態
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
      <TextInputField
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
      <div style={{ position: "relative" }}>
        <div>
          {isPasswordHide ? (
            <EyeOffIcon
              style={{
                position: "absolute",
                transform: "translateY(36px)",
                right: "8px",
                zIndex: "999",
                cursor: "pointer"
              }}
              onClick={handleTogglePasswordHide}
            />
          ) : (
            <EyeOnIcon
              style={{
                position: "absolute",
                transform: "translateY(36px)",
                right: "8px",
                zIndex: "999",
                cursor: "pointer"
              }}
              onClick={handleTogglePasswordHide}
            />
          )}
          <TextInputField
            type={`${isPasswordHide ? "password" : "text"}`}
            placeholder="請輸入您的密碼"
            label="密碼"
            value={inputData.password}
            isInvalid={!checkPassword(inputData.password)}
            validationMessage={
              !checkPassword(inputData.password)
                ? "至少4位英數字不含特殊符號"
                : undefined
            }
            onChange={(e: any) =>
              setInputData({ ...inputData, password: e.target.value })
            }
          />
        </div>
      </div>
      <div className="asst">
        <div className="asst__storePW">
          <Checkbox label="記住帳號" isLabelAfter />
        </div>
        <div className="asst__forgetPW">
          <a className="material-icons">忘記密碼</a>
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
