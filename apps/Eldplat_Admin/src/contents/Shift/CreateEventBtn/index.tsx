import React from "react";
import { AddIcon } from "evergreen-ui";
import { CreateEventBtnSTY } from "./style";
import { getDayStart, getDayEnd } from "../shift.util";

import { UIContext } from "@contexts/scheduleContext/UIProvider";

interface I_Props {
  cellTimestamp: number;
  selectType?: string;
  view: "monthly" | "daily";
}

const CreateEventBtn = ({ cellTimestamp, view, selectType = "" }: I_Props) => {
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
        isOpaque={cellTimestamp === scheduleUI.startDate?.valueOf()}
        onMouseDown={handleSelectStardDate.bind(null, cellTimestamp)}
        className={`${selectType}`}
      >
        <AddIcon />
      </CreateEventBtnSTY>
    </>
  );
};

export default CreateEventBtn;
