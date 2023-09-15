import React from "react";
import { DivSTY } from "./style";

const MonthlyHeader = () => {
  const days = ["日", "一", "二", "三", "四", "五", "六"];
  const isWeekend = (i: number) => {
    return i === 0 || i === 6 ? true : false;
  };
  return (
    <DivSTY>
      {days.map((item, i) => (
        <div
          key={`day-${i}`}
          className={`headerCell ${isWeekend(i) ? "weekend" : ""}`}
        >
          {item}
        </div>
      ))}
    </DivSTY>
  );
};

export default MonthlyHeader;
