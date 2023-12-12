import React from "react";
import { TagIcon } from "evergreen-ui";

import { MonthlyData } from "../shift.typing";
import { SCHD_TYPE, LEAVE_CODE, CHECK_STATUS, EVENT_TYPE } from "../shift.data";
import { BtnSTY } from "./style";

const EventBtn = ({ value, className }: { value: any; className?: string }) => {
  //------ functions ------//

  return (
    <BtnSTY key={value?.label} color={value?.color} className={className}>
      {
        <>
          {value?.icon}
          <span className={`${value?.label=== "待排班" ? "empty" : ""}`}>{value?.label}</span>
        </>
      }
    </BtnSTY>
  );
};

export default EventBtn;
