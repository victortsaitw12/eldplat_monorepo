import React from "react";
import { BodySTY } from "./style";
import GridItem from "./GridItem";

export interface I_GridItem {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}

interface I_Props {
  listArray: I_GridItem[];
  title?: string;
}

const DetailGrid = ({ listArray, title }: I_Props) => {
  return (
    <BodySTY className="detail_grid">
      { title && <div className="grid_title">{ title }</div>}
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
    </BodySTY>
  );
};
export default DetailGrid;
