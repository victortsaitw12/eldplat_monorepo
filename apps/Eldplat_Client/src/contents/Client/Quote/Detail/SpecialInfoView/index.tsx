import React from "react";
import { BodySTY } from "./style";
import DetailGrid from "@components/DetailGrid";

interface I_Props {
  listArray: any[];
  remark?: string;
}
const SpecialInfoView = ({ listArray, remark = "--" }: I_Props) => {
    return (
    //FIXME: 可以優化一下結構並把mappingSpecailNeededsInfo邏輯重寫
    <BodySTY>
      {listArray.length !== 0 && listArray.map((item, index) => {
        return (
          item.isMulti ? 
          <div className="grid_wrap" key={index}>
            <div className="grid_title">{item.title}</div>
            <div className="multi_wrap">
              {item.seller.title && 
                <div className="multi_items">
                  <span className="grid_item">{item.seller.title}</span>
                  <span className="grid_item">{item.seller.detail}</span>
                </div>
              }
              {item.yourself.title &&
                <div className="multi_items">
                  <span className="grid_item">{item.yourself.title}</span>
                  <span className="grid_item">{item.yourself.detail}</span>
                </div>
              }
            </div>
          </div>
          : 
          <div className="grid_wrap" key={index}>
            <div className="grid_title">{ item.title }</div>
            { item.detail ? 
              <span className="grid_item">{ item.detail }</span> :
              <span className="grid_item">{ item.value }</span> }
          </div>
        )
      })}
      <div className="grid_wrap">
        <div className="grid_title">備註</div>
        <div className="grid_item">{remark || "無"}</div>
      </div>
    </BodySTY>
  );
};
export default SpecialInfoView;
