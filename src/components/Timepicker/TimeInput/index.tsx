import React from "react";
import {
  ThemeProvider,
  mergeTheme,
  defaultTheme,
  Select,
  Group
} from "evergreen-ui";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

// ----- stateless variables ----- //
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

const hourOptions = Array.from({ length: 24 }, (_, i) => (
  <option key={`hour-${i}`} value={i.toString().padStart(2, "0")}>
    {i.toString().padStart(2, "0")}
  </option>
));

const minOptions = Array.from({ length: 60 }, (_, i) => (
  <option key={`hour-${i}`} value={i.toString().padStart(2, "0")}>
    {i.toString().padStart(2, "0")}
  </option>
));

interface I_Props {
  date: string;
  setDate: (date: string) => void;
  disabled?: boolean;
}

// ----- React component ----- //
const TimeInput = ({ date, setDate, disabled = false, ...props }: I_Props) => {
  const [hour, setHour] = React.useState<number | null>(
    date ? dayjs(date).hour() : null
  );
  const [minute, setMinute] = React.useState<number | null>(
    date ? dayjs(date).minute() : null
  );

  const dateBase = dayjs(date).startOf("day");

  React.useEffect(() => {
    if (hour === null || minute === null) return;
    const updatedDate = dayjs(dateBase)
      .add(hour % 24, "hour")
      .add(minute, "minute")
      .format("YYYY-MM-DD HH:mm");
    setDate(updatedDate);
  }, [hour, minute]);

  //------ functions ------//
  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHour(parseInt(e.target.value));
  };
  const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinute(parseInt(e.target.value));
  };

  return (
    <ThemeProvider value={customTheme}>
      <Group className="startRow__time" style={{ gap: "8px" }}>
        <input {...props} value={date} style={{ display: "none" }} />
        <Select
          className="timepicker-time"
          value={hour === null ? "" : hour}
          onChange={handleHourChange}
          disabled={!date || disabled || hour === null || minute === null}
        >
          <option value="" label="小時" disabled />
          {hourOptions}
        </Select>
        <span style={{ lineHeight: "32px" }}>:</span>
        <Select
          className="timepicker-time"
          value={minute === null ? "" : minute}
          onChange={handleMinuteChange}
          disabled={!date || disabled || hour === null || minute === null}
        >
          <option value="" label="分鐘" disabled />
          {minOptions}
        </Select>
      </Group>
    </ThemeProvider>
  );
};

export default TimeInput;
