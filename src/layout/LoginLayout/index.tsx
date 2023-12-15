/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
//
import Header from "./Header";
import { BodySTY, ContainerSTY } from "./style";
//

//
const MainLayout: FC<{
  children: ReactNode;
  layoutProps: any;
}> = ({ children, layoutProps }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <BodySTY>
      <Head>
        <title>登入頁</title>
        <meta property="og:title" content="登入頁" />
      </Head>
      <ContainerSTY>
        <Header layoutProps={{ ...layoutProps }} />
        <div className="content">{children}</div>
      </ContainerSTY>
    </BodySTY>
  );
};

export const getLayout = (page: ReactNode, layoutProps: any) => (
  <MainLayout layoutProps={layoutProps}>{page}</MainLayout>
);
