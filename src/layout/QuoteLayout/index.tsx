/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
//
import Header from "./Header";
import { BodySTY, ContainerSTY } from "./style";
import { fetchMenuData, MenuDataType } from "../../mock-data/side-bar/data";

interface QuoteLayoutProps {
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

const QuoteLayout: FC<QuoteLayoutProps> = ({ children, layoutProps }) => {
  const [theme, setTheme] = React.useState(false);
  const menuData: MenuDataType = fetchMenuData();
  console.log("layoutProps:", layoutProps);
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

export const getLayout = (page: ReactNode, layoutProps: { title: string }) => (
  <QuoteLayout layoutProps={layoutProps}>{page}</QuoteLayout>
);
