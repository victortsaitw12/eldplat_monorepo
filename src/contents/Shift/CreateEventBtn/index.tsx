import React from "react";
import { AddIcon } from "evergreen-ui";
import { CreateEventBtnSTY } from "./style";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

import { getDayStart, getDayEnd } from "../shift.util";

const CreateEventBtn = ({
  cellTimestamp,
  view,
  selectType = ""
}: {
  cellTimestamp: number;
  selectType?: string;
  view: "monthly" | "daily";
}) => {
  const scheduleUI = React.useContext(UIContext);

  //------ functions ------//
  const handleSelectStardDate = (timestamp: number) => {
    scheduleUI.resetState();
    const selectedDT =
      view === "monthly"
        ? getDayStart(new Date(timestamp))
        : new Date(timestamp);
    scheduleUI.setIsSelect(true);
    scheduleUI.setStartDate(selectedDT);
    view === "monthly"
      ? scheduleUI.setEndDate(getDayEnd(selectedDT))
      : scheduleUI.setEndDate(
          new Date(parseInt(timestamp + scheduleUI.timeframe))
        );
  };

  return (
    <>
      <CreateEventBtnSTY
        startDate={scheduleUI.startDate}
        value={cellTimestamp}
        onMouseDown={handleSelectStardDate.bind(null, cellTimestamp)}
        className={`${selectType} cell__createEventBtn`}
      >
        <AddIcon style={{ color: "#D5E2F1" }} />
      </CreateEventBtnSTY>
    </>
  );
};

export default CreateEventBtn;
