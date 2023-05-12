import React from "react";
import { CellSTY } from "./style";

import { getDayStart } from "../shift.util";
import { DateArrItem } from "../shift.typing";
import { UIContext } from "@contexts/UIProvider";

const DateCellCanvas = ({
  date,
  rowIndex
}: {
  date: DateArrItem;
  rowIndex: number;
}) => {
  const UI = React.useContext(UIContext);

  //------ functions ------//
  const checkDateInsideSelection = (timestamp: string | number) => {
    if (!UI.startDate || !UI.endDate) return false;
    const date = new Date(timestamp);
    return date >= getDayStart(UI.startDate) && getDayStart(date) <= UI.endDate;
  };
  const checkDateStart = (timestamp: string | number) => {
    if (!UI.startDate) return false;
    return timestamp == UI.startDate.valueOf();
  };

  return (
    <>
      <CellSTY
        className={`monthly-date cell dateCell ${
          date.disabled ? "disabled" : ""
        } ${
          checkDateInsideSelection.call(null, date.timestamp) ? "highlight" : ""
        }  
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}
            row-${rowIndex}`}
      ></CellSTY>
    </>
  );
};

export default DateCellCanvas;
