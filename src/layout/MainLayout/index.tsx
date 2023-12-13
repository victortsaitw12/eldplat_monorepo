/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
//
import Header from "./Header";
import SideBar from "./SideBar";
import { BodySTY, ContainerSTY } from "./style";
import { getSideMenuBackend } from "@services/siderbar/getSideMenuBackend";
//
function mapping_menus(list: any, key: string) {
  // console.log("list", list);
  return list.map((ele: any) => {
    return {
      name: ele?.[key + "_name"],
      url: ele?.[key + "_url"] || null,
      subList:
        ele.sidemenu_lv2 && ele.sidemenu_lv2.length > 0
          ? ele.sidemenu_lv2.map((c: any) => {
              return {
                name: c?.menu_name || "--",
                url: c?.menu_url || null,
                subList: null
              };
            })
          : null
    };
  });
}

//
const MainLayout: FC<{
  children: ReactNode;
  layoutProps: any;
}> = ({ children, layoutProps }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [menu, setMenu] = React.useState([]);
  const fetch_menus = async () => {
    setLoading(true);
    try {
      const res_menu = await getSideMenuBackend();
      setMenu(mapping_menus(res_menu.dataList, "menu"));
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  React.useEffect(() => {
    fetch_menus();
  }, []);

  React.useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  return (
    <BodySTY showMenu={showMenu}>
      <Head>
        <title>管理者頁</title>
        <meta property="og:title" content="管理者頁" />
      </Head>
      <SideBar
        menuData={menu}
        isLoading={loading}
        onToggleMenu={handleToggleMenu}
      />
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
