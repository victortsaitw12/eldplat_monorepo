/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode, useEffect } from "react";
//
import Header from "./Header";
import SideBar from "./SideBar";
import { BodySTY, ContainerSTY } from "./style";
import { fetchMenuData, MenuDataType } from "../../mock-data/side-bar/data";
//
const MainLayout: FC<{
  children: ReactNode;
  layoutProps: any;
}> = ({ children, layoutProps }) => {
  const menuData: MenuDataType = fetchMenuData();
  return (
    <BodySTY>
      <Head>
        <title>管理者頁</title>
        <meta property="og:title" content="管理者頁" />
      </Head>
      <SideBar menuData={menuData} />
      <ContainerSTY>
        <Header layoutProps={layoutProps} />
        <div className="content">{children}</div>
      </ContainerSTY>
    </BodySTY>
  );
};

export const getLayout = (page: ReactNode, layoutProps: any) => (
  <MainLayout layoutProps={layoutProps}>{page}</MainLayout>
);
