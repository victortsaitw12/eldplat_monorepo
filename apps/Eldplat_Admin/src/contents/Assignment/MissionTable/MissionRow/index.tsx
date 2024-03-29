import React, { useState } from "react";
import { useRouter } from "next/router";
import { Checkbox, Table, TimelineEventsIcon } from "evergreen-ui";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
// import { OverviewSTY } from "./style";
import { WKDAY_LABEL, EVENT_TYPE } from "@contents/Schedule/shift.data";
import EventTag from "@contents/Schedule/EventTag";
import EventBtn from "@contents/Schedule/EventBtn";
import { getDayStart, TotalMS } from "@contents/Schedule/shift.util";
import {
  DriverData,
  ScheduleInfoData,
  DateItem
} from "@contents/Schedule/shift.typing";

import timeUtil, { type I_MonthItem } from "@utils/schedule.timeUtil";
import BusStatusTag from "@contents/Assignment/BusTable/BusStatusTag";
import { BUS_STATUS } from "@contents/Assignment/assignment.data";
import PaginationField from "@components/PaginationField";
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { MissionData } from "@contents/Assignment/assignment.typing";
import { ChevronDownIcon, EditIcon, PlusIcon } from "evergreen-ui";

import DispatchArea from "@contents/Assignment/MissionTable/DispatchArea";

interface I_OverviewTable {
  data: MissionData;
}
const MissionRow = ({ data }: I_OverviewTable) => {
  const router = useRouter();
  const [isOpenDispatch, setIsOpenDispatch] = useState(false);
  //------ functions ------//
  return (
    <div className="table_info_wrapper">
      <div
        className="mission_area"
        onClick={() => setIsOpenDispatch(!isOpenDispatch)}
      >
        <div className="table_info">
          <div className="w_4">
            <p className="font_main">{data.mssion_No}</p>
          </div>
          <div className="w_2">
            <p>{data.mission_Type}</p>
          </div>
          <div className="w_2">
            <p>{data.mission_Need}</p>
          </div>
          <div className="w_2">
            <p>{data.mission_Departure}</p>
          </div>
          <div className="w_3">
            <p className="font_sub pb_1">{data.mission_Start_Date}</p>
            <p>{data.mission_Start_Time}</p>
          </div>
          <div className="w_3">
            <p className="font_sub pb_1">{data.mission_End_Date}</p>
            <p>{data.mission_End_Time}</p>
          </div>
        </div>
        <div className="table_button">
          {data.dispatch_List?.length !== 0 ? (
            <>
              <button
                className="button_edit"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  router.push(
                    `/assignment/detail/${data.mssion_No}?editPage=edit`
                  );
                }}
              >
                <EditIcon size={16} />
              </button>
              <ChevronDownIcon size={14} />
            </>
          ) : (
            <>
              <button
                className="button_edit"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  router.push(
                    `/assignment/detail/${data.mssion_No}?editPage=edit`
                  );
                }}
              >
                <EditIcon size={16} />
              </button>
              <SecondaryBtn
                text="派單"
                onClick={() => {
                  router.push("/assignment/dispatch/create");
                }}
              />
            </>
          )}
        </div>
      </div>
      {/* v2 demo temporary */}
      {isOpenDispatch && data.dispatch_List?.length !== 0 && (
        <DispatchArea data={data.dispatch_List} />
      )}
    </div>
  );
};

export default MissionRow;
