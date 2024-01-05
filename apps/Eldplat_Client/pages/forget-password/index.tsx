import React, { useState } from "react";
//
import LoginForm from "../../src/contents/Login/LoginForm";
import ForgetPasswordForm from "@contents/Login/ForgetPasswordForm";
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
  return (
    <BodySTY>
      <div className="wrapper">
        <LoginHeader title="忘記密碼" />
        <ForgetPasswordForm />
      </div>
    </BodySTY>
  );
};

LoginPage.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default LoginPage;
