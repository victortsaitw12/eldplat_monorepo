import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import { DriverData, ScheduleInfoData, DateItem } from "@contents/Schedule/shift.typing";
import timeUtil from "@contents/Schedule/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";

interface I_OverviewTable {
  data: DriverData[];
  initialDate: Date;
  expandPercentage?: number;
  // handleCheckboxChange?: (item: any) => void;
  // handleSelectAll?: () => void;
  // handleDeselectAll?: () => void;
}
const BusTable = ({
  data,
  initialDate,
  expandPercentage,
}: I_OverviewTable) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [checkedItems, setCheckedItems] = React.useState<any[]>([]);

  //------ functions ------//
  const dateStatusHandler = ( item : {isToday: boolean, weeks: number} ) => {
    if(item.isToday) return "font_date today";
    const wkdayLabel = WKDAY_LABEL.get(item.weeks);
    if (wkdayLabel && wkdayLabel?.weekend) {
      return "font_date weekend";
    } else {
      return "font_date";
    }
  }
  const renderShifts = (date: DateItem, scheduleInfo: ScheduleInfoData[]) => {
    const shiftsOnDate = scheduleInfo.filter(
      (item: ScheduleInfoData) =>
        getDayStart(new Date(item.schd_Start_Time)) <=
          new Date(date.timestamp.valueOf()) &&
        new Date(item.schd_End_Time) >= new Date(date.timestamp.valueOf())
    );
    // if (shiftsOnDate.length === 0) {
    //   return;
    // } else {
    //   return shiftsOnDate.map((item: ScheduleInfoData, i: number) => {
    //     const eventTypeCode =
    //       item.schd_Type === "04"
    //         ? item.schd_Type.concat(item.check_Status)
    //         : item.schd_Type;
    //     const shiftLength = shiftsOnDate.length >= 3 ? 3 : shiftsOnDate.length;
    //     return (
    //       <EventTag
    //         key={`shift-${i}`}
    //         className={`shift-btn ${i >= 3 ? "hidden" : ""} ${
    //           item.check_Status === "0" ? "reminder" : ""
    //         } ${hideText(expandPercentage, shiftLength) && "hideText"}`}
    //         value={EVENT_TYPE.get(eventTypeCode)}
    //       />
    //     );
    //   });
    // }
  };

  // checkbox +++

  // get current date arr
  // const dateArr: Array<DateItem> = [];
  // for (let i = 0; i < curMonthTotal; i++) {
  //   const wkday = WKDAY_LABEL.get((curMonthFirst.getDay() + i) % 7)!;
  //   dateArr.push({
  //     date: i + 1,
  //     day: wkday,
  //     timestamp: curMonthFirst.valueOf() + TotalMS * i
  //   });
  // }

  // const dateCells = dateArr.map((date, i) => (
  //   <Table.TextHeaderCell
  //     key={"date-" + i}
  //     className={`eg-th ${date.day.weekend ? "weekend" : ""}`}
  //   >
  //     <span className="date-date">{date.date}</span>
  //     <span className="date-day">{date.day.label}</span>
  //   </Table.TextHeaderCell>
  // ));
  return (
    <OverviewSTY
      className="overviewTable"
      ref={containerRef}
    >
      <div className="schedule_zone">
        <div className="schedule_weeksWrap">
          <div className="font_driver">車輛</div>
          {
            timeUtil.getNowMonthScheduleList(initialDate).map((item, index) => {
              return (
                <div
                  className="zoom_width"
                  key={index}
                > 
                  <span className={dateStatusHandler(item)}>
                    {item.id}
                  </span>
                  <span className={`${dateStatusHandler(item)} week_label`}>
                    {WKDAY_LABEL.get(item.weeks)?.label}
                  </span>
                  <p></p>
                </div>
              )
            })
          }
        </div>
        <div className="schedule_bodyWrap">
          {
            data.map((item, index)=> {
              return (
                <div 
                  className="schedule_daysWrap"
                  key={item.driver_No}
                >
                  <div className="driver_info">
                    <div>
                      <p>KAA-001</p>
                      <p>奶油獅號</p>
                      <div><span>中巴</span><span>36客座</span><span>1年</span></div>
                      <div><span>吳中華</span><span>0912-345-678</span></div>
                    </div>
                  </div>
                  {
                    timeUtil.getNowMonthScheduleList(initialDate).map((item, index) => {
                      return (
                        <div
                          className="bus_info zoom_width"
                          key={index}
                        > 
                          <BusStatusTag 
                            value={BUS_STATUS.get("1")}
                          />
                        </div>
                      )
                    })
                  }
                </div>                
              )
            })
          }
        </div>
      </div>
    </OverviewSTY>
  );
};

export default BusTable;
