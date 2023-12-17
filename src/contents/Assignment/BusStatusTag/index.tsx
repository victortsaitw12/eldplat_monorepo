import React from "react";
import { TagSTY } from "./style";

const BusStatusTag = ({value, className }: { value: any; className?: string; }) => {
  return (
    <TagSTY 
      color={value?.color} 
      className={className} 
      background={value?.background}
    >
      <>
        <p className="font_order">ORD202312310003</p>
        <p className="font_title">客製包車 一天一車</p>
        <p className="font_subtitle">台北車站</p>
        <p className="font_subtitle">14:00 ～ 20:00</p>
      </>
    </TagSTY>
  );
};

export default BusStatusTag;
