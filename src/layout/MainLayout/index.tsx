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

  const [menu, setMenu] = React.useState([]);
  const [personalmenu, setPersonalmenu] = React.useState([]);

  const mapping_menus = (list: any, key: string) => {
    return list.map((ele: any) => {
      return {
        name: ele?.[key + "_name"],
        url: ele?.[key + "_url"] || null,
        subList:
          ele.sidemenu_lv2 && ele.sidemenu_lv2.length > 0
            ? ele.sidemenu_lv2.map((c: any) => {
                return {
                  name: c?.menu_name || "--",
                  url: c?.menu_url || "/",
                  subList: null
                };
              })
            : null
      };
    });
  };

  const fetch_menus = async () => {
    setLoading(true);
    try {
      const res_menu = await getSideMenuBackend();
      const res_personalmenu = await getSideMenuPersonal();
      setMenu(mapping_menus(res_menu.dataList, "menu"));
      setPersonalmenu(
        mapping_menus(res_personalmenu.dataList, "menu_personal")
      );
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
      <SideBar menuData={menu} personalData={personalmenu} />
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
