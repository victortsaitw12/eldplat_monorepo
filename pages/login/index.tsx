import React, { useState } from "react";
//
import { useRouter } from "next/router";
import LoginForm from "../../src/contents/Login/LoginForm";
import LoginHeader from "../../src/contents/Login/LoginHeader";
import LoginError from "../../src/contents/Login/LoginError";
import { BodySTY } from "./style";
import LanguageSelect from "../../src/components/LanguageSelect";
import { login } from "@services/auth/login";

interface LoginProps {
  locale?: string;
  setLocale?: (locale: string) => void;
  // setLocale?: () => void;
}

const LoginPage = ({ locale = "zh", setLocale }: LoginProps) => {
  // const LoginPage = ({ setLocale = () => {} }: LoginProps) => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [errorVisible, setErrorVisible] = useState(false);
  const router = useRouter();
  const loginHandler = async (email: string, password: string) => {
    setErrorVisible(false);
    try {
      const { accessToken } = await login(email, password);
      if (accessToken.trim() === "") {
        throw new Error("查無使用者!");
      } else {
        console.log("Login success!");
      }
    } catch (err: any) {
      setErrorVisible(true);
      setLoginError(err.message);
      console.log(err.message);
    }
  };

  return (
    <BodySTY>
      <LoginHeader />
      <LanguageSelect setLocale={setLocale} />
      <LoginError message={loginError} visible={errorVisible} />
      <LoginForm login={loginHandler} />
    </BodySTY>
  );
};

export default LoginPage;
