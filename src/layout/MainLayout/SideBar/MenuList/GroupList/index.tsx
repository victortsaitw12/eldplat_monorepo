import React, { useState } from "react";
import { ChevronDownIcon } from "evergreen-ui";
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
  const default_open =
    menu?.subList !== null &&
    menu?.subList &&
    menu?.subList
      .map((child) => {
        return child.url;
      })
      .indexOf(router.asPath) >= 0;
  const [openList, setOpenList] = useState(default_open);
  const isActive = router.asPath === menu.url;
  return (
    <BodySTY>
      <StyledButton
        className={cx({ active: isActive })}
        onClick={() => {
          console.log("select!");
          setOpenList((prev) => !prev);
          if (menu.url) {
            router.push(menu.url);
          }
        }}
      >
        <div>{menu.name}</div>
        {menu.subList && <ChevronDownIcon color="#fff" size={16} />}
      </StyledButton>
      {menu.subList && openList && <SubList data={menu.subList} />}
    </BodySTY>
  );
}
export default Index;
