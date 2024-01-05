import React from "react";
import { CellSTY } from "./style";
import { getDayEnd, formatDate, formatDateForAPI } from "../../shift.util";
import { MonthlyData, DateArrItem } from "../../shift.typing";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getScheduleSidebar } from "@services/schedule/getScheduleSidebar";
import EventList from "@contents/Shift/MonthlyView/EventList";
import CreateEventBtn from "@contents/Shift/CreateEventBtn";

interface I_Props {
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  date: DateArrItem;
  view: "monthly" | "daily";
  maxEventCount: number;
  rowIndex: number;
}

const DateCell = ({
  setIsOpenDrawer,
  monthlyData,
  date,
  view,
  maxEventCount,
  rowIndex
}: I_Props) => {
  const scheduleUI = React.useContext(UIContext);
  const [eventCount, setEventCount] = React.useState<number>(0);
  const [singleRowExpand, setSingleRowExpand] = React.useState<number | null>(
    null
  );
  React.useEffect(() => {
    setSingleRowExpand(null);
  }, [scheduleUI.monthCount]);

  //------ functions ------//
  const handleSingleRowExpand = () => {
    singleRowExpand ? setSingleRowExpand(null) : setSingleRowExpand(99);
  };
  const handleSelectEndDate = (timestamp: string | number) => {
    const selectedDT = getDayEnd(new Date(timestamp));
    scheduleUI.setEndDate(selectedDT);
  };

  const checkDateStart = (timestamp: string | number) => {
    if (!scheduleUI.startDate) return false;
    return timestamp == scheduleUI.startDate.valueOf();
  };
  const getFoldEventCount = () => {
    return eventCount - maxEventCount;
  };

  const renderAllDayEventStatus = async (timestamp: string | number) => {
    const schd_date = formatDateForAPI(new Date(timestamp));
    const driver_no = scheduleUI.id;
    // 1) UI render drawer
    scheduleUI.resetState();
    scheduleUI.setIsLoading(true);
    scheduleUI.setDrawerType({
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
      scheduleUI.setViewEventList(result.data);
      scheduleUI.setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  const foldEventCount = getFoldEventCount();

  return (
    <CellSTY
      className={`monthly-date cell dateCell ${
        date.disabled ? "disabled" : ""
      }   
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}
            row-${rowIndex}`}
      onMouseEnter={() => {
        if (scheduleUI.isSelect) handleSelectEndDate(date.timestamp);
      }}
    >
      {monthlyData && (
        <EventList
          cellTimestamp={date.timestamp}
          monthlyData={monthlyData}
          setIsOpenDrawer={setIsOpenDrawer}
          setEventCount={setEventCount}
          maxEventCount={singleRowExpand ? singleRowExpand : maxEventCount}
        />
      )}
      <CreateEventBtn cellTimestamp={date.timestamp} view={view} />
      <div className="cell__info">
        {foldEventCount > 0 && (
          <button className="cell__info-unfold" onClick={handleSingleRowExpand}>
            {singleRowExpand ? "收合" : `還有${foldEventCount}個`}
          </button>
        )}
        <span
          className="cell__info-date"
          onClick={renderAllDayEventStatus.bind(null, date.timestamp)}
        >
          {date.date}
        </span>
      </div>
    </CellSTY>
  );
};

export default DateCell;
