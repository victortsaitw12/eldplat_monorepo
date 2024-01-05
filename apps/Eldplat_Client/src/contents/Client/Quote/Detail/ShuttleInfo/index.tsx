import React from "react";
import { TimeIcon } from "evergreen-ui";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY, ContainerSTY, HeaderSTY } from "./style";
import ScheduleListView from "@contents/Client/Quote/Detail/ScheduleListView";
import dayjs from "dayjs";
import DetailGrid from "@components/DetailGrid";
interface I_Props {
  listArray: Array<any>;
  title: string;
}


const ShuttleInfo = ({ listArray }: I_Props) => {

  const formatWeek = (date: Date) => {
    const newDate = new Date(date);
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    const dayOfWeek = newDate.getDay();
    const weekDayName = weekdays[dayOfWeek];

    return weekDayName
  }

  return (
    <>
      {listArray.length !== 0 && listArray.map((item, index) => {
        const borderRadius = (index === 0)
        ? "4px 4px 0 0"
        : (index === listArray.length - 1)
          ? "0 0 4px 4px"
          : "0";

        return (
          <DetailGrid  
            borderRadius={borderRadius}
            isCollapse={true} 
            listArray={item.data} 
            title={`${item.day_date} (${formatWeek(item.day_date)})`} 
            key={index} 
          />
        )
      })}
    </>
  )
};

export default ShuttleInfo;
