import React from "react";
import { BodySTY } from "./style";
import DotIcon from "./DotIcon";
import cx from "classnames";

import { Text } from "evergreen-ui";

interface I_Props {
  pickup_location: string;
  dropoff_location: string;
  listArray: any[];
}

const ScheduleListView = ({
  pickup_location,
  dropoff_location,
  listArray
}: I_Props) => {
  const r_stopover = (listArray: any[]) => {
    const filterArray = listArray.filter(
      (item) => item.stopover_address.trim() !== ""
    );
    return filterArray.map((child, i) => (
      <li key={i} className="schedule_list_item">
        <Text className="schedule_list_label">
          <Text className={cx("dot", { withLine: true })}>
            <DotIcon />
          </Text>
          {"中途點 " + (i + 1)}
        </Text>
        <Text>{child.stopover_address}</Text>
      </li>
    ));
  };
  return (
    <BodySTY>
      <ul className="schedule_list">
        <li className="schedule_list_item">
          <Text className="schedule_list_label">
            <Text className={cx("dot", { withLine: true })}>
              <DotIcon />
            </Text>
            上車地點
          </Text>
          <Text>{pickup_location || "--"}</Text>
        </li>
        {r_stopover(listArray)}
        <li className="schedule_list_item">
          <Text className="schedule_list_label">
            <Text className={cx("dot")}>
              <DotIcon />
            </Text>
            下車地點
          </Text>
          <Text>{dropoff_location || "--"}</Text>
        </li>
      </ul>
    </BodySTY>
  );
};

export default ScheduleListView;
