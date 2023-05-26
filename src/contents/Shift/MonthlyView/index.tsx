import React from "react";
import { useRouter } from "next/router";
import { Spinner, Pane } from "evergreen-ui";
import { MonthlySTY, MouseMenuBtnSTY } from "./style";
import { getTotalDays, getLastMonthTotalDays, debounce } from "../shift.util";
import { MonthlyData, DateArrItem } from "../shift.typing";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getScheduleList } from "@services/schedule/getScheduleList";
import DateCell from "@contents/Shift/DateCell";
import DateCellCanvas from "@contents/Shift/DateCellCanvas";

const MonthlyView = ({
  initialMonthFirst,
  setIsOpenDrawer,
  monthlyData,
  setMonthlyData,
  view,
  isExpand
}: {
  initialMonthFirst: Date;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  setMonthlyData: (data: MonthlyData[] | null) => void;
  view: "monthly" | "daily";
  isExpand: boolean;
}) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  UI.setId(router.query.id);
  const { cur } = router.query;
  const dateCellRef = React.useRef<HTMLDivElement>(null);
  const initMaxEventCountRef = React.useRef(null);
  const [maxEventCount, setMaxEventCount] = React.useState<number>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ variables ------//
  const wkDays = ["日", "一", "二", "三", "四", "五", "六"];
  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );

  //------ functions ------//
  const renderCreateForm = () => {
    UI.setIsSelect(false);
    UI.setDrawerType({
      type: "create",
      title: "新增"
    });
    setIsOpenDrawer(true);
  };

  const handleEventCount = React.useCallback(() => {
    const eventH = 20;
    const gapH = 4;
    const cellH = dateCellRef.current?.offsetHeight || 16;
    const cellPd = 8;
    const updateMaxEventCount = Math.floor(
      (cellH - cellPd * 2 - eventH) / (eventH + gapH)
    );
    console.log("dateCellRef:", dateCellRef);
    setMaxEventCount(updateMaxEventCount);
    if (initMaxEventCountRef.current === null) {
      initMaxEventCountRef.current = updateMaxEventCount;
    }
  }, []);

  // ------- useEffect ------- //
  // monitor window for eventCount shown
  React.useEffect(() => {
    handleEventCount();
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", debounce(handleEventCount, 250));
    return () => {
      window.removeEventListener("resize", debounce(handleEventCount, 250));
    };
  }, [handleEventCount]);

  React.useEffect(() => {
    console.log(isExpand);
    isExpand
      ? setMaxEventCount(99)
      : setMaxEventCount(initMaxEventCountRef.current);
  }, [isExpand]);

  // fetch data from db
  React.useEffect(() => {
    if (!UI.id) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const updated = { ...UI.insertData };
        updated.driver_no = UI.id;
        UI.setInsertData(updated);
        const result = await getScheduleList(UI.id);
        setMonthlyData(result.data);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [UI.id, cur, UI.flag, setMonthlyData]);

  // handle isSelect end
  React.useEffect(() => {
    if (UI.isSelect) document.addEventListener("mouseup", renderCreateForm);
    return () => {
      document.removeEventListener("mouseup", renderCreateForm);
    };
  }, [UI.isSelect]);

  //------ render ------//
  const dateArr: Array<DateArrItem> = [];
  // prev month
  const lastSunday = new Date(
    curMonthFirst.valueOf() - curMonthFirst.getDay() * 86400000
  );

  for (let i = 0; i < curMonthFirst.getDay(); i++) {
    dateArr.push({
      date: lastSunday.getDate() + i,
      day: i,
      timestamp: lastSunday.valueOf() + 86400000 * i,
      disabled: true
    });
  }
  for (let i = 0; i < getTotalDays(curMonthFirst); i++) {
    dateArr.push({
      date: i + 1,
      day: (curMonthFirst.getDay() + i) % 7,
      timestamp: curMonthFirst.valueOf() + 86400000 * i,
      disabled: false
    });
  }
  // next month
  const curMonthLast = new Date(
    curMonthFirst.valueOf() + (getTotalDays(curMonthFirst) - 1) * 86400000
  );
  for (let i = 1; i <= 6; i++) {
    dateArr.push({
      date: i,
      day: curMonthLast.getDay() + i,
      timestamp: curMonthLast.valueOf() + 86400000 * i,
      disabled: true
    });
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
      <div className="headerCells">
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

      {isLoading ? (
        <Pane
          className="coverAll"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={400}
        >
          <Spinner className="spinner" />
        </Pane>
      ) : (
        ""
      )}
      {UI.isMouseMenuBtn && (
        <MouseMenuBtnSTY
          style={{ top: UI.mousePosition.y, left: UI.mousePosition.x }}
        >
          Next Month View
        </MouseMenuBtnSTY>
      )}
    </MonthlySTY>
  );
};

export default MonthlyView;
