import React from "react";
import { v4 as uuid } from "uuid";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import ListItem from "../ListItem";
import { BodySTY, ItemListSTY } from "./style";
//
type SubList = NonNullable<MenuDataType[0]["subList"]>;
//
interface Props {
  data: SubList;
}
//
function Index({ data }: Props) {
  console.log("data", data);
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <BodySTY>
      <ItemListSTY>
        {data.map((item) => {
          return <ListItem key={uuid()} data={item} />;
        })}
      </ItemListSTY>
    </BodySTY>
  );
}
export default Index;
