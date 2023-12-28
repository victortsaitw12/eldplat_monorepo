import React from "react";
//
import LoginForm from "../../src/contents/Login/LoginForm";
import LoginHeader from "../../src/contents/Login/LoginHeader";
import { BodySTY } from "./style";
import { getLayout } from "@layout/LoginLayout";

interface LoginProps {
  locale?: string;
  setLocale?: (locale: string) => void;
}

const LoginPage = ({ locale = "zh", setLocale }: LoginProps) => {
  return (
    <BodySTY>
      <div className="wrapper">
        <LoginHeader />
        <LoginForm />
      </div>
    </BodySTY>
  );
};

LoginPage.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default LoginPage;
