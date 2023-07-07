import React from "react";
import { BodySTY } from "./style";
import DetailList from "@components/DetailList";

interface I_Props {
  listArray: { title: string; value: string | number | null }[];
  remark?: string;
}
const SpecialInfoView = ({ listArray, remark = "--" }: I_Props) => {
  return (
    <BodySTY>
      <DetailList listArray={listArray} />
      <div className="remark">
        <div className="remark-title">備註</div>
        <div className="remark-content">{remark || "無"}</div>
      </div>
    </BodySTY>
  );
};
export default SpecialInfoView;
