import React from "react";
import {
  Group,
  Button,
  IconButton,
  ChevronLeftIcon,
  ChevronRightIcon
} from "evergreen-ui";

import { formatYYYYMM } from "@contents/Shift/shift.util";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

const MonthPicker = ({
  initialMonthFirst,
  onMonthChange
}: {
  initialMonthFirst: Date;
  onMonthChange?: (v: number) => void;
}) => {
  const UI = React.useContext(UIContext);

  const curMonthFirst: Date = new Date(
    initialMonthFirst.getFullYear(),
    initialMonthFirst.getMonth() + UI.monthCount,
    1
  );
  //------ functions ------//
  const handlePrev = () => {
    const updatedMonthCount = UI.monthCount - 1;
    UI.setMonthCount(updatedMonthCount);
    if (!onMonthChange) return;
    onMonthChange(updatedMonthCount);
  };
  const handleNext = () => {
    const updatedMonthCount = UI.monthCount + 1;
    UI.setMonthCount(updatedMonthCount);
    updateMonthCount(updatedMonthCount);
  };
  const updateMonthCount = (v: number) => {
    if (!onMonthChange) return;
    onMonthChange(v);
  };
  return (
    <Group className="monthPciker">
      <IconButton icon={ChevronLeftIcon} onClick={handlePrev} />
      <Button>{formatYYYYMM(curMonthFirst)}</Button>
      <IconButton icon={ChevronRightIcon} onClick={handleNext} />
    </Group>
  );
};

export default MonthPicker;
