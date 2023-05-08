import React from "react";
import { CellSTY } from "./style";

import {
  getDayStart,
  getDayEnd,
  formatDate,
  formatDateForAPI
} from "../shift.util";
import { MonthlyData, DateArrItem } from "../shift.typing";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleSidebar } from "@services/schedule/getScheduleSidebar";
import EventList from "@contents/Shift/EventList";
import CreateEventBtn from "@contents/Shift/CreateEventBtn";

const DateCell = ({
  setIsOpenDrawer,
  monthlyData,
  date,
  view
}: {
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  date: DateArrItem;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);

  //------ functions ------//

  const handleSelectEndDate = (timestamp: string | number) => {
    const selectedDT = getDayEnd(new Date(timestamp));
    UI.setEndDate(selectedDT);
  };

  const checkDateInsideSelection = (timestamp: string | number) => {
    if (!UI.startDate || !UI.endDate) return false;
    const date = new Date(timestamp);
    return date >= getDayStart(UI.startDate) && getDayStart(date) <= UI.endDate;
  };
  const checkDateStart = (timestamp: string | number) => {
    if (!UI.startDate) return false;
    return timestamp == UI.startDate.valueOf();
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
        className={`monthly-date cell ${date.disabled ? "disabled" : ""} ${
          checkDateInsideSelection.call(null, date.timestamp) ? "highlight" : ""
        }  
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}`}
        onMouseEnter={(e) => {
          if (UI.isSelect) handleSelectEndDate(date.timestamp);
        }}
      >
        {monthlyData ? (
          <EventList
            cellTimestamp={date.timestamp}
            monthlyData={monthlyData}
            setIsOpenDrawer={setIsOpenDrawer}
          />
        ) : (
          ""
        )}

        <CreateEventBtn cellTimestamp={date.timestamp} view={view} />
        <div className="cell__date">
          <span className="cell__unfold-btn"></span>
          <span
            className="cell__date-btn"
            onClick={renderAllDayEventStatus.bind(null, date.timestamp)}
          >
            {date.date}
          </span>
        </div>
      </CellSTY>
    </>
  );
};

export default DateCell;
