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
    <BodySTY className={isRange ? "range" : ""}>
      {isRange ? (
        <DatePicker
          selectsRange={true}
          startDate={start}
          endDate={end}
          onChange={handleChange}
          isClearable={true}
          monthsShown={2}
          className="date-picker"
          renderCustomHeader={({
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
                style={
                  customHeaderCount === 1 ? { visibility: "hidden" } : undefined
                }
                onClick={decreaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                  }
                >
                  {"<"}
                </span>
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric"
                })}
              </span>
              <button
                aria-label="Next Month"
                className={
                  "react-datepicker__navigation react-datepicker__navigation--next"
                }
                style={
                  customHeaderCount === 0 ? { visibility: "hidden" } : undefined
                }
                onClick={increaseMonth}
              >
                <span
                  className={
                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                  }
                >
                  {">"}
                </span>
              </button>
            </div>
          )}
        />
      ) : (
        <DatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
          className="date-picker"
          placeholderText={placeholder}
        />
      )}
      <CalendarIcon className="icon" />
    </BodySTY>
  );
}
export default CustomDatePicker;
