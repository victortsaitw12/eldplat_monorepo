import React from "react";
import { EventListSTY, EventBtnSTY } from "./style";
import { SCHD_TYPE } from "../shift.data";
import { MonthlyData } from "../shift.typing";
import { TotalMS } from "../shift.util";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import EventBtn from "@contents/Shift/EventBtn";

interface I_Props {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  setEventCount: (value: number) => void;
  maxEventCount: number;
}

// TODO: EventList (<= EventBars)
const EventList = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  setEventCount,
  maxEventCount
}: I_Props) => {
  //------ variables, states ------//
  const schdUI = React.useContext(UIContext);

  const placeholderEvents = React.useMemo(() => {
    if (new Date(cellTimestamp).getDay() === 0) return [];
    const cellDateStart = cellTimestamp;
    const cellDateEnd = cellTimestamp + TotalMS;
    const eventsStartBeforeDate =
      monthlyData?.filter((shift: any): boolean => {
        const eventStart = new Date(shift.schd_Start_Time).valueOf();
        const eventEnd = new Date(shift.schd_End_Time).valueOf();
        return eventStart < cellDateStart && eventEnd >= cellDateStart;
      }) || [];
    const eventsSpanAcrossDate =
      monthlyData?.filter((shift: any): boolean => {
        const eventStart = new Date(shift.schd_Start_Time).valueOf();
        const eventEnd = new Date(shift.schd_End_Time).valueOf();
        return eventStart < cellDateStart && eventEnd > cellDateEnd;
      }) || [];

    return eventsStartBeforeDate.concat(eventsSpanAcrossDate);
  }, [cellTimestamp, monthlyData]);

  const shownEvents = React.useMemo(() => {
    const cellDateStart = cellTimestamp;
    const cellDateEnd = cellTimestamp + TotalMS;
    const eventsStartBeforeDate =
      monthlyData?.filter((shift: any): boolean => {
        const eventStart = new Date(shift.schd_Start_Time).valueOf();
        const eventEnd = new Date(shift.schd_End_Time).valueOf();
        return eventStart < cellDateStart && eventEnd >= cellDateStart;
      }) || [];
    const eventsStartsInDate =
      monthlyData?.filter((shift: any) => {
        const eventStart = new Date(shift.schd_Start_Time).valueOf();
        return eventStart >= cellDateStart && eventStart < cellDateEnd;
      }) || [];

    return new Date(cellTimestamp).getDay() === 0
      ? eventsStartBeforeDate.concat(eventsStartsInDate)
      : eventsStartsInDate;
  }, [cellTimestamp, monthlyData]);

  //------ functions ------//
  const renderEventStatus = async (drv_Schedule_No: string) => {
    schdUI.getEventStatusDrawer(drv_Schedule_No, cellTimestamp);
    setIsOpenDrawer(true);
  };

  const renderSignOffEditForm = async (drv_Schedule_No: string) => {
    schdUI.getSignOffEditDrawer(drv_Schedule_No, cellTimestamp);
    setIsOpenDrawer(true);
  };

  const getEventDurationLeft = (item: MonthlyData) => {
    const maxDuration = 7 - new Date(cellTimestamp).getDay();
    const eventDuration = Math.ceil(
      (new Date(item.schd_End_Time).valueOf() -
        new Date(cellTimestamp).valueOf()) /
        TotalMS
    );
    return eventDuration <= maxDuration ? eventDuration : maxDuration;
  };
  const getIsHide = (idx: number) => {
    const cellDay = new Date(cellTimestamp).getDay();
    if (cellDay === 0) {
      if (idx + 1 > maxEventCount) return true;
    } else {
      if (placeholderEvents.length + idx + 1 > maxEventCount) return true;
    }
    return false;
  };

  //------ useEffect ------//
  React.useEffect(() => {
    const eventCount = placeholderEvents.length + shownEvents.length;
    setEventCount(eventCount);
  }, [schdUI.monthCount]);

  return (
    <EventListSTY
      maxEventCount={maxEventCount}
      style={{ pointerEvents: "none" }}
    >
      {placeholderEvents.map((item, i) => (
        <EventBtnSTY
          aria-hidden="true"
          key={`placeholder-${cellTimestamp}-${i}`}
          duration={1}
          className="placeholder"
          style={{
            width: "100%",
            pointerEvents: "none"
          }}
        />
      ))}
      {shownEvents?.map((item, i) => (
        <EventBtnSTY
          key={`event-${cellTimestamp}-${i}`}
          color={SCHD_TYPE.get(item.schd_Type)?.color ?? "N300"}
          duration={getEventDurationLeft(item)}
          className={`${getIsHide(i) ? "hide" : ""}`}
        >
          <EventBtn
            item={item}
            i={i}
            cellTimestamp={cellTimestamp}
            onClickEvent={
              item.check_Status === "0"
                ? renderSignOffEditForm.bind(null, item.drv_Schedule_No)
                : renderEventStatus.bind(null, item.drv_Schedule_No)
            }
          />
        </EventBtnSTY>
      ))}
    </EventListSTY>
  );
};

export default EventList;
