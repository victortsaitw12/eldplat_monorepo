import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";

import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
// import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import { DispatchData } from "@contents/Assignment/assignment.typing";

import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";
import PaginationField from "@components/PaginationField";
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { ChevronDownIcon, EditIcon, PlusIcon } from "evergreen-ui";
import CustomTextInput from "@components/CustomTextInput";
import CustomTextArea from "@components/CustomTextArea";


const DispatchArea = () => {
  const router = useRouter();
  const [data, setData] = useState<Array<{dispatch_Start_Date: string}>>([]);
  //------ functions ------//
  // const renderShifts = (date: DateItem, scheduleInfo: ScheduleInfoData[]) => {
  //   const shiftsOnDate = scheduleInfo.filter(
  //     (item: ScheduleInfoData) =>
  //       getDayStart(new Date(item.schd_Start_Time)) <=
  //         new Date(date.timestamp.valueOf()) &&
  //       new Date(item.schd_End_Time) >= new Date(date.timestamp.valueOf())
  //   );
  // };
  useEffect(() => {
    setData([{
        dispatch_Start_Date: "2024-01-01(一)",
    },
    {
        dispatch_Start_Date: "2024-01-02(二)",
    }])
  }, []);

  return (
    <DivSTY className="dispatch_area">
      {data.map((item, index) => {
        return (
          <div key={index} className="dispatch_table">
            <div className="dispatch_header">
              <p>{item.dispatch_Start_Date}</p>
            </div>
            <div className="dispatch_row">
              <div className="dispatch_title">
                <p>第1車</p>
              </div>
              <div className="dispatch_info_wrapper">
                <div className="dispatch_info">
                    <p>台北車站 -{">"} 日月潭飯店</p>
                </div>
                <div  className="dispatch_inputs">
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextArea placeholder="請輸入備註" rows={1}/>
                    </div>
                </div>
            
              </div>
            </div>
            <div className="dispatch_row">
              <div className="dispatch_title">
                <p>第2車</p>
              </div>
              <div className="dispatch_info_wrapper">
                <div className="dispatch_info">
                    <p>台北車站 -{">"} 日月潭飯店</p>
                </div>
                <div  className="dispatch_inputs">
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextInput placeholder="Placeholder" />
                    </div>
                    <div className="item">
                        <CustomTextArea placeholder="請輸入備註" rows={1}/>
                    </div>
                </div>
            
              </div>
            </div>
          </div>
        );
      })}
    </DivSTY>
  );
};

export default DispatchArea;
