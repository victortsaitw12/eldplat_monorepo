import React from "react";
import { TagSTY } from "./style";
import { BusMissionData } from "@contents/Assignment/assignment.typing";

const BusStatusTag = ({
  value,
  className,
  detail
}: {
  value: any;
  className?: string;
  detail: BusMissionData;
}) => {
  return (
    <TagSTY
      color={value?.color}
      className={className}
      background={value?.background}
    >
      <>
        <p className="font_order">{detail.mission_No}</p>
        <p className="font_title">{detail.mission_Name}</p>
        <p className="font_subtitle">台北車站</p>
        <p className="font_subtitle">14:00 ～ 20:00</p>
      </>
    </TagSTY>
  );
};

export default BusStatusTag;
