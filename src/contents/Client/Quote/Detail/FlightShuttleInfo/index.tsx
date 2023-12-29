import React from "react";
import { TimeIcon, CalendarIcon } from "evergreen-ui";
import Collapse from "@components/Collapse";
import ScheduleListView from "@contents/Client/Quote/Detail/ScheduleListView";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY, HeaderSTY, ContainerSTY } from "./style";
interface I_Props {
  listArray: Array<any>;
}

const FlightShuttleInfo = ({ listArray }: I_Props) => {
  const r_list = ({ listArray }: I_Props) => {
    return listArray.map((item, i) => (
      <Collapse opened={true} key={i} title="行程資訊">
        <ContainerSTY>
          <HeaderSTY>
            <div className="detail_with_icon">
              <CalendarIcon color="#8EA8C7" size={11} />
              <DetailItem title="接送日期" value={item.day_date} />
            </div>
            <div className="detail_with_icon">
              <TimeIcon color="#8EA8C7" size={11} />
              <DetailItem title="接送時間" value={item.departure_time} />
            </div>
          </HeaderSTY>
          <ScheduleListView
            pickup_location={item.pickup_location}
            dropoff_location={item.dropoff_location}
            listArray={item.stopover_address_list}
          />
        </ContainerSTY>
      </Collapse>
    ));
  };
  return <BodySTY>{r_list({ listArray })}</BodySTY>;
};

export default FlightShuttleInfo;
