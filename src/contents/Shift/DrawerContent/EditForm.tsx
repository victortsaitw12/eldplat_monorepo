import React from "react";
import { useRouter } from "next/router";
import {
  SmallTickIcon,
  TimeIcon,
  CalendarIcon,
  TagIcon,
  Textarea,
  AnnotationIcon
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import Timepicker from "@components/Timepicker";
import LeaveTypePicker from "@contents/Shift/LeaveTypePicker";
import { updateSchedule } from "@services/schedule/updateSchedule";
import { updateScheduleSign } from "@services/schedule/updateScheduleSign";
import { formatToDB, getDayStart } from "../shift.util";

const EditForm = ({
  setIsOpenDrawer
}: {
  setIsOpenDrawer: (value: boolean) => void;
}) => {
  const UI = React.useContext(UIContext);
  const router = useRouter();
  const { id } = router.query;

  //------ functions ------//
  const handleSignOff = React.useCallback(
    (e: any) => {
      const updatedInsertData = { ...UI.insertData };
      updatedInsertData.check_Status = e.target.value;
      UI.setInsertData(updatedInsertData);
    },
    [UI.insertData]
  );
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
        updatedData.check_Status
          ? await updateScheduleSign(updatedData)
          : await updateSchedule(updatedData);
        updatedData.check_Status
          ? console.log("updateScheduleSign")
          : console.log("updateScheduleSign:", JSON.stringify(updatedData));
        UI.resetState();
        UI.setFlag(!UI.flag);
        setIsOpenDrawer(false);
      } catch (e: any) {
        alert(e.message);
      }
    },
    [UI.insertData, UI.startDate, UI.endDate, id]
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
          fullDay={false}
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
          fullDay={false}
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
      {UI.drawerType.title === "簽核" ? (
        <section className="form_signOff">
          <label>
            <AnnotationIcon />
            <span>簽核</span>
          </label>
          <div className="form_signOff-container">
            <div className="form_signOff-option">
              <input
                type="radio"
                id="signOff-1"
                name="signOff"
                value="1"
                onChange={handleSignOff}
              />
              <label htmlFor="signOff-1">核准</label>
            </div>
            <div className="form_signOff-option">
              <input
                type="radio"
                id="signOff-2"
                name="signOff"
                value="2"
                onChange={handleSignOff}
              />
              <label htmlFor="signOff-2">退回</label>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      <button className="drawer__btn">
        <SmallTickIcon />
        確定
      </button>
    </FormSTY>
  );
};

export default EditForm;
