import {
  TextInputField,
  TextInputFieldProps,
  CalendarIcon
} from "evergreen-ui";
import { BodySTY } from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function CustomDatePicker(props: any) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <BodySTY>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="date-picker"
      />
      <CalendarIcon className="icon"/>
    </BodySTY>
  );
}
export default CustomDatePicker;
