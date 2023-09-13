import React from "react";
import { EventListSTY, EventBtnSTY } from "./style";

import { SCHD_TYPE } from "../shift.data";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/scheduleContext/UIProvider";
import EventBtn from "@contents/Shift/EventBtn";

interface I_Props {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  placeholders: MonthlyData[];
  setPlaceholders: (value: MonthlyData[]) => void;
  items: MonthlyData[];
  setItems: (value: MonthlyData[]) => void;
  maxEventCount: number;
}

const TotalMS = 1000 * 60 * 60 * 24;

const EventList = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  placeholders,
  setPlaceholders,
  items,
  setItems,
  maxEventCount
}: I_Props) => {
  const schdUI = React.useContext(UIContext);

  React.useEffect(() => {
    const cellDateStart = new Date(cellTimestamp);
    const cellDateEnd = new Date(cellTimestamp + TotalMS);

    const eventsthroughDate =
      monthlyData?.filter((shift: any): boolean => {
        const eventStart = new Date(shift.schd_Start_Time);
        const eventEnd = new Date(shift.schd_End_Time);
        return cellDateStart > eventStart && cellDateStart <= eventEnd;
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

    setPlaceholders(eventsthroughDate);
    setItems(eventsStartsFromDate.concat(eventsInsideDate));
  }, [monthlyData, schdUI.monthCount]);

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
      if (placeholders.length + idx + 1 > maxEventCount) return true;
    }
    return false;
  };
  const eventBtns = items?.map((item, i) => (
    <EventBtnSTY
      key={`event-${cellTimestamp}-${i}`}
      color={SCHD_TYPE.get(item.schd_Type)?.color ?? "N300"}
      duration={getEventDurationLeft(item)}
      // className={`${placeholders.length + i + 1 > maxEventCount ? "hide" : ""}
      // `}
      className={`idx-${i} ${getIsHide(i) ? "hide" : ""}
      `}
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
  ));

  const prevEventBtns = placeholders.map((item, i) =>
    new Date(cellTimestamp).getDay() === 0 ? (
      <EventBtnSTY
        key={`event-${cellTimestamp}-${i}`}
        color={SCHD_TYPE.get(item.schd_Type)?.color ?? "N300"}
        duration={getEventDurationLeft(item)}
        className={`${
          placeholders.length + i + 1 > maxEventCount ? "hide" : ""
        }`}
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
    ) : (
      <EventBtnSTY
        aria-hidden="true"
        key={`placeholder-${cellTimestamp}-${i}`}
        duration={1}
        className="placeholder"
        style={{
          width: "100%",
          pointerEvents: "none"
        }}
      ></EventBtnSTY>
    )
  );

  return (
    <EventListSTY
      maxEventCount={maxEventCount}
      style={{ pointerEvents: "none" }}
    >
      {prevEventBtns}
      {eventBtns}
    </EventListSTY>
  );
};

export default EventList;
