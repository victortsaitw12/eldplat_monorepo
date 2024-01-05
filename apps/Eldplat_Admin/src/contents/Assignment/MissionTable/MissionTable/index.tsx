import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import { MissionData } from "@contents/Assignment/assignment.typing";

import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusTable/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";
import PaginationField from "@components/PaginationField";
import SecondaryBtn from "@components/Button/Secondary/Label";
import MissionArea from "@contents/Assignment/MissionTable/MissionArea";

interface I_OverviewTable {
  data: MissionData[];
  initialDate: Date;
}
const MissionTable = ({ data, initialDate }: I_OverviewTable) => {
  //------ functions ------//
  const missionList: I_MonthItem[] = useMemo(() => {
    const dateArr: I_MonthItem[] = timeUtil.getNowMonthList(initialDate);
    dateArr.forEach((item) => {
      const matchingData = data.filter(
        (timeData) => timeData.mission_Date === item.date
      );
      if (matchingData.length !== 0) {
        item.detail = matchingData;
      }
    });
    return dateArr;
  }, [data, initialDate]);

  return (
    <OverviewSTY className="overviewTable">
      <div className="header">
        <PaginationField />
      </div>
      <div className="table">
        <div className="table_header">
          <div className="header_date">
            <p>日期</p>
          </div>
          <div className="table_header_info">
            <div className="w_4">
              <p>任務單號</p>
            </div>
            <div className="w_2">
              <p>分類</p>
            </div>
            <div className="w_2">
              <p>需求</p>
            </div>
            <div className="w_2">
              <p>出發地</p>
            </div>
            <div className="w_3">
              <p>起始時間</p>
            </div>
            <div className="w_3">
              <p>截止時間</p>
            </div>
          </div>
        </div>
        <div className="table_body">
          {missionList.map((mission, index) => {
            return <MissionArea key={index} data={mission} />;
          })}
        </div>
      </div>
    </OverviewSTY>
  );
};
export default MissionTable;
