import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

//
import { BodySTY } from "./style";
import Header from "./Header";
import UserInfo from "./UserInfo";
import MenuList from "./MenuList";
import { MenuDataType } from "@mock-data/side-bar/data";
import FooterItem from "./Footer/FooterItem";
import LoadingSpinner from "@components/LoadingSpinner";

//
interface Props {
  isLoading?: boolean;
  onToggleMenu: () => void;
}
//
function SideBar({ isLoading, onToggleMenu }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  const mapping_menus = (list: any) => {
    if (!list) return [];
    return list.map((ele: any) => {
      return {
        name: ele?.menu_name,
        url: ele?.path || null,
        subList:
          ele.sub_menu && ele.sub_menu.length > 0
            ? ele.sub_menu.map((c: any) => {
                return {
                  name: c?.func_name || "--",
                  url: c?.path || null,
                  subList: null
                };
              })
            : null
      };
    });
  };

  const menuData = mapping_menus(session?.user?.menuData.defaultMenu);
  return (
    // <CompanyProvider>
    <BodySTY>
      <Header handleCloseMenu={onToggleMenu} />
      <Divider />
      <div className="container">
        {isLoading && !menuData && <LoadingSpinner />}
        <MenuList menuData={menuData} />
      </div>
      <Divider />
      <UserInfo onClick={handleRedirect.bind(null, "/employee")} />
    </BodySTY>
    // </CompanyProvider>
  );
}

export default SideBar;

const Divider = () => {
  return <div className="divider" />;
};
