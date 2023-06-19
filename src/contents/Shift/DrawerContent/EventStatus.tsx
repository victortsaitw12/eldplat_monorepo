import React from "react";
import { EditIcon, TrashIcon, Spinner, Pane, toaster } from "evergreen-ui";
import { ViewSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { formatTime, getDayEnd } from "../shift.util";
import { SCHD_TYPE, LEAVE_CODE, EVENT_TYPE } from "../shift.data";
import { deleteSchedule } from "@services/schedule/deleteSchedule";

import EventTag from "@contents/Shift/EventTag";

const EventStatus = ({
  setIsOpenDrawer
}: {
  setIsOpenDrawer: (value: boolean) => void;
}) => {
  const UI = React.useContext(UIContext);

  //------ functions ------//
  const checkFullDay = (event: any) => {
    //event start<= select start00:00  && event end>= selct end 23:59
    let result;
    const eventStart = new Date(event.schd_Start_Time);
    const eventEnd = new Date(event.schd_End_Time);
    const today = new Date(UI.drawerType.timestamp);
    if (eventStart <= today && eventEnd >= getDayEnd(today)) {
      result = <span>整天</span>;
    } else {
      result = (
        <>
          {" "}
          <span> {formatTime(new Date(event.schd_Start_Time))}</span>
          <span> - </span>
          <span> {formatTime(new Date(event.schd_End_Time))}</span>
        </>
      );
    }
    return result;
  };

  const renderEditForm = (event: any) => {
    // 1) UI render drawer
    UI.resetState();
    UI.setIsLoading(true);
    UI.setInsertData(event);
    const updatedDrawerType = { ...UI.drawerType };
    updatedDrawerType.type = "edit";
    UI.setDrawerType(updatedDrawerType);
    UI.setStartDate(new Date(event.schd_Start_Time));
    UI.setEndDate(new Date(event.schd_End_Time));
    UI.setIsLoading(false);
  };

  const handleDeleteSchdule = React.useCallback(
    async (event: any) => {
      const drv_schedule_no = event.drv_Schedule_No;
      UI.setIsLoading(true);
      try {
        await deleteSchedule(drv_schedule_no);
        toaster.success("刪除成功");
      } catch (e: any) {
        alert(e.message);
      }
      UI.setIsLoading(false);
      UI.setFlag(!UI.flag);
      setIsOpenDrawer(false);
      UI.resetState();
    },
    [UI.id]
  );

  //------ render ------//

  const eventsArray = UI.viewEventList?.map((event: any, i: number) => (
    <ViewSTY
      key={`eventStatus-${i}`}
      color={SCHD_TYPE.get(event.schd_Type)?.color || "unset"}
    >
      <div className="eventStatus__tags">
        {" "}
        <div className="eventStatus__duration">{checkFullDay(event)}</div>
        {event.check_Status ? (
          <EventTag
            value={EVENT_TYPE.get(event.schd_Type.concat(event.check_Status))}
          />
        ) : (
          ""
        )}
      </div>

      <div className="eventStatus__schdType">
        <span className="eventStatus__schdType-left">
          <span style={{ color: SCHD_TYPE.get(event.schd_Type)?.color }}>
            {" "}
            {SCHD_TYPE.get(event.schd_Type)?.icon}
          </span>
          <span> {SCHD_TYPE.get(event.schd_Type)?.label}</span>
        </span>
        <span className="eventStatus__schdType-right">
          <EditIcon onClick={renderEditForm.bind(null, event)} />
          <TrashIcon onClick={handleDeleteSchdule.bind(null, event)} />
        </span>
      </div>
      <div className="eventStatus__leaveCode">
        <span> {LEAVE_CODE.get(event.leave_Code)?.label}</span>
      </div>
      <div className="eventStatus__description">
        <span> {event.leave_Description}</span>
      </div>
      <hr className="eventStatus__divider" />
    </ViewSTY>
  ));

  return (
    <>
      {UI.isLoading ? (
        <Pane
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={400}
        >
          <Spinner />
        </Pane>
      ) : (
        <section className="detailRows">
          {UI.viewEventList.length === 0 ? (
            <div className="msg" style={{ textAlign: "center" }}>
              本日無行程
            </div>
          ) : (
            eventsArray
          )}
        </section>
      )}
    </>
  );
};

export default EventStatus;
