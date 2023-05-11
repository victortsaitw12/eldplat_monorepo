import React from "react";
import { CellSTY } from "./style";

import {
  getDayStart,
  getDayEnd,
  formatDate,
  formatDateForAPI,
  debounce
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
  const [placeholders, setPlaceholders] = React.useState<MonthlyData[]>([]);
  const [items, setItems] = React.useState<MonthlyData[]>([]);
  const [maxEventCount, setMaxEventCount] = React.useState<number>(1);
  // const [hiddenCount, setHiddenCount] = React.useState(0);
  const dateCellRef = React.useRef(null);

  const handleEventCount = React.useCallback(() => {
    const updateMaxEventCount =
      Math.floor((dateCellRef.current?.offsetHeight - 8 * 2) / (20 + 4)) - 2;
    setMaxEventCount(updateMaxEventCount);
  }, []);

  React.useEffect(() => {
    handleEventCount();
  }, [handleEventCount]);

  React.useEffect(() => {
    window.addEventListener("resize", debounce(handleEventCount, 250));
    return () => {
      window.removeEventListener("resize", debounce(handleEventCount, 250));
    };
  }, [handleEventCount]);

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
        ref={dateCellRef}
        className={`monthly-date cell dateCell ${
          date.disabled ? "disabled" : ""
        }   
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}`}
        onMouseEnter={() => {
          if (UI.isSelect) handleSelectEndDate(date.timestamp);
        }}
      >
        {monthlyData ? (
          <EventList
            cellTimestamp={date.timestamp}
            monthlyData={monthlyData}
            setIsOpenDrawer={setIsOpenDrawer}
            placeholders={placeholders}
            setPlaceholders={setPlaceholders}
            items={items}
            setItems={setItems}
            maxEventCount={maxEventCount}
          />
        ) : (
          ""
        )}

        <CreateEventBtn cellTimestamp={date.timestamp} view={view} />
        <div className="cell__date">
          <span className="cell__date-info">
            {placeholders.length + items.length - maxEventCount > 0 ? (
              <button className="cell__unfold-btn">
                還有 {placeholders.length + items.length - maxEventCount} 個
              </button>
            ) : (
              ""
            )}
          </span>
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
