import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
import dayjs from "dayjs";

const FlightInfoView = ({
  flight_date,
  flight_number,
  airport,
  terminal,
  flight_departure_time,
  airline
}: any) => {
  const listArr = [
    {
      title: "航班日期",
      value: dayjs(flight_date).format("YYYY-MM-DD") || "-"
    },
    {
      title: "航班編號",
      value: flight_number || "-"
    },
    {
      title: "機場",
      value: airport || "-"
    },
    {
      title: "航廈",
      value: terminal || "-"
    },
    {
      title: "航班抵達時間",
      value: flight_departure_time || "-"
    },
    {
      title: "航空公司",
      value: airline || "-"
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={listArr} />
    </Pane>
  );
};
export default FlightInfoView;
