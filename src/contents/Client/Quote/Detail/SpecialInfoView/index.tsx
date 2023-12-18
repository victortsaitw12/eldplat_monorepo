import React from "react";
import { BodySTY } from "./style";
import DetailGrid from "@components/DetailGrid";

interface I_Props {
  listArray: any[];
  remark?: string;
}
const SpecialInfoView = ({ listArray, remark = "--" }: I_Props) => {
  console.log("=====> ", listArray)

    return (
    //TODO: 可以簡化一下結構並把mappingSpecailNeededsInfo邏輯搬進來
    <BodySTY>
      {listArray.length !== 0 && listArray.map((item, index) => {
        return (
          item.isMulti ? 
          <div className="grid-wrap" key={index}>
            <div className="grid-title">{item.title}</div>
            <div className="multi-wrap">
              <div className="multi-items">
                <span className="grid-item">{item.seller.title}</span>
                <span className="grid-item">{item.seller.detail}</span>
              </div>
              <div className="multi-items">
                <span className="grid-item">{item.yourself.title}</span>
                <span className="grid-item">{item.yourself.detail}</span>
              </div>
            </div>
          </div>
          : 
          <div className="grid-wrap" key={index}>
            <div className="grid-title">{ item.title }</div>
            { item.detail ? 
              <span className="grid-item">{ item.detail }</span> :
              <span className="grid-item">{ item.value }</span> }
          </div>
        )
      })}
      <div className="grid-wrap">
        <div className="grid-title">備註</div>
        <div className="grid-item">{remark || "無"}</div>
      </div>
    </BodySTY>
  );
};
export default SpecialInfoView;
