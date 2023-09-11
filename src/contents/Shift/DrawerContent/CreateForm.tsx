import React from "react";
import { useRouter } from "next/router";
import {
  TimeIcon,
  CalendarIcon,
  TagIcon,
  Textarea,
  toaster
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import Timepicker from "@components/Timepicker";
import LeaveTypePicker from "@contents/Shift/LeaveTypePicker";
import { createSchedule } from "@services/schedule/createSchedule";

import { formatToDB, getDayStart } from "../shift.util";

const CreateForm = ({
  setIsOpenDrawer,
  view
}: {
  setIsOpenDrawer: (value: boolean) => void;
  view: "monthly" | "daily";
}) => {
  const scheduleUI = React.useContext(UIContext);
  const router = useRouter();
  const { id } = router.query;
  //------ functions ------//
  const handleDescription = React.useCallback(
    (e: any) => {
      const updatedInsertData = { ...scheduleUI.insertData };
      updatedInsertData.leave_Description = e.target.value;
      scheduleUI.setInsertData(updatedInsertData);
    },
    [scheduleUI.insertData]
  );

  const handleSubmit = React.useCallback(
    async (e: any) => {
      e.preventDefault();
      const updatedData = { ...scheduleUI.insertData };
      updatedData.driver_No = id;
      updatedData.schd_Date = formatToDB(getDayStart(scheduleUI.startDate));
      updatedData.schd_Start_Time = formatToDB(scheduleUI.startDate);
      updatedData.schd_End_Time = formatToDB(scheduleUI.endDate);
      try {
        const res = await createSchedule(updatedData);
        if (res.statusCode === "200") {
          // await refetch();
          toaster.success("新增成功", {
            duration: 1.5
          });
          console.log("res:", res);
          scheduleUI.resetState();
          scheduleUI.setFlag(!scheduleUI.flag);
          setIsOpenDrawer(false);
        } else {
          throw Error(res.resultString);
        }
      } catch (e: any) {
        toaster.warning(e.message, {
          duration: 1.5
        });
      }
    },
    [scheduleUI.insertData, scheduleUI.startDate, scheduleUI.endDate]
  );

  return (
    <FormSTY onSubmit={handleSubmit}>
      <section className="form__startTime">
        <label className="form__label">
          <TimeIcon />
          <span>開始時間</span>
        </label>
        <Timepicker
          type="start"
          date={scheduleUI.startDate}
          setDate={scheduleUI.setStartDate}
          fullDay={view === "monthly" ? true : false}
        />
      </section>
      <section className="form__endTime">
        <label className="form__label">
          <TimeIcon />
          <span>結束時間</span>
        </label>
        <Timepicker
          type="end"
          date={scheduleUI.endDate}
          setDate={scheduleUI.setEndDate}
          fullDay={view === "monthly" ? true : false}
          minDate={scheduleUI.startDate}
        />
      </section>
      <section className="form__leaveCode">
        <label className="form__label">
          <CalendarIcon />
          <span>假別</span>
        </label>
        <LeaveTypePicker date={scheduleUI.startDate} />
      </section>
      <section className="form__description">
        <label className="form__label">
          <TagIcon />
          <span>說明</span>
        </label>
        <Textarea
          onChange={handleDescription}
          value={scheduleUI.insertData.leave_Description}
        />
      </section>

      <button className="drawer__btn">確定</button>
    </FormSTY>
  );
};

export default CreateForm;
