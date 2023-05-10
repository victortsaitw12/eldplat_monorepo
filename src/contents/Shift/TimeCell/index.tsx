import React from "react";
import { TimeCellSTY } from "./style";

import { formatDate, formatDateForAPI } from "../shift.util";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleSidebar } from "@services/schedule/getScheduleSidebar";
import CreateEventBtn from "@contents/Shift/CreateEventBtn";

const TimeCell = ({
  setIsOpenDrawer,
  cellTimestamp,
  view
}: {
  setIsOpenDrawer: (value: boolean) => void;
  cellTimestamp: number;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);
  //------ functions ------//

  const handleSelectEndDate = (timestamp: number) => {
    const selectedDT = new Date(timestamp + UI.timeFrame);
    UI.setEndDate(selectedDT);
  };

  const checkSelectType = (timestamp: number) => {
    if (!UI.startDate || !UI.endDate) return;
    const timeStart = new Date(timestamp);
    const timeEnd = new Date(timestamp + UI.timeFrame);
    if (
      UI.startDate >= timeStart &&
      UI.endDate <= timeEnd
    )
      return "selected";
    if (
      UI.startDate >= timeStart &&
      UI.startDate < timeEnd &&
      UI.endDate >= timeEnd
    )
      return "start";
    if (UI.startDate < timeStart && UI.endDate > timeEnd) return "through";
    if (
      UI.startDate < timeStart &&
      UI.endDate > timeStart &&
      UI.endDate <= timeEnd
    )
      return "end";

  };



  return (
    <>
      <TimeCellSTY
        className="dateCell__row-canvas-cell time"
        onMouseEnter={() => {
          if (UI.isSelect) handleSelectEndDate(cellTimestamp);
        }}
        style={{ fontSize: "8px" }}
      >
        <CreateEventBtn
          cellTimestamp={cellTimestamp}
          selectType={checkSelectType.call(null, cellTimestamp)}
          view={view}
        />
      </TimeCellSTY>
    </>
  );
};

export default TimeCell;
