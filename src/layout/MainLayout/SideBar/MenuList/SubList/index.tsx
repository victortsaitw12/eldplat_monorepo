import React from "react";
import { v4 as uuid } from "uuid";
//
import { MenuDataType } from "src/mock-data/side-bar/data";
import ListItem from "../ListItem";
import { BodySTY, ItemListSTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";

//
type SubList = NonNullable<MenuDataType[0]["subList"]>;
//
interface Props {
  data: SubList;
}
//
function Index({ data }: Props) {
  if (!data) {
    return <LoadingSpinner />;
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
