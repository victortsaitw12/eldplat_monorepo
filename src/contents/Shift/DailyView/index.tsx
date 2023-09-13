import React from "react";
import { useRouter } from "next/router";
import { DailyViewSTY } from "./style";
import { MonthlyData, TimeItem } from "../shift.typing";
import { WKDAY_LABEL } from "@contents/Shift/shift.data";
import { getDayEnd } from "../shift.util";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import EventBars from "@contents/Shift/EventBars";
import TimeCell from "@contents/Shift/TimeCell";

const DailyView = ({
  initialMonthFirst,
  setIsOpenDrawer,
  monthlyData,
  view
}: {
  initialMonthFirst: Date;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  view: "monthly" | "daily";
}) => {
  const scheduleUI = React.useContext(UIContext);
  const router = useRouter();
  scheduleUI.setId(router.query.id);
  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + scheduleUI.monthCount,
    1
  );
  const curMonthTotal: number = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + 1 + scheduleUI.monthCount,
    0
  ).getDate();

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!scheduleUI.id) return;
    initInsertData();
  }, [scheduleUI.id]);

  React.useEffect(() => {
    if (scheduleUI.isSelect)
      document.addEventListener("mouseup", renderCreateForm);
    return () => {
      document.removeEventListener("mouseup", renderCreateForm);
    };
  }, [scheduleUI.isSelect]);

  //------ functions ------//
  const initInsertData = () => {
    const updated = { ...scheduleUI.insertData };
    updated.driver_no = scheduleUI.id;
    scheduleUI.setInsertData(updated);
  };

  const handleCreateFullDayEvent = (timestamp: number) => {
    const selectedDT = new Date(timestamp);
    scheduleUI.setStartDate(selectedDT);
    scheduleUI.setEndDate(getDayEnd(selectedDT));
    renderCreateForm();
  };

  const renderCreateForm = () => {
    scheduleUI.setIsSelect(false);
    scheduleUI.setDrawerType({
      type: "create",
      title: "新增",
      timestamp: null
    });
    setIsOpenDrawer(true);
  };
  //------ render body ------//
  const times: Array<TimeItem> = [];
  for (let h = 0; h < 24; h += scheduleUI.timeframe / (1000 * 60 * 60 * 1)) {
    const hour = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const timeslot = h < 12 ? "AM" : "PM";
    const time = {
      hh: hour.toString().padStart(2, "0"),
      mm: "00",
      aa: timeslot
    };
    times.push(time);
  }

  // const cellWidth = 100 / times.length; //%
  const cellWidth = 104;

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
        <div className="headerCell__row-date date">日期</div>
        <div className="headerCell__row-times">
          {times.map((item, i) => (
            <div key={`header-${i}`} className="headerCell time">
              <span className="headerCell-hhmm">{`${item.hh}:${item.mm}`}</span>
              <sup className="headerCell-aa">{`${item.aa}`}</sup>
            </div>
          ))}
        </div>
      </div>
      <div className="dateCells">
        {dateArr.map((date: any, i: number) => (
          <div key={`datecell-${i}`} className="dateCell__row">
            <div
              className={`dateCell__row-date date ${
                date.day.weekend ? "weekend" : ""
              }`}
              onClick={handleCreateFullDayEvent.bind(null, date.timestamp)}
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
                  <>
                    <TimeCell
                      key={`canvas-${i}-${index}`}
                      cellTimestamp={
                        date.timestamp + index * scheduleUI.timeframe
                      }
                      view={view}
                    />
                  </>
                );
              })}
            </div>
          </div>
        ))}
        <div style={{ paddingBottom: "68px" }}> </div>
      </div>
    </DailyViewSTY>
  );
};

export default DailyView;
