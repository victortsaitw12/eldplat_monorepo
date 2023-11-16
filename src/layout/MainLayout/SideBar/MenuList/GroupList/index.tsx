import React, { useState } from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  PersonIcon,
  DriveTimeIcon,
  WrenchIcon,
  BriefcaseIcon,
  FlagIcon,
  ClipboardIcon,
  OfficeIcon,
  CogIcon
} from "evergreen-ui";
import { useRouter } from "next/router";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import { BodySTY, StyledButton } from "./style";
import SubList from "../SubList";
import cx from "classnames";
//
type MenuType = MenuDataType[0];
interface Props {
  menu: MenuType;
}
//
function Index({ menu }: Props) {
  const router = useRouter();
  const currentUrl = router.asPath.split("/");
  const default_open =
    menu?.subList !== null &&
    menu?.subList &&
    menu?.subList
      .map((child) => {
        if (child.url !== "/") {
          return child.url;
        }
      })
      .indexOf(router.asPath) >= 0;
  // TODO update logic after paths are final
  // console.log("🍅 subList", menu?.subList);
  // console.log("🍅 asPath", router.asPath);

  const [openList, setOpenList] = useState(default_open);
  const isActive =
    router.asPath === menu.url ||
    (menu.name !== "首頁" &&
      menu.url !== "/" &&
      router.asPath.indexOf(menu.url) >= 0);
  const isDisabled = menu.url === null && !menu.subList;

  return (
    <BodySTY>
      <StyledButton
        className={cx({ active: isActive, disable: isDisabled })}
        onClick={() => {
          setOpenList((prev) => !prev);
          if (menu.url) {
            router.push(menu.url);
          }
        }}
      >
        <div className="btn__name ">
          {iconMap?.get(menu.name)?.icon || ""}
          <span className="text">{menu.name}</span>
        </div>

        {menu.subList && <ChevronDownIcon color="#fff" size={16} />}
      </StyledButton>
      <div className="text">
        {menu.subList && openList && <SubList data={menu.subList} />}
      </div>
    </BodySTY>
  );
}
export default Index;

// asked to add a "menu_no" for identify icons, backend refused
const iconMap = new Map([
  ["首頁", { icon: <HomeIcon /> }],
  ["使用者管理", { icon: <PersonIcon /> }],
  ["車輛管理", { icon: <DriveTimeIcon /> }],
  ["維保管理", { icon: <WrenchIcon /> }],
  ["駕駛管理", { icon: <BriefcaseIcon /> }],
  ["任務管理", { icon: <FlagIcon /> }],
  ["訂單管理", { icon: <ClipboardIcon /> }],
  ["客戶管理", { icon: <BriefcaseIcon /> }],
  ["供應商管理", { icon: <OfficeIcon /> }],
  ["設定", { icon: <CogIcon /> }]
]);
