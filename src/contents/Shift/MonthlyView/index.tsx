import React from "react";
import { useRouter } from "next/router";
import { MonthlySTY } from "./style";
import { getTotalDays, TotalMS, eventH, gapH, cellPd } from "../shift.util";
import { MonthlyData, DateArrItem } from "../shift.typing";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import MonthlyHeader from "@contents/Shift/MonthlyView/MonthlyHeader";
import WeekRow from "@contents/Shift/MonthlyView/WeekRow";

interface I_Props {
  initialMonthFirst: Date;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  view: "monthly" | "daily";
  containerRef: any;
}

const getGroupingArr = (arr: any[], num: number) => {
  const result = [];
  let groupedItem = [];
  for (let i = 0; i < arr.length; i++) {
    groupedItem.push(arr[i]);
    if ((i + 1) % num === 0) {
      result.push(groupedItem);
      groupedItem = [];
    }
  }
  return result;
};

const MonthlyView = ({
  initialMonthFirst,
  setIsOpenDrawer,
  monthlyData,
  view,
  containerRef
}: I_Props) => {
  const scheduleUI = React.useContext(UIContext);
  const router = useRouter();
  scheduleUI.setId(router.query.id);

  //------ functions ------//
  const initInsertData = () => {
    const updated = { ...scheduleUI.insertData };
    updated.driver_no = scheduleUI.id;
    scheduleUI.setInsertData(updated);
  };

  const renderCreateForm = () => {
    scheduleUI.setIsSelect(false);
    scheduleUI.setDrawerType({
      type: "create",
      title: "新增"
    });
    setIsOpenDrawer(true);
  };

  const getInitEventCount = () => {
    if (!containerRef.current || !dateArrByWk) return 1;
    const initRowHeight =
      containerRef.current?.offsetHeight / dateArrByWk.length;
    const initEventCount = Math.floor(
      (initRowHeight - (eventH * 2 + gapH * 2 + cellPd)) / (eventH + gapH)
    );
    return initEventCount;
  };

  const getIsFitContentNeeded = () => {
    const initRowHeight =
      containerRef.current?.offsetHeight / dateArrByWk.length;
    const minimumRowHeight = eventH * 2 + gapH * 2 + cellPd + eventH * 1;
    if (initRowHeight < minimumRowHeight) return true;
    return false;
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!scheduleUI.id) return;
    initInsertData();
  }, [scheduleUI.id]);

  // handle isSelect end
  React.useEffect(() => {
    if (scheduleUI.isSelect)
      document.addEventListener("mouseup", renderCreateForm);
    return () => {
      document.removeEventListener("mouseup", renderCreateForm);
    };
  }, [scheduleUI.isSelect]);

  // TODO: feat: resize
  // React.useEffect(() => {
  //   const handleResize = () => {
  //     const updateMaxEventCount = eventCount();
  //     setMaxEventCount(updateMaxEventCount);
  //     setInitMaxEventCount(updateMaxEventCount);
  //   };
  //   window.addEventListener("resize", debounce(handleResize, 250));
  //   return () => {
  //     window.removeEventListener("resize", debounce(handleResize, 250));
  //   };
  // }, []);

  const getDateArr = React.useCallback(() => {
    const dateArr: DateArrItem[] = [];
    const curMonthFirst: Date = new Date(
      initialMonthFirst.getFullYear(),
      initialMonthFirst.getMonth() + scheduleUI.monthCount,
      1
    );
    // prev month
    const lastSunday = new Date(
      curMonthFirst.valueOf() - curMonthFirst.getDay() * TotalMS
    );

    for (let i = 0; i < curMonthFirst.getDay(); i++) {
      dateArr.push({
        date: lastSunday.getDate() + i,
        day: i,
        timestamp: lastSunday.valueOf() + TotalMS * i,
        disabled: true
      });
    }
    // current month
    for (let i = 0; i < getTotalDays(curMonthFirst); i++) {
      dateArr.push({
        date: i + 1,
        day: (curMonthFirst.getDay() + i) % 7,
        timestamp: curMonthFirst.valueOf() + TotalMS * i,
        disabled: false
      });
    }
    // next month
    const curMonthLast = new Date(
      curMonthFirst.valueOf() + (getTotalDays(curMonthFirst) - 1) * TotalMS
    );
    for (let i = 1; i <= 6; i++) {
      dateArr.push({
        date: i,
        day: curMonthLast.getDay() + i,
        timestamp: curMonthLast.valueOf() + TotalMS * i,
        disabled: true
      });
    }
    return dateArr;
  }, [initialMonthFirst, scheduleUI.monthCount]);

  const dateArr = getDateArr();
  const dateArrByWk = getGroupingArr(dateArr, 7);
  const initEventCount = getInitEventCount();

  return (
    <MonthlySTY className={`${getIsFitContentNeeded() ? "fitContent" : ""}`}>
      {dateArrByWk.map((dateArr, i) => (
        <WeekRow
          key={`wk-${i}`}
          dateArr={dateArr}
          idx={i}
          setIsOpenDrawer={setIsOpenDrawer}
          monthlyData={monthlyData}
          view={view}
          initEventCount={initEventCount}
        />
      ))}
    </MonthlySTY>
  );
};

export default MonthlyView;
