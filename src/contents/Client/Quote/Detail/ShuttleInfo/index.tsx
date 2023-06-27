import React from "react";
import { TimeIcon } from "evergreen-ui";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY, ContainerSTY, HeaderSTY } from "./style";
import ScheduleListView from "@contents/Client/Quote/Detail/ScheduleListView";
import dayjs from "dayjs";
interface I_Props {
  listArray: Array<any>;
}

const ShuttleInfo = ({ listArray }: I_Props) => {
  const r_list = ({ listArray }: I_Props) => {
    return listArray.map((item, i) => (
      <Collapse
        opened={true}
        key={i}
        title={
          "第" +
          item.day_number +
          "天  " +
          dayjs(item.day_date).format("YYYY-MM-DD")
        }
      >
        <ContainerSTY>
          <HeaderSTY>
            <div className="detail-with-icon">
              <TimeIcon color="#8EA8C7" size={11} />
              <DetailItem title="出發時間" value={item.departure_time} />
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

export default ShuttleInfo;
