import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";

const FlightInfoView = ({ data }: any) => {
  const {
    flight_date,
    flight_number,
    airport,
    terminal,
    flight_departure_time,
    airline,
    quote_type
  } = data;
  console.log("data", data);
  const listArr = [
    {
      title: "航班日期",
      value: flight_date || "-"
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
      title: `航班${quote_type === "3" ? "出發" : "抵達"}時間`,
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
