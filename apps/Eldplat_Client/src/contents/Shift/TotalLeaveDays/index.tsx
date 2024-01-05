import React from "react";
import dayjs from "dayjs";

import { UIContext } from "@contexts/scheduleContext/UIProvider";

interface I_Props {
  monthlyData: any;
  initialMonthFirst: any;
}

const TotalLeaveDays = ({ monthlyData, initialMonthFirst }: I_Props) => {
  const UI = React.useContext(UIContext);

  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );

  return (
    <div key="tabelTitle-type" className="container-header-left">
      {monthlyData && (
        <>
          <span className="red">
            休假天數{" "}
            {
              monthlyData?.find(
                (item: any) =>
                  dayjs(item.schd_Date).format("YYYY-MM") ===
                  dayjs(curMonthFirst).format("YYYY-MM")
              )?.total_Leave_Days
            }{" "}
            天
          </span>
        </>
      )}
    </div>
  );
};

export default TotalLeaveDays;
