import React from "react";
import { TagIcon } from "evergreen-ui";

import { EventListSTY, EventBtnSTY } from "./style";
import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS } from "../shift.data";
import { formatDate, removePad } from "../shift.util";
import { MonthlyData } from "../shift.typing";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";

const EventList = ({
  cellTimestamp,
  monthlyData,
  setIsOpenDrawer
}: {
  cellTimestamp: number;
  monthlyData: MonthlyData[] | null;
  setIsOpenDrawer: (value: boolean) => void;
}) => {
  const [placeholderNum, setPlaceholderNum] = React.useState<number>(0);
  const [items, setItems] = React.useState<MonthlyData[] | null>([]);
  const UI = React.useContext(UIContext);

  React.useEffect(() => {
    const eventsthroughDate =
      monthlyData?.filter((shift: any): boolean => {
        const cellDate = new Date(cellTimestamp);
        const eventStart = new Date(shift.schd_Start_Time);
        const eventEnd = new Date(shift.schd_End_Time);
        return cellDate > eventStart && cellDate <= eventEnd;
      }) || [];
    const eventsOnDate =
      monthlyData?.filter((shift: any) => {
        const eventTimestamp = new Date(removePad(shift.schd_Date)).valueOf();
        return eventTimestamp.toString() == cellTimestamp.toString();
      }) || [];
    setPlaceholderNum(eventsthroughDate.length);
    setItems(eventsOnDate);
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
    </EventBtnSTY>
  ));
  const placeholders = () => {
    const arr = [];
    for (let i = 0; i < placeholderNum; i++) {
      arr.push(
        <div
          key={`placeholder-${cellTimestamp}-${i}`}
          className="placeholder"
          style={{
            minHeight: "24px",
            width: "100%",
            padding: "4px 8px",
            pointerEvents: "none"
          }}
        >
          {" "}
        </div>
      );
    }
    return arr;
  };

  return (
    <EventListSTY>
      {placeholders()}
      {eventBtns}
    </EventListSTY>
  );
};

export default EventList;