import React from "react";
import { TimeCellSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import CreateEventBtn from "@contents/Shift/CreateEventBtn";

const TimeCell = ({
  cellTimestamp,
  view
}: {
  cellTimestamp: number;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);
  //------ functions ------//

  const handleSelectEndDate = (timestamp: number) => {
    const selectedDT = new Date(timestamp + UI.timeframe);
    UI.setEndDate(selectedDT);
  };

  const checkSelectType = (timestamp: number) => {
    if (!UI.startDate || !UI.endDate) return;
    const timeStart = new Date(timestamp);
    const timeEnd = new Date(timestamp + UI.timeframe);
    if (UI.startDate >= timeStart && UI.endDate <= timeEnd) return "selected";
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
