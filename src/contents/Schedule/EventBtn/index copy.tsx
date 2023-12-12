import React from "react";
import { TagIcon } from "evergreen-ui";

import { MonthlyData } from "../shift.typing";
import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS, EVENT_TYPE } from "../shift.data";

interface I_EventBtn {
  item: MonthlyData;
  i: number;
  cellTimestamp: number;
  onClickEvent: (v: any) => void;
}

const EventBtn = ({ item, i, cellTimestamp, onClickEvent }: I_EventBtn) => {
  //------ functions ------//

  return (
    <button
      value={item.drv_Schedule_No}
      className={`eventBtn event-${cellTimestamp}-${i} ${
        item.check_Status === "0" ? "reminder" : ""
      }`}
      onClick={onClickEvent}
    >
      {item.check_Status
        ? EVENT_TYPE.get(item.schd_Type.concat(item.check_Status))?.icon
        : SCHD_TYPE.get(item.schd_Type)?.icon}
      <span>
        {item.schd_Type === "04"
          ? CHECK_STATUS.get(item.check_Status)?.label
          : SCHD_TYPE.get(item.schd_Type)?.label}
      </span>
      {(item.leave_Code || (item.check_Status && item.leave_Description)) && (
        <TagIcon />
      )}
      <span>{LEAVE_CODE.get(item.leave_Code)?.label}</span>
      {item.schd_Type === "04" && <span>{item.leave_Description}</span>}
    </button>
  );
};

export default EventBtn;
