import React from "react";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import { v4 as uuid } from "uuid";
import GroupList from "./GroupList";
import { BodySTY } from "./style";
//
interface Props {
  menuData: MenuDataType;
}

function Index({ menuData }: Props) {
  const [selectedField, setSelectedField] = React.useState("");
  return (
    <BodySTY>
      {menuData.map((menu) => {
        return <GroupList key={uuid()} menu={menu} />;
      })}
    </BodySTY>
  );
}
export default Index;
