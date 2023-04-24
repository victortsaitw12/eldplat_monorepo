/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
//
import Header from "../Header";
import SideBar from "../SideBar";
import { BodySTY, ContainerSTY } from "./style";
import { fetchMenuData, MenuDataType } from "../../mock-data/side-bar/data";
//
const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const menuData: MenuDataType = fetchMenuData();
  console.log("render MainLayout");
  return (
    <BodySTY>
      <Head>
        <title>管理者頁</title>
        <meta property="og:title" content="管理者頁" />
      </Head>
      <SideBar menuData={menuData} />
      <ContainerSTY>
        <Header />
        <div className="content">{children}</div>
      </ContainerSTY>
    </BodySTY>
  );
};

export const getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;
