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
  const [maxEventCount, setMaxEventCount] = React.useState<number | null>(
    initEventCount
  );

  React.useEffect(() => {
    setMaxEventCount(initEventCount);
  }, [initEventCount]);

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
        {" "}
        {dateArr.map((date, i) => (
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
        ))}
      </div>
    </DivSTY>
  );
};

export default WeekRow;
