import React from "react";
import {
  ThemeProvider,
  mergeTheme,
  defaultTheme,
  Select,
  Group,
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
  date: Date;
  setDate: (date: Date) => void;
  fullDay: boolean;
  minDate?: Date;
}) => {
  const UI = React.useContext(UIContext);
  const [selectDate, setSelectDate] = React.useState(date);
  const [isFullDay, setIsFullDay] = React.useState(fullDay);
  const [hour, setHour] = React.useState(null);
  const [minute, setMinute] = React.useState(null);
  const [timeslot, setTimeslot] = React.useState(null);

  React.useEffect(() => {
    setSelectDate(date);
    if (!selectDate) return;
    if (!hour || !minute || !timeslot) return;
    const updateDate = new Date(
      selectDate.getFullYear(),
      selectDate.getMonth(),
      selectDate.getDate(),
      (hour + timeslot) % 24,
      minute
    );
    setDate(updateDate);
  }, [hour, minute, timeslot, date]);

  //------ functions ------//
  const handleDateChange = (date: Date) => {
    setSelectDate(date);
    if (UI.startDate === getDayStart(UI.endDate)) {
      UI.setStartDate(date);
      UI.setEndDate(getDayEnd(date));
    } else {
      type == "start" ? UI.setStartDate(date) : UI.setEndDate(date);
      if (type == "start" && date > UI.endDate) UI.setEndDate(getDayEnd(date));
    }
    setDate(date);
  };
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHour(parseInt(e.target.value));
  };
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinute(e.target.value);
  };
  const handleTimeslotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeslot(parseInt(e.target.value));
  };
  const hourOptions = () => {
    const options = [];
    let i = 0;
    while (i <= 12) {
      const option = { value: i, label: i.toString().padStart(2, "0") };
      options.push(option);
      i++;
    }
    const optionArr = options.map((item, i) =>
      i === 0 ? (
        <option key={`hour-${item.value}`} value={item.value} disabled selected>
          {item.label}
        </option>
      ) : (
        <option key={`hour-${item.value}`} value={item.value}>
          {item.label}
        </option>
      )
    );
    return optionArr;
  };
  const minOptions = () => {
    const arr = [];
    let i = 0;
    while (i < 60) {
      i === 0
        ? arr.push(<option selected>{i.toString().padStart(2, "0")}</option>)
        : arr.push(<option>{i.toString().padStart(2, "0")}</option>);
      i += 15;
    }
    arr.push(<option>59</option>);
    return arr;
  };
  const timeslotOptions = () => {
    const options = [
      { value: 0, label: "AM" },
      { value: 12, label: "PM" }
    ];
    const arr = options.map((option) => (
      <option key={`timeslot-${option.label}`} value={option.value}>
        {option.label}
      </option>
    ));

    return arr;
  };
  const renderCustomHeader = ({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth
  }) => (
    <div>
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
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
        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
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
      <TimepickerSTY isFullDay={isFullDay} type={type}>
        <DatePicker
          selected={selectDate}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat={"yyyy / MM / dd, hh:mm aa"}
          monthsShown={2}
          portalId="root-portal"
          renderCustomHeader={renderCustomHeader}
          startDate={UI.startDate}
          endDate={UI.endDate}
        />
        <Group className="startRow__time">
          {" "}
          <Select
            className="timepicker-time"
            value={hour}
            onChange={handleHourChange}
            disabled={isFullDay}
          >
            {hourOptions()}
          </Select>
          <span>:</span>
          <Select
            className="timepicker-time"
            value={minute}
            onChange={handleMinuteChange}
            disabled={isFullDay}
          >
            {minOptions()}
          </Select>
          <Select
            className="timepicker-time"
            value={timeslot}
            onChange={handleTimeslotChange}
            disabled={isFullDay}
          >
            {timeslotOptions()}
          </Select>
        </Group>
        <Checkbox
          label="整天"
          checked={isFullDay}
          onChange={(e) => {
            if (e.target.checked) {
              type === "start" ? setHour(0) : setHour(11);
              type === "start" ? setMinute(0) : setMinute(59);
              type === "start" ? setTimeslot(0) : setTimeslot(12);
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
