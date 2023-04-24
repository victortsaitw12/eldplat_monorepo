import React from "react";
import Image from "next/image";
import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
// import translate from "../../../i18n/translate";

function LoginHeader() {
  return (
    <BodySTY>
      <Head>
        <title>平台登入</title>
        <meta property="og:title" content="平台登入" />
      </Head>
      <div className="lion-logo">
        <Image
          src="/images/lion-logo.png"
          width={180}
          height={180}
          alt="lionLogo"
        />
      </div>
      <p>
        <FormattedMessage id="login_welcome" />
      </p>
      <p>
        <FormattedMessage id="login_guest" />
      </p>
    </BodySTY>
  );
}

export default LoginHeader;
