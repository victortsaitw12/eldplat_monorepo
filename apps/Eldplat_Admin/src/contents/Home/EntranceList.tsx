import React from "react";
import EntranceItem from "./EntranceItem";
import { ListSTY } from "./style";
interface ListProps {
  routerList: Array<{
    iconImage: React.ReactNode;
    label: string;
    pathUrl: string;
  }>;
}
const EntranceList = ({ routerList }: ListProps) => {
  return (
    <ListSTY>
      {routerList.map((item, index) => {
        return (
          <EntranceItem
            key={`entrance-item-${index}`}
            iconImage={item.iconImage}
            label={item.label}
            pathUrl={item.pathUrl}
          />
        );
      })}
    </ListSTY>
  );
};

export default EntranceList;
