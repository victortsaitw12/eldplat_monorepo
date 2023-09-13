import React from "react";
import { EventBarsSTY, EventBarSTY } from "./style";

import { SCHD_TYPE } from "../shift.data";
import { getDayStart } from "../shift.util";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/scheduleContext/UIProvider";
import EventBtn from "@contents/Shift/EventBtn";

interface I_Props {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  cellWidth: number;
}

const TotalMS = 1000 * 60 * 60 * 24;

const EventBars = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  cellWidth
}: I_Props) => {
  const schdUI = React.useContext(UIContext);

  const eventsInDate = React.useMemo(() => {
    const cellDateStart = new Date(cellTimestamp);
    const cellDateEnd = new Date(cellTimestamp + TotalMS);
    return monthlyData?.filter((shift: any) => {
      const eventStart = new Date(shift.schd_Start_Time);
      const eventEnd = new Date(shift.schd_End_Time);
      return (
        (eventStart <= cellDateStart && eventEnd >= cellDateStart) ||
        (eventStart >= cellDateStart && eventEnd <= cellDateEnd) ||
        (eventStart <= cellDateEnd && eventEnd >= cellDateEnd)
      );
    });
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

  const getEventDuration = (item: MonthlyData): number => {
    const eventStartInCell =
      new Date(item.schd_Start_Time).valueOf() <= cellTimestamp
        ? cellTimestamp
        : new Date(item.schd_Start_Time).valueOf();
    const eventEndInCell =
      new Date(item.schd_End_Time).valueOf() >= cellTimestamp + TotalMS
        ? cellTimestamp + TotalMS
        : new Date(item.schd_End_Time).valueOf();
    const duration = Math.ceil(
      (eventEndInCell - eventStartInCell) / schdUI.timeframe
    );
    return duration;
  };

  const getEventStart = (item: MonthlyData): number => {
    if (new Date(item.schd_Start_Time).valueOf() - cellTimestamp <= 0) return 0;
    return Math.ceil(
      (new Date(item.schd_Start_Time).valueOf() -
        getDayStart(new Date(cellTimestamp)).valueOf()) /
        schdUI.timeframe
    );
  };
  return (
    <EventBarsSTY>
      {eventsInDate?.map((item, i) => {
        return (
          <EventBarSTY
            key={`event-${cellTimestamp}-${i}`}
            color={SCHD_TYPE.get(item.schd_Type)?.color ?? "N300"}
            duration={getEventDuration(item)}
            cellWidth={cellWidth}
            left={getEventStart(item)}
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
          </EventBarSTY>
        );
      })}
    </EventBarsSTY>
  );
};

export default EventBars;
