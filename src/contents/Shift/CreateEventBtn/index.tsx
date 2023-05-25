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
  const UI = React.useContext(UIContext);

  //------ functions ------//
  const handleSelectStardDate = (timestamp: number) => {
    const selectedDT =
      view === "monthly"
        ? getDayStart(new Date(timestamp))
        : new Date(timestamp);
    UI.setIsSelect(true);
    UI.setStartDate(selectedDT);
    view === "monthly"
      ? UI.setEndDate(getDayEnd(selectedDT))
      : UI.setEndDate(new Date(parseInt(timestamp + UI.timeframe)));
  };

  return (
    <>
      <CreateEventBtnSTY
        startDate={UI.startDate}
        value={cellTimestamp}
        onMouseDown={handleSelectStardDate.bind(null, cellTimestamp)}
        className={`${selectType}`}
      >
        <AddIcon style={{ color: "#D5E2F1" }} />
      </CreateEventBtnSTY>
    </>
  );
};

export default CreateEventBtn;
