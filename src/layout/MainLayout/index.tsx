/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
//
import Header from "./Header";
import SideBar from "./SideBar";
import { BodySTY, ContainerSTY } from "./style";
import { fetchMenuData, MenuDataType } from "../../mock-data/side-bar/data";
import { getSideMenuBackend } from "@services/siderbar/getSideMenuBackend";
import { getSideMenuPersonal } from "@services/siderbar/getSideMenuPersonal";
//
const MainLayout: FC<{
  children: ReactNode;
  layoutProps: any;
}> = ({ children, layoutProps }) => {
  const menuData: MenuDataType = fetchMenuData();
  const [loading, setLoading] = React.useState(false);
  const [menu, setMenu] = React.useState(null);

  const fetch_menus = async () => {
    setLoading(true);
    try {
      const res_menu = await getSideMenuBackend();
      const res_personalmenu = await getSideMenuPersonal();
      console.log("📃📃📃", res_menu);
      console.log("😊😊😊", res_personalmenu);
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetch_menus();
  }, []);

  console.log("main layout sidebar data");
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
