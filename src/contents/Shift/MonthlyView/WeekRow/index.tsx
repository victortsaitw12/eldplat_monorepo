import React from "react";
import { DivSTY } from "./style";
import { MonthlyData, DateArrItem } from "../../shift.typing";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import DateCell from "@contents/Shift/MonthlyView/DateCell";
import DateCellCanvas from "@contents/Shift/MonthlyView/DateCellCanvas";

interface I_Props {
  dateArr: DateArrItem[];
  idx: number;
  setIsOpenDrawer: (value: boolean) => void;
  monthlyData: MonthlyData[] | null;
  view: "monthly" | "daily";
}

const eventH = 24; // (Icon)16px + 4px * 2  > (font)0.86rem + 4px * 2
const gapH = 4;
const cellPd = 8;
const minCellH = eventH * 3 + gapH * 2 + cellPd;

const WeekRow = ({
  dateArr,
  idx,
  setIsOpenDrawer,
  monthlyData,
  view
}: I_Props) => {
  const scheduleUI = React.useContext(UIContext);
  const dateCellRef = React.useRef<HTMLDivElement>(null);
  const [initMaxEventCount, setInitMaxEventCount] = React.useState<
    number | null
  >(null);
  const [maxEventCount, setMaxEventCount] = React.useState<number | null>(null);

  //------ functions ------//
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
  }, [scheduleUI.monthCount]);

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
    <DivSTY
      key={`wk-${idx}`}
      minCellH={minCellH}
      className={`dateCell__row row-${idx}`}
    >
      <div className="dateCell__canvas">{rowShadow}</div>
      <div className="dateCell__content"> {row}</div>
    </DivSTY>
  );
};

export default WeekRow;
