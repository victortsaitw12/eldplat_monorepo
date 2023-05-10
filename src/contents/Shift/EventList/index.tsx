import React from "react";
import { TagIcon } from "evergreen-ui";

import { EventListSTY, EventBtnSTY } from "./style";
import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS } from "../shift.data";
import { formatDate } from "../shift.util";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";

const EventList = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  setHiddenCount,
  rows
}: {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  setHiddenCount: (value: number) => void;
  rows: number;
}) => {
  const [placeholderNum, setPlaceholderNum] = React.useState<number>(0);
  const [items, setItems] = React.useState<MonthlyData[] | null>([]);
  const UI = React.useContext(UIContext);
  const maxEventCount = 2;
  // Math.floor((cell height) / event min-height - 2)
  // ((100%-32px)/rows) / (${({ theme }) => "calc(" + theme.fontSize.Heading200 + " + 4px * 2)"})
  //
  React.useEffect(() => {
    const cellDateStart = new Date(cellTimestamp);
    const cellDateEnd = new Date(cellTimestamp + 1000 * 60 * 60 * 24);

    const eventsthroughDate =
      monthlyData?.filter((shift: any): boolean => {
        const eventStart = new Date(shift.schd_Start_Time);
        const eventEnd = new Date(shift.schd_End_Time);
        return cellDateStart > eventStart && cellDateStart <= eventEnd;
        // return cellDate > eventStart && cellDate <= eventEnd;
      }) || [];
    const eventsStartsFromDate =
      monthlyData?.filter((shift: any) => {
        const eventStart = new Date(shift.schd_Start_Time);
        const eventEnd = new Date(shift.schd_End_Time);
        return (
          eventStart >= cellDateStart &&
          eventStart < cellDateEnd &&
          eventEnd >= cellDateEnd
        );
      }) || [];
    const eventsInsideDate =
      monthlyData?.filter((shift: any) => {
        const eventStart = new Date(shift.schd_Start_Time);
        const eventEnd = new Date(shift.schd_End_Time);
        return eventStart >= cellDateStart && eventEnd <= cellDateEnd;
      }) || [];

    setPlaceholderNum(eventsthroughDate.length);
    setItems(eventsStartsFromDate.concat(eventsInsideDate));
  }, [monthlyData, UI.monthCount, UI.flag]);
  React.useEffect(() => {
    setHiddenCount(placeholderNum + items.length - maxEventCount);
  }, [placeholderNum, items, setHiddenCount, maxEventCount]);

  //------ functions ------//
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

  const getEventDuration = (item: MonthlyData) =>
    Math.ceil(
      (new Date(item.schd_End_Time).valueOf() -
        new Date(item.schd_Start_Time).valueOf()) /
        (1000 * 60 * 60 * 24)
    );

  const eventBtns = items?.map((item, i) => (
    <EventBtnSTY
      key={`event-${cellTimestamp}-${i}`}
      color={SCHD_TYPE.get(item.schd_Type)?.color || "inherit"}
      duration={getEventDuration(item)}
      className={`${placeholderNum + i > maxEventCount ? "hide" : ""}`}
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
        {SCHD_TYPE.get(item.schd_Type)?.icon}
        <span>
          {item.schd_Type === "04"
            ? CHECK_STATUS.get(item.check_Status)?.label
            : SCHD_TYPE.get(item.schd_Type)?.label}
        </span>
        {item.leave_Code || item.check_Status ? <TagIcon /> : ""}
        <span>{LEAVE_CODE.get(item.leave_Code)?.label}</span>
        <span>{item.schd_Type === "04" ? item.leave_Description : ""}</span>
      </button>
    </EventBtnSTY>
  ));
  const placeholders = () => {
    const arr = [];
    for (let i = 0; i < placeholderNum; i++) {
      arr.push(
        <EventBtnSTY
          aria-hidden="true"
          key={`placeholder-${cellTimestamp}-${i}`}
          color="inherit"
          duration={1}
          className="placeholder"
          style={{
            width: "100%",
            pointerEvents: "none"
          }}
        >
          {" "}
        </EventBtnSTY>
      );
    }
    return arr;
  };

  return (
    <EventListSTY maxEventCount={maxEventCount}>
      {placeholders()}
      {eventBtns}
    </EventListSTY>
  );
};

export default EventList;
