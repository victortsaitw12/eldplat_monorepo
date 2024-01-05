import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
import dayjs from "dayjs";
import { useFormContext, useWatch } from "react-hook-form";
const FlightInfoView = () => {
  const { control } = useFormContext();
  //詢議價類型（1：客製包車 2：接機 3：送機）
  const {
    quote_type,
    flight_date,
    flight_number,
    airport,
    terminal,
    flight_departure_time,
    airline
  } = useWatch({
    control
  });
  const listArr = [
    {
      title: "航班日期",
      value: dayjs(flight_date).format("YYYY-MM-DD") || "--"
    },
    {
      title: "航班編號",
      value: flight_number || "--"
    },
    {
      title: "機場",
      value: airport || "--"
    },
    {
      title: "航廈",
      value: terminal || "--"
    },
    {
      title: quote_type == "2" ? "航班抵達時間" : "航班起飛時間",
      value:
        quote_type == "2"
          ? flight_departure_time || "--" //TODO
          : flight_departure_time || "--"
    },
    {
      title: "航空公司",
      value: airline || "--"
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={listArr} />
    </Pane>
  );
};
export default FlightInfoView;
