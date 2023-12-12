import React from "react";
import {
  Group,
  Button,
  IconButton,
  ChevronLeftIcon,
  ChevronRightIcon,
  Pane
} from "evergreen-ui";

import { formatYYYYMM } from "@contents/Schedule/shift.util";
import { UIContext } from "@contexts/scheduleContext/UIProvider";
import timeUtil from "../schedule.timeUtil";

const MonthPicker = ({
  initialDate,
  onMonthChange
}: {
  initialDate: Date;
  onMonthChange?: (v: Date) => void;
}) => {
  const UI = React.useContext(UIContext);

  //------ functions ------//
  const handlePrev = () => {
    const newMonth = timeUtil.getOtherMonth(initialDate, "prevMonth");
    updateMonthCount(newMonth);

  };
  const handleNext = () => {
    const newMonth = timeUtil.getOtherMonth(initialDate, "nextMonth"); 
    updateMonthCount(newMonth);
  };
  const handleToday = () => {
    updateMonthCount(new Date());
  };
  const updateMonthCount = (v: Date) => {
    if (!onMonthChange) return;
    onMonthChange(v);
  };
  return (
    <Pane display="flex" padding={8} paddingRight={12}>
      <Button marginRight={5} onClick={handleToday}>今天</Button>
      <Group>
        <IconButton icon={ChevronLeftIcon} onClick={handlePrev} />
        <Button>{formatYYYYMM(initialDate)}</Button>
        <IconButton icon={ChevronRightIcon} onClick={handleNext} />
      </Group>
    </Pane>
  );
};

export default MonthPicker;
