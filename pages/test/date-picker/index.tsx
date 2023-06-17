import React, { useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";

function Index() {
  const [startDate, setStartDate] = useState(new Date(2023, 1, 1, 8));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        console.log(date);
        console.log(dayjs(date).format("HH:mm"));
        return setStartDate(date);
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}
export default Index;
