import React from "react";
import { I_listItem } from "@components/DetailList";
import { BodySTY } from "./style";
const DetailItem = ({ title, value }: I_listItem) => {
  return (
    <BodySTY className="detail_item">
      <span>{title}</span>
      <span>{value || "--"}</span>
    </BodySTY>
  );
};

export default DetailItem;
