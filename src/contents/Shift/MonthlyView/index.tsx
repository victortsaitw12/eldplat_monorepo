import React from "react";
import { useRouter } from "next/router";
import { MonthlySTY, MouseMenuBtnSTY } from "./style";
import { getTotalDays, debounce } from "../shift.util";
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
  const dateCellRef = React.useRef<HTMLDivElement>(null);
  // 初始頁面、resize 的顯示事件數: initMaxEventCount
  const [initMaxEventCount, setInitMaxEventCount] = React.useState<
    number | null
  >(null);
  // 配合zoombar展開收合 的顯示事件數: maxEventCount
  const [maxEventCount, setMaxEventCount] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ variables & constants ------//
  const wkDays = ["日", "一", "二", "三", "四", "五", "六"];
  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );
  const eventH = 24; // (Icon)16px + 4px * 2  > (font)0.86rem + 4px * 2
  const gapH = 4;
  const cellPd = 8;
  const minCellH = eventH * 3 + gapH * 2 + cellPd;

  //------ functions ------//
  const renderCreateForm = () => {
    UI.setIsSelect(false);
    UI.setDrawerType({
      type: "create",
      title: "新增"
    });
    setIsOpenDrawer(true);
  };

  const eventCount = React.useCallback(() => {
    const cellH =
      dateCellRef.current?.offsetHeight || eventH * 2 + gapH + cellPd; //保證至少eventCount=1
    const updateMaxEventCount = Math.floor(
      (cellH - cellPd * 2 - eventH) / (eventH + gapH)
    );
    return updateMaxEventCount <= 1 ? 1 : updateMaxEventCount;
  }, [dateCellRef]);
  const handleEventCount = React.useCallback(() => {
    const updateMaxEventCount = eventCount();
    setMaxEventCount(updateMaxEventCount);
    if (!initMaxEventCount) setInitMaxEventCount(updateMaxEventCount);
  }, [initMaxEventCount]);

  // ------- useEffect ------- //
  // monitor window for eventCount shown
  React.useEffect(() => {
    handleEventCount();
  }, [UI.monthCount]);

  // TODO feat: resize
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
          maxEventCount={maxEventCount || 1}
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
    <MonthlySTY rows={dateArr.length / 7} minCellH={minCellH}>
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
      <div style={{ paddingBottom: "68px" }}> </div>
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
