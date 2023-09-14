import React from "react";
import { DivSTY } from "./style";
import { MonthlyData, DateArrItem } from "../../shift.typing";
import { eventH, gapH, cellPd } from "../../shift.util";

import DateCell from "@contents/Shift/MonthlyView/DateCell";
import DateCellCanvas from "@contents/Shift/MonthlyView/DateCellCanvas";

interface I_Props {
  dateArr: DateArrItem[];
  idx: number;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  view: "monthly" | "daily";
  initEventCount: number;
}

const minCellH = eventH * 3 + gapH * 2 + cellPd;

const WeekRow = ({
  dateArr,
  idx,
  setIsOpenDrawer,
  monthlyData,
  view,
  initEventCount
}: I_Props) => {
  const dateCellRef = React.useRef<HTMLDivElement>(null);
  const [maxEventCount, setMaxEventCount] = React.useState<number | null>(null);

  //------ functions ------//
  React.useEffect(() => {
    setMaxEventCount(initEventCount);
  }, [initEventCount]);

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

  const row = dateArr.map((date, i) => (
    <DateCell
      key={`datecell-${i}`}
      rowIndex={Math.floor(i / 7)}
      date={date}
      setIsOpenDrawer={setIsOpenDrawer}
      monthlyData={monthlyData}
      view={view}
      maxEventCount={maxEventCount || 1}
      dateCellRef={dateCellRef}
    ></DateCell>
  ));
  const rowShadow = dateArr.map((date, i) => (
    <DateCellCanvas
      key={`datecell-${i}`}
      rowIndex={Math.floor(i / 7)}
      date={date}
    />
  ));

  return (
    <DivSTY key={`wk-${idx}`} minCellH={minCellH} className={`row-${idx}`}>
      <div className="dateCell__canvas">{rowShadow}</div>
      <div className="dateCell__content"> {row}</div>
    </DivSTY>
  );
};

export default WeekRow;
