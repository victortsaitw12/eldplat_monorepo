import React from "react";
import { useRouter } from "next/router";
import { DailyViewSTY } from "./style";
import { MonthlyData, TimeItem } from "../shift.typing";
import { WKDAY_LABEL } from "@contents/Shift/shift.data";
import { UIContext } from "@contexts/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import EventBars from "@contents/Shift/EventBars";
import TimeCell from "@contents/Shift/TimeCell";

const DailyView = ({
  initialMonthFirst,
  setIsOpenDrawer,
  monthlyData,
  setMonthlyData,
  view
}: {
  initialMonthFirst: Date;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  setMonthlyData: (data: MonthlyData[] | null) => void;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  UI.setId(router.query.id);
  const { cur } = router.query;
  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );
  const curMonthTotal: number = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + 1 + UI.monthCount,
    0
  ).getDate();

  React.useEffect(() => {
    if (!UI.id) return;
    const updated = { ...UI.insertData };
    updated.driver_no = UI.id;
    UI.setInsertData(updated);
    const fetchData = async () => {
      const result = await getScheduleList(UI.id);
      setMonthlyData(result.data);
    };
    fetchData();
  }, [UI.id, cur, UI.flag]);

  React.useEffect(() => {
    if (UI.isSelect) document.addEventListener("mouseup", renderCreateForm);
    return () => {
      document.removeEventListener("mouseup", renderCreateForm);
    };
  }, [UI.isSelect]);

  //------ functions ------//

  const renderCreateForm = () => {
    UI.setIsSelect(false);
    UI.setDrawerType({
      type: "create",
      title: "新增",
      timestamp: null
    });
    setIsOpenDrawer(true);
  };
  //------ render body ------//

  const times: Array<TimeItem> = [];
  for (let h = 0; h < 24; h += 2) {
    const hour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const timeslot = h < 12 ? "AM" : "PM";
    const time = {
      hh: hour.toString().padStart(2, "0"),
      mm: "00",
      aa: timeslot
    };
    times.push(time);
  }

  const cellWidth = 100 / times.length; //%

  // get current date arr
  const dateArr = [];
  for (let i = 0; i < curMonthTotal; i++) {
    dateArr.push({
      date: i + 1,
      day: WKDAY_LABEL.get((curMonthFirst.getDay() + i) % 7),
      timestamp: curMonthFirst.valueOf() + 86400000 * i
    });
  }

  return (
    <DailyViewSTY cellWidth={cellWidth}>
      <div className="headerCell__row">
        <div className="headerCell__row-date">日期</div>
        <div className="headerCell__row-times">
          {times.map((item, i) => (
            <div key={`header-${i}`} className="headerCell">
              <span className="headerCell-hhmm">{`${item.hh}:${item.mm}`}</span>
              <span className="headerCell-aa">{`${item.aa}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="dateCells">
        {dateArr.map((date: any, i: number) => (
          <div key={`datecell-${i}`} className="dateCell__row">
            <div
              className={`dateCell__row-date ${
                date.day.weekend ? "weekend" : ""
              }`}
            >
              <span>{date.date}</span>
              <span>{date.day.label}</span>
            </div>
            <div className="dateCell__row-canvas">
              <EventBars
                cellTimestamp={date.timestamp}
                monthlyData={monthlyData}
                setIsOpenDrawer={setIsOpenDrawer}
                cellWidth={cellWidth}
              />
              {times.map((item, index) => {
                if (i === 0 && index === 1) {
                }
                return (
                  <TimeCell
                    key={`canvas-${i}-${index}`}
                    setIsOpenDrawer={setIsOpenDrawer}
                    cellTimestamp={date.timestamp + index * UI.timeFrame}
                    view={view}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </DailyViewSTY>
  );
};

export default DailyView;