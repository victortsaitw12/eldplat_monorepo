import { CalendarIcon } from "evergreen-ui";
import { BodySTY } from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function CustomDatePicker(props: any) {
  const { isRange = false, placeholder = "請輸入內容" } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [start, end] = dateRange;

  const handleChange = (update: any) => {
    setDateRange(update);
  };
  
  return (
    <BodySTY>
      {isRange ? (
        <DatePicker
          selectsRange={true}
          startDate={start}
          endDate={end}
          onChange={handleChange}
          isClearable={true}
        />
      ) : (
        <DatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          className="date-picker"
          placeholderText={placeholder}
          locale="zh-TW"
        />
      )}
      <CalendarIcon className="icon" />
    </BodySTY>
  );
}
export default CustomDatePicker;
