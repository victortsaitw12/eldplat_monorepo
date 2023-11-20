import React from "react";
import { v4 as uuid } from "uuid";
import { useSession } from "next-auth/react";

//
import { MenuDataType } from "src/mock-data/side-bar/data";
import GroupList from "./GroupList";
import { BodySTY } from "./style";
//
interface Props {
  menuData: MenuDataType;
}

function Index({ menuData }: Props) {
  const { data: session } = useSession();

  if (!session) return <BodySTY></BodySTY>;

  return (
    <BodySTY>
      {menuData.map((menu) => {
        return <GroupList key={uuid()} menu={menu} />;
      })}
    </BodySTY>
  );
}
export default Index;
