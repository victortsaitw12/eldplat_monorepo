import React from "react";
import { CellSTY } from "./style";
import { getDayEnd, formatDate, formatDateForAPI } from "../shift.util";
import { MonthlyData, DateArrItem } from "../shift.typing";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getScheduleSidebar } from "@services/schedule/getScheduleSidebar";
import EventList from "@contents/Shift/EventList";
import CreateEventBtn from "@contents/Shift/CreateEventBtn";

const DateCell = React.forwardRef(function DateCell({
  setIsOpenDrawer,
  monthlyData,
  date,
  view,
  maxEventCount,
  rowIndex,
  dateCellRef
}: {
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  date: DateArrItem;
  view: "monthly" | "daily";
  maxEventCount: number;
  rowIndex: number;
  dateCellRef: React.RefObject<HTMLDivElement>;
}) {
  const UI = React.useContext(UIContext);
  const [placeholders, setPlaceholders] = React.useState<MonthlyData[]>([]);
  const [items, setItems] = React.useState<MonthlyData[]>([]);
  const [singleRowExpand, setSingleRowExpand] = React.useState<number | null>(
    null
  );
  React.useEffect(() => {
    console.log("🍅🍅🍅 called");
    setSingleRowExpand(null);
  }, [UI.monthCount]);

  //------ functions ------//
  const handleSingleRowExpand = () => {
    singleRowExpand ? setSingleRowExpand(null) : setSingleRowExpand(99);
  };
  const handleSelectEndDate = (timestamp: string | number) => {
    const selectedDT = getDayEnd(new Date(timestamp));
    UI.setEndDate(selectedDT);
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
    <CellSTY
      ref={dateCellRef}
      className={`monthly-date cell dateCell ${
        date.disabled ? "disabled" : ""
      }   
            ${checkDateStart.call(null, date.timestamp) ? "start" : ""}
            row-${rowIndex}`}
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
          maxEventCount={singleRowExpand ? singleRowExpand : maxEventCount}
        />
      ) : (
        ""
      )}

      <CreateEventBtn cellTimestamp={date.timestamp} view={view} />
      <div className="cell__date">
        <span className="cell__date-info">
          {placeholders.length + items.length - maxEventCount > 0 ? (
            <button
              className="cell__unfold-btn"
              onClick={handleSingleRowExpand}
            >
              {singleRowExpand
                ? "收合"
                : `還有 ${
                    placeholders.length + items.length - maxEventCount
                  } 個`}
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
  );
});

export default DateCell;
