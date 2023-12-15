import React from "react";
import Head from "next/head";
import { BodySTY } from "./style";

function LoginHeader({ title }: { title?: string }) {
  return (
    <BodySTY>
      <Head>
        <title>平台登入</title>
        <meta property="og:title" content="平台登入" />
      </Head>
      <p>{title ? title : "登入"}</p>
    </BodySTY>
  );
}

export default LoginHeader;
