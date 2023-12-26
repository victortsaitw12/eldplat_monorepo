import React from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
// import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import { DispatchData } from "@contents/Assignment/assignment.typing";

import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusTable/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";
import PaginationField from "@components/PaginationField";
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { ChevronDownIcon, EditIcon, PlusIcon } from "evergreen-ui";

interface I_OverviewTable {
  data: DispatchData[];
}
const DispatchArea = ({ data }: I_OverviewTable) => {
  const router = useRouter();

  //------ functions ------//
  // const renderShifts = (date: DateItem, scheduleInfo: ScheduleInfoData[]) => {
  //   const shiftsOnDate = scheduleInfo.filter(
  //     (item: ScheduleInfoData) =>
  //       getDayStart(new Date(item.schd_Start_Time)) <=
  //         new Date(date.timestamp.valueOf()) &&
  //       new Date(item.schd_End_Time) >= new Date(date.timestamp.valueOf())
  //   );
  // };
  return (
    <div className="dispatch_area">
      {data.map((item, index) => {
        return (
          <div key={index} className="dispatch_table">
            <div className="dispatch_header">
              <p>{item.dispatch_Start_Date}</p>
            </div>
            <div className="dispatch_row">
              <div className="dispatch_title">
                <p>第一車</p>
              </div>
              <div className="dispatch_info_wrapper">
                <div className="dispatch_info">
                  <div className="dw_1">
                    <p>台北車站 -{">"} 日月潭飯店</p>
                  </div>
                  <div className="dw_1">
                    <p>08 : 00 ～ 21 : 00</p>
                  </div>
                  <div className="dw_1">
                    <p className="font_main pb_1">KAA-0001 奶油雄獅</p>
                    <p className="font_sub">中巴 36客座 一年</p>
                  </div>
                  <div className="dw_1">
                    <p className="font_main pb_1">吳中華</p>
                    <p className="font_sub">0912-345-678 </p>
                  </div>
                  <div className="dw_1">
                    <p>我是備註</p>
                  </div>
                </div>
                <div className="dispatch_info_button">
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      router.push(
                        "/assignment/dispatch/detail/K001?editPage=edit"
                      );
                    }}
                  >
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="dispatch_button">
        <SecondaryBtn
          text="新增派單"
          onClick={() => router.push("/assignment/dispatch")}
        >
          <PlusIcon />
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default DispatchArea;
