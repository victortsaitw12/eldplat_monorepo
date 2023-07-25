import React from "react";
import {
  ThemeProvider,
  mergeTheme,
  defaultTheme,
  Checkbox,
  ChevronLeftIcon,
  ChevronRightIcon
} from "evergreen-ui";
import theme from "@styles/theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimepickerSTY } from "./style";
import { UIContext } from "@contexts/scheduleContext/UIProvider";
import { getDayEnd, getDayStart } from "@contents/Shift/shift.util";
import TimeInput from "@components/Timepicker/TimeInput";
import dayjs from "dayjs";

const customTheme = mergeTheme(defaultTheme, {
  components: {
    Select: {
      baseStyle: {
        selectors: {
          _disabled: {
            backgroundColor: "#F1F6FD"
          }
        }
      }
    }
  }
});

const Timepicker = ({
  type,
  date,
  setDate,
  fullDay,
  minDate
}: {
  type: "start" | "end";
  date: Date; // UI.startDate or UI.endDate
  setDate: (date: Date) => void;
  fullDay: boolean;
  minDate?: Date;
}) => {
  const UI = React.useContext(UIContext);
  const dateBase = getDayStart(date); // 僅存在 <Timepicker/>裡面做為計算基準
  const [isFullDay, setIsFullDay] = React.useState(fullDay);

  //------ functions ------//
  const handleDateChange = (v: Date) => {
    // case: 使用者把開始時間選在結束時間後 => 把結束時間設成開始日的23:59
    if (type == "start" && v > UI.endDate) UI.setEndDate(getDayEnd(v));
    setDate(v);
  };

  const handleTimeinputChange = (v: string) => {
    // TODO currently called when anything changed(insertData), description, schd_type, etc.
    if (v === dayjs(date).format("YYYY-MM-DD HH:mm")) return;
    setDate(dayjs(v).toDate());
  };

  //------ useEffect ------//

  //------ customize datepicker ------//
  const renderCustomHeader = ({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth
  }: any) => (
    <div>
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        style={{ visibility: customHeaderCount === 1 ? "hidden" : "visible" }}
        onClick={decreaseMonth}
      >
        <ChevronLeftIcon
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
          }
          color={theme.color.N600}
        />
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("zh-TW", {
          month: "long",
          year: "numeric"
        })}
      </span>
      <button
        aria-label="Next Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--next"
        }
        style={{ visibility: customHeaderCount === 0 ? "hidden" : "visible" }}
        onClick={increaseMonth}
      >
        <ChevronRightIcon
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
          }
          color={theme.color.N600}
        />
      </button>
    </div>
  );
  return (
    <ThemeProvider value={customTheme}>
      <TimepickerSTY>
        <DatePicker
          selected={type === "start" ? UI.startDate : UI.endDate}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat={"yyyy / MM / dd, hh:mm aa"}
          monthsShown={2}
          portalId="root-portal"
          renderCustomHeader={renderCustomHeader}
          startDate={UI.startDate}
          endDate={UI.endDate}
        />
        <TimeInput
          date={dayjs(date).format("YYYY-MM-DD HH:mm")}
          setDate={handleTimeinputChange}
          disabled={isFullDay}
        />
        <Checkbox
          label="整天"
          checked={isFullDay}
          onChange={(e) => {
            if (e.target.checked) {
              type === "start"
                ? setDate(getDayStart(dateBase))
                : setDate(getDayEnd(dateBase));
              setIsFullDay(true);
            } else {
              setIsFullDay(false);
            }
          }}
          style={{ placeSelf: "end" }}
        />
      </TimepickerSTY>
    </ThemeProvider>
  );
};

export default Timepicker;
