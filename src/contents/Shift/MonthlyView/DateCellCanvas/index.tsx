import React from "react";
import { CellSTY } from "./style";

import { getDayStart } from "../../shift.util";
import { DateArrItem } from "../../shift.typing";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

const DateCellCanvas = ({
  date,
  rowIndex
}: {
  date: DateArrItem;
  rowIndex: number;
}) => {
  const scheduleUI = React.useContext(UIContext);

  //------ functions ------//
  const checkDateSelected = (timestamp: string | number) => {
    if (!scheduleUI.startDate || !scheduleUI.endDate) return false;
    const date = new Date(timestamp);
    return (
      date >= getDayStart(scheduleUI.startDate) &&
      getDayStart(date) <= scheduleUI.endDate
    );
  };
  const checkDateStart = (timestamp: string | number) => {
    if (!scheduleUI.startDate) return false;
    return timestamp == scheduleUI.startDate.valueOf();
  };

  return (
    <>
      <CellSTY
        className={`monthly-date cell dateCell ${
          date.disabled ? "disabled" : ""
        } ${checkDateSelected.call(null, date.timestamp) ? "highlight" : ""}  
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}
            row-${rowIndex}`}
      ></CellSTY>
    </>
  );
};

export default DateCellCanvas;
