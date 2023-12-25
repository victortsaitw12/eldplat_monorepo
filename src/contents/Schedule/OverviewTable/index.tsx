import React, {
  useState,
  useEffect,
  ReactNode,
  useContext,
  useRef,
  useMemo
} from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "../shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "../shift.util";
import { DriverData, ScheduleInfoData } from "../shift.typing";
import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";

interface I_OverviewTable {
  data: DriverData[];
  initialDate: Date;
  expandPercentage: number;
  // handleCheckboxChange?: (item: any) => void;
  // handleSelectAll?: () => void;
  // handleDeselectAll?: () => void;
}
const OverviewTable = ({
  data,
  initialDate,
  expandPercentage
}: I_OverviewTable) => {
  const UI = useContext(UIContext);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

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
  const renderShifts = (detail: ScheduleInfoData[]): I_MonthItem[] => {
    const dateArr = timeUtil.getNowMonthList(initialDate);
    dateArr.forEach((item) => {
      const matchingData = detail.filter(
        (timeData) => timeData.schd_Date === item.date
      );
      if (matchingData.length !== 0) {
        item.detail = matchingData;
      }
    });
    return dateArr;
  };
  // const renderShifts = (date: DateItem, scheduleInfo: ScheduleInfoData[]) => {
  //   const shiftsOnDate = scheduleInfo.filter(
  //     (item: ScheduleInfoData) =>
  //       getDayStart(new Date(item.schd_Start_Time)) <=
  //         new Date(date.timestamp.valueOf()) &&
  //       new Date(item.schd_End_Time) >= new Date(date.timestamp.valueOf())
  //   );
  //   if (shiftsOnDate.length === 0) {
  //     return;
  //   } else {
  //     return shiftsOnDate.map((item: ScheduleInfoData, i: number) => {
  //       const eventTypeCode =
  //         item.schd_Type === "04"
  //           ? item.schd_Type.concat(item.check_Status)
  //           : item.schd_Type;
  //       const shiftLength = shiftsOnDate.length >= 3 ? 3 : shiftsOnDate.length;
  //       return (
  //         <EventTag
  //           key={`shift-${i}`}
  //           className={`shift-btn ${i >= 3 ? "hidden" : ""} ${
  //             item.check_Status === "0" ? "reminder" : ""
  //           } ${hideText(expandPercentage, shiftLength) && "hideText"}`}
  //           value={EVENT_TYPE.get(eventTypeCode)}
  //         />
  //       );
  //     });
  //   }
  // };

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

  console.log();
  return (
    <OverviewSTY
      className="overviewTable"
      expandPercentage={expandPercentage}
      ref={containerRef}
    >
      <div className="schedule_zone">
        <div className="schedule_weeksWrap">
          <div className="font_driver">駕駛姓名</div>
          <div className="font_driver w-50">應休/已休</div>
          <div className="font_driver w-50">預排班表</div>
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
          {data.map((driver, index) => {
            return (
              <div
                className="schedule_daysWrap"
                key={driver.driver_No}
                onClick={() => {
                  router.push(`/schedule/detail/${driver.driver_No}`);
                }}
              >
                <div className="driver_info">
                  {driver.user_First_Name}
                  {driver.user_Name}
                  <p>0917-444-444</p>
                </div>
                <div className="w-50">5/8</div>
                <div className="w-50">
                  {driver.schedule_Approved ? (
                    <button className="icon">
                      <TimelineEventsIcon />
                    </button>
                  ) : (
                    <EventTag
                      key="040"
                      value={EVENT_TYPE.get("040")}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        router.push(
                          `/schedule/detail/${driver.driver_No}?editPage=edit`
                        );
                      }}
                    />
                  )}
                </div>
                {renderShifts(driver.schedule_List).map((date, index) => {
                  return (
                    <div className="zoom_width" key={index}>
                      {date.detail &&
                        (date.detail as ScheduleInfoData[]).map(
                          (detail, index) => {
                            return (
                              <EventTag
                                key={index}
                                value={
                                  detail.schd_Type
                                    ? EVENT_TYPE.get(detail.schd_Type)
                                    : EVENT_TYPE.get("01")
                                }
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

export default OverviewTable;
