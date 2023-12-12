import React from "react";
import { ScheduleSTY } from "./style";
import timeUtil from "../schedule.timeUtil";
import EventBtn from "@contents/Schedule/EventBtn";
import { WKDAY_LABEL, EVENT_TYPE } from "../shift.data";

interface I_ScheduleTable {
  initialDate: Date;
}
const ScheduleTable = ({
  initialDate
}: I_ScheduleTable) => {

  const weekArr = ["日", "一", "二", "三", "四", "五", "六"];
  const dateArr = timeUtil.getMonthList(initialDate);

  const dateStatusHandler = ( item : {isToday: boolean, weeks: number} ) => {
    if(item.isToday) return "date today";
    const wkdayLabel = WKDAY_LABEL.get(item.weeks);
    if (wkdayLabel && wkdayLabel?.weekend) {
      return "date weekend";
    } else {
      return "date";
    }
  }
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
        {
          weekArr.map((item, index) =>{
            return (
              <li
                key={index}
                className={`${index === 0 || index === 6 ? "calendars_weeks weekend": "calendars_weeks"} `}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
      <ul className="calendars_daysWrap">
			{
				dateArr.map((item, index) => {
					return (
						<li 
							className={`${item.otherMonth !== "nowMonth" ? "other_month calendars_days" : "calendars_days"}`}
							key={index}
						>
              <span className={dateStatusHandler(item)}>{item.id}</span>
              <EventBtn
                key="01"
                value={EVENT_TYPE.get("01")}
              />
						</li> 
					)
				})
			}
		</ul>
    </ScheduleSTY>
  );
};

export default ScheduleTable;
