import React from "react";
import { TagIcon } from "evergreen-ui";
import { EventBarsSTY, EventBarSTY } from "./style";

import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS, EVENT_TYPE } from "../shift.data";
import { formatDate, getDayStart } from "../shift.util";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";

const EventBars = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  cellWidth
}: {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  cellWidth: number;
}) => {
  const [items, setItems] = React.useState<MonthlyData[]>([]);
  const UI = React.useContext(UIContext);

  React.useEffect(() => {
    const cellDateStart = new Date(cellTimestamp);
    const cellDateEnd = new Date(cellTimestamp + 1000 * 60 * 60 * 24);

    const eventsInDate = monthlyData?.filter((shift: any) => {
      const eventStart = new Date(shift.schd_Start_Time);
      const eventEnd = new Date(shift.schd_End_Time);
      return (
        (eventStart <= cellDateStart && cellDateStart <= eventEnd) ||
        (cellDateStart <= eventEnd && eventEnd <= cellDateEnd) ||
        (cellDateStart <= eventStart && cellDateEnd <= eventEnd)
      );
    });

    if (eventsInDate) setItems(eventsInDate);
  }, [monthlyData, UI.monthCount, UI.flag]);

  //------ functions ------//
  // TODO 考慮讓 EditForm 共用這個function
  const renderEventStatus = async (drv_Schedule_No: string) => {
    // 1) UI render drawer
    UI.resetState();
    UI.setIsLoading(true);
    UI.setDrawerType({
      type: "view",
      title: formatDate(new Date(cellTimestamp)),
      timestamp: cellTimestamp
    });
    setIsOpenDrawer(true);
    try {
      // 2) fetch API
      const result = await getScheduleUpdateList(drv_Schedule_No);
      const updateViewEventList = [result.data];
      // 3) update UI
      UI.setViewEventList(updateViewEventList);
      UI.setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  const renderSignOffEditForm = async (drv_Schedule_No: string) => {
    // 1) UI render drawer
    UI.resetState();
    UI.setIsLoading(true);
    UI.setDrawerType({
      type: "edit",
      title: "簽核"
    });
    setIsOpenDrawer(true);
    try {
      // 2) fetch API
      const result = await getScheduleUpdateList(drv_Schedule_No);
      const updateInsertData = result.data;
      // 3) update UI
      UI.setInsertData(updateInsertData);
      UI.setStartDate(new Date(updateInsertData.schd_Start_Time));
      UI.setEndDate(new Date(updateInsertData.schd_End_Time));
      UI.setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };

  const getEventDuration = (item: MonthlyData): number => {
    if (
      new Date(item.schd_End_Time).valueOf() - cellTimestamp >=
      1000 * 60 * 60 * 24 - 1000 * 60
    )
      return (1000 * 60 * 60 * 24) / UI.timeframe;
    // 假設要滿格顯示
    return Math.ceil(
      (new Date(item.schd_End_Time).valueOf() -
        new Date(item.schd_Start_Time).valueOf()) /
        UI.timeframe
    );
  };

  const getEventStart = (item: MonthlyData): number => {
    if (new Date(item.schd_Start_Time).valueOf() - cellTimestamp <= 0) return 0;
    return Math.ceil(
      (new Date(item.schd_Start_Time).valueOf() -
        getDayStart(new Date(cellTimestamp)).valueOf()) /
        UI.timeframe
    );
  };
  const eventBtns = items?.map((item, i) => {
    return (
      <EventBarSTY
        key={`event-${cellTimestamp}-${i}`}
        color={SCHD_TYPE.get(item.schd_Type)?.color ?? "N300"}
        duration={getEventDuration(item)}
        cellWidth={cellWidth}
        left={getEventStart(item)}
        className="test"
      >
        <button
          value={item.drv_Schedule_No}
          className={`eventBtn event-${cellTimestamp}-${i} ${
            item.check_Status === "0" ? "reminder" : ""
          }`}
          onClick={
            item.check_Status === "0"
              ? renderSignOffEditForm.bind(null, item.drv_Schedule_No)
              : renderEventStatus.bind(null, item.drv_Schedule_No)
          }
        >
          {item.check_Status
            ? EVENT_TYPE.get(item.schd_Type.concat(item.check_Status))?.icon
            : SCHD_TYPE.get(item.schd_Type)?.icon}
          <span>
            {item.schd_Type === "04"
              ? CHECK_STATUS.get(item.check_Status)?.label
              : SCHD_TYPE.get(item.schd_Type)?.label}
          </span>
          {(item.leave_Code || item.check_Status) && <TagIcon />}
          <span>{LEAVE_CODE.get(item.leave_Code)?.label}</span>
          {item.schd_Type === "04" && <span>{item.leave_Description}</span>}
        </button>
      </EventBarSTY>
    );
  });

  return <EventBarsSTY>{eventBtns}</EventBarsSTY>;
};

export default EventBars;
