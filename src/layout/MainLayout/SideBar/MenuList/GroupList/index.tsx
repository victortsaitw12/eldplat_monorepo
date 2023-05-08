import React, { useState } from "react";
import { ChevronDownIcon, PlusIcon } from "evergreen-ui";
import { v4 as uuid } from "uuid";
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
  const [openList, setOpenList] = useState(false);
  return (
    <BodySTY>
      <StyledButton
        onClick={() => {
          console.log("select!");
          setOpenList((prev) => !prev);
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
