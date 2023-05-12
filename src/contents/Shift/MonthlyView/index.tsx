import React from "react";
import { useRouter } from "next/router";
import { MonthlySTY } from "./style";
import { getTotalDays, getLastMonthTotalDays } from "../shift.util";
import { MonthlyData, DateArrItem } from "../shift.typing";

import { UIContext } from "@contexts/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import DateCell from "@contents/Shift/DateCell";
import DateCellCanvas from "@contents/Shift/DateCellCanvas";

const MonthlyView = ({
  initialMonthFirst,
  setIsOpenDrawer,
  monthlyData,
  setMonthlyData,
  view,
  isExpend
}: {
  initialMonthFirst: Date;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  setMonthlyData: (data: MonthlyData[] | null) => void;
  view: "monthly" | "daily";
  isExpend: boolean;
}) => {
  const UI = React.useContext(UIContext);
  const dateCellRef = React.useRef(null);
  const router = useRouter();
  UI.setId(router.query.id);
  const { cur } = router.query;
  const [maxEventCount, setMaxEventCount] = React.useState<number>(1);

  const wkDays = ["日", "一", "二", "三", "四", "五", "六"];
  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );

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
  }, [UI.id, cur, UI.flag, setMonthlyData]);

  React.useEffect(() => {
    if (UI.isSelect) document.addEventListener("mouseup", renderCreateForm);
    return () => {
      document.removeEventListener("mouseup", renderCreateForm);
    };
  }, [UI.isSelect]);

  React.useEffect(() => {
    if (isExpend) setMaxEventCount(99);
  }, [isExpend]);

  //------ functions ------//
  const handleTESTFowardRef = () => {
    console.log("called");
    console.log(dateCellRef.current?.offsetHeight);
  };
  const renderCreateForm = () => {
    UI.setIsSelect(false);
    UI.setDrawerType({
      type: "create",
      title: "新增"
    });
    setIsOpenDrawer(true);
  };

  //------ render body ------//
  const dateArr: Array<DateArrItem> = [];
  // last month
  const lastSundayDate =
    getLastMonthTotalDays(curMonthFirst) - curMonthFirst.getDay() + 1;
  const padCount = curMonthFirst.getDay();
  for (let i = lastSundayDate; i < lastSundayDate + padCount; i++) {
    dateArr.push({
      date: i,
      day: 0,
      timestamp: curMonthFirst.valueOf() + 86400000 * i,
      disabled: true
    });
  }
  // this month
  for (let i = 0; i < getTotalDays(curMonthFirst); i++) {
    dateArr.push({
      date: i + 1,
      day: (curMonthFirst.getDay() + i) % 7,
      timestamp: curMonthFirst.valueOf() + 86400000 * i,
      disabled: false
    });
  }
  // next month
  const nextSaturdayDate =
    7 - ((curMonthFirst.getDay() + getTotalDays(curMonthFirst)) % 7) + 1;
  if (nextSaturdayDate !== 0) {
    for (let i = 1; i < nextSaturdayDate; i++) {
      dateArr.push({
        date: i,
        day: 0,
        timestamp:
          curMonthFirst.valueOf() +
          86400000 * (i + getTotalDays(curMonthFirst)),
        disabled: true
      });
    }
  }

  // separate rows
  const renderRow = () => {
    const rowArr = [];
    let row = [];
    let rowShadow = [];

    for (let i = 0; i < dateArr.length; i++) {
      row.push(
        <DateCell
          key={`datecell-${i}`}
          rowIndex={Math.floor(i / 7)}
          date={dateArr[i]}
          setIsOpenDrawer={setIsOpenDrawer}
          monthlyData={monthlyData}
          view={view}
          maxEventCount={maxEventCount}
          setMaxEventCount={setMaxEventCount}
          isExpend={isExpend}
          dateCellRef={dateCellRef}
        />
      );
      rowShadow.push(
        <DateCellCanvas
          key={`datecell-${i}`}
          rowIndex={Math.floor(i / 7)}
          date={dateArr[i]}
        />
      );
      if (i % 7 === 6) {
        const rowIndex = Math.floor(i / 7);
        rowArr.push(
          <div
            key={`row-${rowIndex}`}
            className={`dateCell__row row-${rowIndex}`}
          >
            <div className="dateCell__canvas">{rowShadow}</div>
            <div className="dateCell__content"> {row}</div>
          </div>
        );
        row = [];
        rowShadow = [];
      }
    }
    return rowArr;
  };

  return (
    <MonthlySTY rows={dateArr.length / 7}>
      <div className="headerCells" onClick={handleTESTFowardRef}>
        {wkDays.map((item, i) => (
          <div
            key={`day-${i}`}
            className={`cell headerCell ${i === 0 || i === 6 ? "weekend" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="dateCells">{renderRow()}</div>
    </MonthlySTY>
  );
};

export default MonthlyView;
