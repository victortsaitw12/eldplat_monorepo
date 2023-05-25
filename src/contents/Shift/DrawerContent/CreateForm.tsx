import React from "react";
import { useRouter } from "next/router";
import {
  SmallTickIcon,
  TimeIcon,
  CalendarIcon,
  TagIcon,
  Textarea
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import Timepicker from "@components/Timepicker";
import LeaveTypePicker from "@contents/Shift/LeaveTypePicker";
import { createSchedule } from "@services/schedule/createSchedule";

import { formatToDB, getDayStart, formatToDBDate } from "../shift.util";

const CreateForm = ({
  setIsOpenDrawer,
  view
}: {
  setIsOpenDrawer: (value: boolean) => void;
  view: "monthly" | "daily";
}) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const { id } = router.query;

  //------ functions ------//
  const handleDescription = React.useCallback(
    (e: any) => {
      const updatedInsertData = { ...UI.insertData };
      updatedInsertData.leave_Description = e.target.value;
      UI.setInsertData(updatedInsertData);
    },
    [UI.insertData]
  );

  const handleSubmit = React.useCallback(
    async (e: any) => {
      e.preventDefault();
      const updatedData = { ...UI.insertData };
      updatedData.driver_No = id;
      updatedData.schd_Date = formatToDB(getDayStart(UI.startDate));
      updatedData.schd_Start_Time = formatToDB(UI.startDate);
      updatedData.schd_End_Time = formatToDB(UI.endDate);
      try {
        await createSchedule(updatedData);
        UI.resetState();
        UI.setFlag(!UI.flag);
        setIsOpenDrawer(false);
      } catch (e: any) {
        alert(e.message);
      }
    },
    [UI.insertData, UI.startDate, UI.endDate]
  );

  return (
    <FormSTY onSubmit={handleSubmit}>
      <section className="form__startTime">
        <label>
          <TimeIcon />
          <span>開始時間</span>
        </label>
        <Timepicker
          type="start"
          date={UI.startDate}
          setDate={UI.setStartDate}
          fullDay={view === "monthly" ? true : false}
        />
      </section>
      <section className="form__endTime">
        <label>
          <TimeIcon />
          <span>結束時間</span>
        </label>
        <Timepicker
          type="end"
          date={UI.endDate}
          setDate={UI.setEndDate}
          fullDay={view === "monthly" ? true : false}
          minDate={UI.startDate}
        />
      </section>
      <section className="form__leaveCode">
        <label>
          <CalendarIcon />
          <span>假別</span>
        </label>
        <LeaveTypePicker />
      </section>
      <section className="form__description">
        <label>
          <TagIcon />
          <span>說明</span>
        </label>
        <Textarea
          onChange={handleDescription}
          value={UI.insertData.leave_Description}
          // {...register("leave_Description", {})}
        />
      </section>

      <button className="drawer__btn">
        <SmallTickIcon />
        確定
      </button>
    </FormSTY>
  );
};

export default CreateForm;
