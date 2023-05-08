import React from "react";
import { CellSTY } from "./style";

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

  const renderAllDayEventStatus = async (timestamp: string | number) => {
    const schd_date = formatDateForAPI(new Date(timestamp));
    const driver_no = UI.id;
    // 1) UI render drawer
    UI.resetState();
    UI.setIsLoading(true);
    UI.setDrawerType({
      type: "view",
      title: formatDate(new Date(timestamp)),
      timestamp: timestamp
    });
    setIsOpenDrawer(true);
    try {
      // 2) fetch API
      const result = await getScheduleSidebar(schd_date, driver_no);
      result.data.timestamp = timestamp;
      // 3) update UI
      UI.setViewEventList(result.data);
      UI.setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <CellSTY
        className="dateCell__row-canvas-cell"
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
      </CellSTY>
    </>
  );
};

export default TimeCell;
