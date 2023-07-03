import React from "react";
import { BodySTY } from "./style";
import DetailItem from "./DetailItem";

export interface I_listItem {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}
interface I_Props {
  listArray: I_listItem[];
}

const DetailList = ({ listArray }: I_Props) => {
  return (
    <BodySTY className="detail_list">
      {listArray && listArray.length > 0 ? (
        listArray.map((child, i) => {
          return (
            <DetailItem
              key={child.value + "-" + i}
              title={child.title}
              value={child.value}
            />
          );
        })
      ) : (
        <span>--</span>
      )}
    </BodySTY>
  );
};
export default DetailList;
