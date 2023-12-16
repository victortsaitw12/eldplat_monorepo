import React, { useState } from "react";
//
import LoginForm from "../../src/contents/Login/LoginForm";
import SetPasswordForm from "@contents/Login/SetPasswordForm";
import LoginHeader from "../../src/contents/Login/LoginHeader";
import LoginError from "../../src/contents/Login/LoginError";
import { BodySTY } from "./style";
import { login } from "@services/auth/login";
import { getLayout } from "@layout/LoginLayout";

interface LoginProps {
  locale?: string;
  setLocale?: (locale: string) => void;
}

const LoginPage = ({ locale = "zh", setLocale }: LoginProps) => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const [errorVisible, setErrorVisible] = useState(false);
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
      <div className="wrapper">
        <LoginHeader title="重設密碼" />
        <LoginError message={loginError} visible={errorVisible} />
        <SetPasswordForm />
      </div>
    </BodySTY>
  );
};

LoginPage.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default LoginPage;
