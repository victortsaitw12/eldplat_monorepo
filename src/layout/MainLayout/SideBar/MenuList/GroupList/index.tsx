import React, { useState } from "react";
import { ChevronDownIcon } from "evergreen-ui";
import { useRouter } from "next/router";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import { BodySTY, StyledButton } from "./style";
import SubList from "../SubList";
//
type MenuType = MenuDataType[0];
interface Props {
  menu: MenuType;
}
//
function Index({ menu }: Props) {
  const router = useRouter();
  const [openList, setOpenList] = useState(false);
  return (
    <BodySTY>
      <StyledButton
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
