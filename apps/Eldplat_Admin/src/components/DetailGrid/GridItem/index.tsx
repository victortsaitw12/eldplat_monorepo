import React from "react";
import { I_listItem } from "@components/DetailList";
import { BodySTY } from "./style";
const DetailItem = ({ title, value }: I_listItem) => {
  return (
    <BodySTY className="grid_item">
      <span className="item">{title}</span>
      <span className="item">{value || "--"}</span>
    </BodySTY>
  );
};

export default DetailItem;
