import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { ScheduleSTY } from "./style";
import timeUtil, {
  type I_MonthItem,
  type I_DetailItem
} from "@utils/schedule.timeUtil";
import EventBtn from "@contents/Schedule/EventBtn";
import { WKDAY_LABEL, EVENT_TYPE } from "../shift.data";

interface I_ScheduleTable {
  initialDate: Date;
  shiftData: Array<any>;
  isEdit: boolean;
}
const ScheduleTable = ({ initialDate, shiftData, isEdit }: I_ScheduleTable) => {
  const weekArr = ["日", "一", "二", "三", "四", "五", "六"];
  const router = useRouter();

  const dateStatusHandler = (item: I_MonthItem) => {
    if (item.isToday) return "date today";
    const wkdayLabel = WKDAY_LABEL.get(item.weeks);
    if (wkdayLabel && wkdayLabel?.weekend) {
      return "date weekend";
    } else {
      return "date";
    }
  };

  const shiftSchedule = useMemo(() => {
    const dateArr = timeUtil.getMonthList(initialDate);
    dateArr.forEach((item) => {
      const matchingData = shiftData.filter(
        (timeData) => timeData.schd_Date === item.date
      );

      if (matchingData.length !== 0) {
        item.detail = matchingData;
      }
    });
    return dateArr;
  }, [shiftData, initialDate]);
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://cdn.jsdelivr.net/gh/ruyut/TaiwanCalendar/data/2023.json");
  //     const data = await response.json();

  //     // const { healths, pageInfo } = await getHealthById(userNo);
  //     // console.log()
  //   };
  //   fetchData();
  // }, []);
  return (
    <ScheduleSTY>
      <ul className="calendars_weeksWrap">
        {weekArr.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                index === 0 || index === 6
                  ? "calendars_weeks weekend"
                  : "calendars_weeks"
              } `}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <ul className="calendars_daysWrap">
        {shiftSchedule.map((item, index) => {
          return (
            <li
              className={`${
                item.otherMonth !== "nowMonth"
                  ? "other_month calendars_days"
                  : "calendars_days"
              }`}
              key={index}
            >
              <span className={dateStatusHandler(item)}>{item.id}</span>
              {item.detail
                ? (item.detail as I_DetailItem[]).map((detail) => {
                    return (
                      <EventBtn
                        key={index}
                        type={EVENT_TYPE.get(detail?.schd_Type)}
                        onClickEvent={() => {
                          detail.schd_Type == "040"
                            ? router.push("/schedule/approval")
                            : undefined;
                        }}
                      />
                    );
                  })
                : !isEdit && ( //* need to add approve_schedule determine
                    <EventBtn key={index} type={EVENT_TYPE.get("01")} />
                  )}
            </li>
          );
        })}
      </ul>
    </ScheduleSTY>
  );
};

export default ScheduleTable;
