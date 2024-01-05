import React from "react";
import { useRouter } from "next/router";
import {
  TimeIcon,
  CalendarIcon,
  TagIcon,
  Textarea,
  AnnotationIcon
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UIContext } from "@contexts/scheduleContext/UIProvider";
import LeaveTypePicker from "@contents/Shift/LeaveTypePicker";
import { updateSchedule } from "@services/schedule/updateSchedule";
import { getScheduleUpdateList } from "@services/schedule/getScheduleUpdateList";
import { updateScheduleSign } from "@services/schedule/updateScheduleSign";
import {
  formatToDB,
  getDayStart,
  formatToDBDate,
  formatDate
} from "../shift.util";

const EditForm = ({ refetch }: { refetch: () => void }) => {
  const scheduleUI = React.useContext(UIContext);
  const router = useRouter();
  const { id } = router.query;

  //------ functions ------//
  const handleSignOff = React.useCallback(
    (e: any) => {
      const updatedInsertData = { ...scheduleUI.insertData };
      updatedInsertData.check_Status = e.target.value;
      scheduleUI.setInsertData(updatedInsertData);
    },
    [scheduleUI.insertData]
  );
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
      updatedData.schd_Date = formatToDBDate(getDayStart(scheduleUI.startDate));
      updatedData.schd_Start_Time = formatToDB(scheduleUI.startDate);
      updatedData.schd_End_Time = formatToDB(scheduleUI.endDate);
      try {
        updatedData.check_Status
          ? await updateScheduleSign(updatedData)
          : await updateSchedule(updatedData);
        scheduleUI.resetState();
        // scheduleUI.setFlag(!scheduleUI.flag);
        refetch && refetch();
        // TODO: refactor this part below
        const result = await getScheduleUpdateList(
          scheduleUI.insertData.drv_Schedule_No,
          scheduleUI.insertData.driver_No
        );
        const updateViewEventList = [result.data];
        // update UI
        scheduleUI.setViewEventList(updateViewEventList);

        const cellTimestamp = getDayStart(
          new Date(updatedData.schd_Date)
        ).valueOf();
        scheduleUI.setDrawerType({
          type: "view",
          title: formatDate(new Date(cellTimestamp)),
          timestamp: cellTimestamp
        });
      } catch (e: any) {
        alert(e.message);
      }
    },
    [scheduleUI.insertData, scheduleUI.startDate, scheduleUI.endDate, id]
  );

  return (
    <FormSTY onSubmit={handleSubmit}>
      <section className="form__startTime">
        <label className="form__label">
          <TimeIcon />
          <span>開始時間</span>
        </label>
        <p>DELETED TIME-PICKER, PLEASE CHECK</p>
      </section>
      <section className="form__endTime">
        <label className="form__label">
          <TimeIcon />
          <span>結束時間</span>
        </label>
        <p>DELETED TIME-PICKER, PLEASE CHECK</p>
      </section>
      <section className="form__leaveCode">
        <label className="form__label">
          <CalendarIcon />
          <span>假別</span>
        </label>
        <LeaveTypePicker />
      </section>
      <section className="form__description">
        <label className="form__label">
          <TagIcon />
          <span>說明</span>
        </label>
        <Textarea
          onChange={handleDescription}
          value={scheduleUI.insertData.leave_Description}
          // {...register("leave_Description", {})}
        />
      </section>
      {scheduleUI.drawerType.title === "簽核" ? (
        <section className="form_signOff">
          <label className="form__label">
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

      <button className="drawer__btn">確定</button>
    </FormSTY>
  );
};

export default EditForm;
