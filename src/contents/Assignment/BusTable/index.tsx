import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import {
  BusScheduleData,
  BusMissionData
} from "@contents/Assignment/assignment.typing";
import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";

interface I_OverviewTable {
  data: BusScheduleData[];
  initialDate: Date;
}
const BusTable = ({ data, initialDate }: I_OverviewTable) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);

  //------ functions ------//
  const dateStatusHandler = (item: { isToday: boolean; weeks: number }) => {
    if (item.isToday) return "font_date today";
    const wkdayLabel = WKDAY_LABEL.get(item.weeks);
    if (wkdayLabel && wkdayLabel?.weekend) {
      return "font_date weekend";
    } else {
      return "font_date";
    }
  };
  const renderShifts = (detail: BusMissionData[]): I_MonthItem[] => {
    const dateArr = timeUtil.getNowMonthList(initialDate);
    dateArr.forEach((item) => {
      const matchingData = detail.filter(
        (timeData) => timeData.mission_Date === item.date
      );
      if (matchingData.length !== 0) {
        console.log(matchingData);
        item.detail = matchingData;
      }
    });
    return dateArr;
  };

  return (
    <OverviewSTY className="overviewTable" ref={containerRef}>
      <div className="schedule_zone">
        <div className="schedule_weeksWrap">
          <div className="font_driver">車輛</div>
          {timeUtil.getNowMonthScheduleList(initialDate).map((item, index) => {
            return (
              <div className="zoom_width" key={index}>
                <span className={dateStatusHandler(item)}>{item.id}</span>
                <span className={`${dateStatusHandler(item)} week_label`}>
                  {WKDAY_LABEL.get(item.weeks)?.label}
                </span>
                <p></p>
              </div>
            );
          })}
        </div>
        <div className="schedule_bodyWrap">
          {data.map((bus, index) => {
            return (
              <div className="schedule_daysWrap" key={bus.bus_No}>
                <div className="driver_info">
                  <div>
                    <p>{bus.bus_No}</p>
                    <p>{bus.bus_Name}</p>
                    <div>
                      <span>中巴</span>
                      <span>36客座</span>
                      <span>1年</span>
                    </div>
                    <div>
                      <span>{bus.bus_Driver}</span>
                      <span>0912-345-678</span>
                    </div>
                  </div>
                </div>
                {renderShifts(bus.mission_List).map((date, index) => {
                  return (
                    <div className="bus_info zoom_width" key={index}>
                      {date.detail &&
                        (date.detail as BusMissionData[]).map(
                          (detail, index) => {
                            return (
                              <BusStatusTag
                                key={index}
                                value={BUS_STATUS.get(detail.mission_Type)}
                                detail={detail}
                              />
                            );
                          }
                        )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </OverviewSTY>
  );
};

export default BusTable;
