/* eslint-disable react/display-name */
import Head from "next/head";
import React, { ReactNode } from "react";
//
import Header from "./Header";
import { BodySTY, ContainerSTY } from "./style";

interface ClientLayoutProps {
  children: ReactNode;
  layoutProps: {
    title?: string;
    // 客製包車 機場接送 訂單管理
    avatar?: string;
    lang?: string;
    langs?: string[];
    onChangeLang?: () => void;
  };
}

const ClientLayout = ({ children, layoutProps }: ClientLayoutProps) => {
  const [theme, setTheme] = React.useState(false);
  return (
    <BodySTY>
      <Head>
        <title>2c前台</title>
        <meta property="og:title" content="2c前台" />
      </Head>
      <ContainerSTY>
        <Header layoutProps={layoutProps} theme={theme} setTheme={setTheme} />
        <div className="content">{children}</div>
      </ContainerSTY>
    </BodySTY>
  );
};

export const getLayout = (page: ReactNode, layoutProps: any) => (
  <ClientLayout layoutProps={layoutProps}>{page}</ClientLayout>
);
