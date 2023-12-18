import React from "react";
import { TagIcon } from "evergreen-ui";

import { MonthlyData } from "../shift.typing";
import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS, EVENT_TYPE } from "../shift.data";
import { BtnSTY } from "./style";

interface I_EventBtn {
  type: any;
  className?: string;
  onClickEvent: (v: any) => void;
}
const EventBtn = ({ 
  type,
  className,
  onClickEvent 
}: I_EventBtn) => {
  //------ functions ------//
  
  return (
    <BtnSTY 
      key={type?.label} 
      color={type?.color} 
      className={className} 
      onClick={onClickEvent}>
      {
        <>
          {type?.icon}
          <span className={`${type?.label=== "待排班" ? "empty" : ""}`}>{type?.label}</span>
        </>
      }
    </BtnSTY>
  );
};

export default EventBtn;
