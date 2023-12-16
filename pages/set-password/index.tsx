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
  return (
    <BodySTY>
      <div className="wrapper">
        <LoginHeader title="重設密碼" />
        <SetPasswordForm />
      </div>
    </BodySTY>
  );
};

LoginPage.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default LoginPage;
