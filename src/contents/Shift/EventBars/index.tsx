import React from "react";
import { TagIcon } from "evergreen-ui";
import { EventBarsSTY, EventBarSTY } from "./style";

import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS } from "../shift.data";
import { formatDate, getDayStart, getDayEnd } from "../shift.util";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";

const EventBars = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer,
  cellWidth
}: {
  cellTimestamp: string;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
  cellWidth: number;
}) => {
  const [items, setItems] = React.useState<MonthlyData[]>([]);
  const UI = React.useContext(UIContext);
  const timeFrame = 1000 * 60 * 60 * 2; //2hour

  React.useEffect(() => {
    const eventsInDate = monthlyData?.filter((shift: any) => {
      const cellDate = new Date(cellTimestamp);
      const eventStart = new Date(shift.schd_Start_Time);
      const eventEnd = new Date(shift.schd_End_Time);
      return (
        (cellDate <= eventStart && eventStart <= getDayEnd(cellDate)) ||
        (cellDate <= eventEnd && eventEnd <= getDayEnd(cellDate))
      );
    });

    if (eventsInDate) setItems(eventsInDate);
  }, [monthlyData, UI.monthCount, UI.flag]);

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

  const getEventDuration = (item: MonthlyData): number =>
    Math.ceil(
      (new Date(item.schd_End_Time).valueOf() -
        new Date(item.schd_Start_Time).valueOf()) /
        timeFrame
    );

  const getEventStart = (item: MonthlyData): number =>
    Math.ceil(
      (new Date(item.schd_Start_Time).valueOf() -
        getDayStart(new Date(cellTimestamp)).valueOf()) /
        timeFrame
    );
  const eventBtns = items?.map((item, i) => {
    // <div className={`test ${getEventDuration(item)}`}>test</div>
    // if (
    //   new Date(item.schd_Start_Time).valueOf() >= 1683302400000 &&
    //   new Date(item.schd_End_Time).valueOf() <= 1683388740000
    // )
    //   console.log("start:", item.schd_Start_Time);

    return (
      <EventBarSTY
        key={`event-${cellTimestamp}-${i}`}
        color={SCHD_TYPE.get(item.schd_Type)?.color || "inherit"}
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
          {SCHD_TYPE.get(item.schd_Type)?.icon}
          <span>
            {" "}
            {item.schd_Type === "04"
              ? CHECK_STATUS.get(item.check_Status)?.label
              : SCHD_TYPE.get(item.schd_Type)?.label}
          </span>
          {item.leave_Code || item.check_Status ? <TagIcon /> : ""}
          <span>{LEAVE_CODE.get(item.leave_Code)?.label}</span>
          {item.schd_Type === "04" ? item.leave_Description : ""}
        </button>
      </EventBarSTY>
    );
  });

  return <EventBarsSTY>{eventBtns}</EventBarsSTY>;
};

export default EventBars;
