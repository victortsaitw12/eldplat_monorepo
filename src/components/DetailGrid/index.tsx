import React from "react";
import { BodySTY } from "./style";
import GridItem from "./GridItem";
import Collapse from "@components/Collapse";

export interface I_GridItem {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}

interface I_Props {
  listArray: I_GridItem[];
  title?: string;
  isCollapse?: boolean;
  borderRadius?: string;
}

const DetailGrid = ({ listArray, title="", isCollapse=false, borderRadius="4px" }: I_Props) => {

  const GridWrapper = ({ 
    isCollapse=false, 
    children,
    title="",
  }:{ isCollapse?: boolean, children: React.ReactNode, title?: string }) => {

    if(isCollapse) return (
      <Collapse title={title} opened={true}>
        { children }
      </Collapse>
    )

    return (<>{ children }</>)
  }

  return (
    <BodySTY className="detail_grid" title={title} borderRadius={borderRadius}>
      { title && !isCollapse && <div className="grid_title">{ title }</div>}
      <GridWrapper title={title} isCollapse={isCollapse}>
        <div className="grid_content">
          {listArray && listArray.length > 0 ? (
            listArray.map((child, i) => {
              return (
                <GridItem
                  key={child.value + "-" + i}
                  title={child.title}
                  value={child.value}
                />
              );
            })
          ) : (
            <span>--</span>
          )}
        </div>
      </GridWrapper>
    </BodySTY>
  );
};
export default DetailGrid;
