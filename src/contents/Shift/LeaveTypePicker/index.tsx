import React from "react";
import { Select, WarningSignIcon } from "evergreen-ui";
import { LeaveTypePickerSTY } from "./style";
import {
  LEAVE_CODE,
  SCHD_TYPE,
  CHECK_STATUS
} from "@contents/Shift/shift.data";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

const LeaveTypePicker = () => {
  const UI = React.useContext(UIContext);
  const [showLeaveCode, setShowLeaveCode] = React.useState(true);
  const schdType = UI.insertData.schd_Type;

  //------ functions ------//
  const handleLeaveType = (e: any) => {
    const updatedInsertData = { ...UI.insertData };
    updatedInsertData.schd_Type = e.target.value;

    if (e.target.value !== "03") {
      setShowLeaveCode(false);
      updatedInsertData.leave_Code = "";
    } else {
      setShowLeaveCode(true);
    }
    e.target.value === "04"
      ? (updatedInsertData.check_Status = "0")
      : (updatedInsertData.check_Status = "");
    UI.setInsertData(updatedInsertData);
  };
  const handleLeaveCode = (e: any) => {
    const updatedInsertData = { ...UI.insertData };
    updatedInsertData.leave_Code = e.target?.value;
    UI.setInsertData(updatedInsertData);
  };

  //------ render ------//

  const scheduleTypes = Array.from(SCHD_TYPE).map(([key, value]) => {
    if (key !== "01")
      return (
        <option
          key={"leaveType-" + key}
          value={key}
          color={value.color}
          className="option"
        >
          {value.label}
        </option>
      );
  });
  const leaveCode = Array.from(LEAVE_CODE).map(([key, value]) => (
    <option key={"leaveType-" + key} value={key} color={value.color}>
      {value.label}
    </option>
  ));

  return (
    <>
      <LeaveTypePickerSTY
        className="typeRows"
        color={SCHD_TYPE.get(UI.insertData.schd_Type)?.color || "N300"}
      >
        <Select value={UI.insertData.schd_Type} onChange={handleLeaveType}>
          {scheduleTypes}
        </Select>
        {schdType === "03" ? (
          <Select
            value={UI.insertData.leave_Code}
            onChange={handleLeaveCode}
            required
            onInvalid={(e: any) => e.target.setCustomValidity("請選取假別")}
            onInput={(e: any) => e.target.setCustomValidity("")}
          >
            <option value="" disabled className="selectPlaceholder">
              請選擇假別
            </option>
            {leaveCode}
          </Select>
        ) : (
          ""
        )}
        {schdType === "04" ? (
          <div className="leaveReminder">
            <WarningSignIcon className="leaveIcon" />
            {CHECK_STATUS.get("0")?.label}, 後續需確認主管簽核
          </div>
        ) : (
          ""
        )}
      </LeaveTypePickerSTY>
    </>
  );
};

export default LeaveTypePicker;
