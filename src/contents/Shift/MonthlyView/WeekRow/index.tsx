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
  fillAvailableEventCount: number;
}

const minCellH = eventH * 3 + gapH * 2 + cellPd * 2;

const WeekRow = ({
  dateArr,
  idx,
  setIsOpenDrawer,
  monthlyData,
  view,
  fillAvailableEventCount
}: I_Props) => {
  const [maxEventCount, setMaxEventCount] = React.useState<number | null>(
    fillAvailableEventCount
  );

  React.useEffect(() => {
    setMaxEventCount(fillAvailableEventCount);
  }, [fillAvailableEventCount]);

  // React.useEffect(() => {
  //   setMaxEventCount(initEventCount);
  // }, [initEventCount]);

  return (
    <DivSTY key={`wk-${idx}`} minCellH={minCellH} className={`row-${idx}`}>
      <div className="dateCell__canvas">
        {dateArr.map((date, i) => (
          <DateCellCanvas
            key={`datecell-${i}`}
            rowIndex={Math.floor(i / 7)}
            date={date}
          />
        ))}
      </div>
      <div className="dateCell__content">
        {dateArr.map((date, i) => (
          <DateCell
            key={`datecell-${i}`}
            rowIndex={Math.floor(i / 7)}
            date={date}
            setIsOpenDrawer={setIsOpenDrawer}
            monthlyData={monthlyData}
            view={view}
            maxEventCount={maxEventCount || 1}
          />
        ))}
      </div>
    </DivSTY>
  );
};

export default WeekRow;
