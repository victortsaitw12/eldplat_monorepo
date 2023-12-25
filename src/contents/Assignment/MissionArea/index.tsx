import React, { useState } from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
// import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import {
  DriverData,
  ScheduleInfoData,
  DateItem
} from "@contents/Schedule/shift.typing";

import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";
import PaginationField from "@components/PaginationField";
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { MissionData } from "@contents/Assignment/assignment.typing";
import { ChevronDownIcon, EditIcon, PlusIcon } from "evergreen-ui";

import MissionRow from "@contents/Assignment/MissionRow";

interface I_OverviewTable {
  data: I_MonthItem;
}
const MissionArea = ({
  data
}: // data,
// initialDate,
// expandPercentage
I_OverviewTable) => {
  const router = useRouter();
  const [isOpenDispatch, setIsOpenDispatch] = useState(false);
  //------ functions ------//
  const dateStatusHandler = (item: { isToday: boolean; weeks: number }) => {
    if (item.isToday) return "today";
    const wkdayLabel = WKDAY_LABEL.get(item.weeks);
    if (wkdayLabel && wkdayLabel?.weekend) {
      return "weekend";
    } else {
      return "";
    }
  };
  return (
    <div className="table_row">
      <div className="table_calendar">
        <p className={dateStatusHandler(data)}>{data.id}</p>
        <span className={dateStatusHandler(data)}>
          {WKDAY_LABEL.get(data.weeks)?.label}
        </span>
      </div>
      <div className="table_info_row">
        {data.detail &&
          (data.detail as MissionData[]).map((item, index) => {
            return <MissionRow key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default MissionArea;
