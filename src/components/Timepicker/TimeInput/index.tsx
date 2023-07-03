import React from "react";
import {
  ThemeProvider,
  mergeTheme,
  defaultTheme,
  Select,
  Group,
  ChevronLeftIcon,
  ChevronRightIcon
} from "evergreen-ui";
import dayjs from "dayjs";
import theme from "@styles/theme";
import "react-datepicker/dist/react-datepicker.css";

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

const TimeInput = ({
  date,
  setDate,
  ...props
}: {
  date: string;
  setDate: (date: string) => void;
}) => {
  const [hour, setHour] = React.useState<number>(0);
  const [minute, setMinute] = React.useState<number>(0);
  const [timeslot, setTimeslot] = React.useState<number>(0);
  const dateBase = dayjs(date);

  React.useEffect(() => {
    const updatedDate = dayjs(dateBase)
      .add(hour + timeslot, "hour")
      .add(minute, "minute")
      .format("YYYY-MM-DDTHH:mm:ss");
    setDate(updatedDate);
  }, [setDate, dateBase, hour, minute, timeslot]);
  //------ functions ------//
  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHour(parseInt(e.target.value));
  };
  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinute(parseInt(e.target.value));
  };
  const handleTimeslotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        ? arr.push(
            <option selected value={0}>
              {i.toString().padStart(2, "0")}
            </option>
          )
        : arr.push(<option value={i}>{i.toString().padStart(2, "0")}</option>);
      i += 1;
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

  return (
    <ThemeProvider value={customTheme}>
      <Group className="startRow__time" style={{ gap: "8px" }}>
        <input {...props} value={date} style={{ display: "none" }} />
        <Select
          className="timepicker-time"
          value={hour}
          onChange={handleHourChange}
        >
          {hourOptions()}
        </Select>
        <span style={{ lineHeight: "32px" }}>:</span>
        <Select
          className="timepicker-time"
          value={minute}
          onChange={handleMinuteChange}
        >
          {minOptions()}
        </Select>
        <Select
          className="timepicker-time"
          value={timeslot}
          onChange={handleTimeslotChange}
        >
          {timeslotOptions()}
        </Select>
      </Group>
    </ThemeProvider>
  );
};

export default TimeInput;
