import React from "react";
import { DivSTY } from "./style";

const MonthlyHeader = () => {
  const days = ["日", "一", "二", "三", "四", "五", "六"];

  return (
    <DivSTY>
      {days.map((item, i) => (
        <div
          key={`day-${i}`}
          className={`cell headerCell ${i === 0 || i === 6 ? "weekend" : ""}`}
        >
          {item}
        </div>
      ))}
    </DivSTY>
  );
};

export default MonthlyHeader;
