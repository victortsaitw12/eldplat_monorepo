import React from "react";
import Link from "next/link";
import { Pane, Group } from "evergreen-ui";
import { BodySTY } from "./style";

import { MOCK_progressList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import StatusCard from "@components/StatusCard";

interface I_OrderData {
  quote_no: string;
  costs_no: string;
  order_no: string;
  purpose: string;
  departure_date: string;
  order_status: string;
}
interface I_OrdersList {
  all?: I_OrderData[];
  query?: I_OrderData[];
  quote?: I_OrderData[];
  order?: I_OrderData[];
  finish?: I_OrderData[];
  cancel?: I_OrderData[];
}

const OrdersList = ({
  type,
  data
}: {
  type: "all" | "query" | "quote" | "order" | "finish";
  data: I_OrdersList;
}) => {
  if (!data || !data[type]?.[0])
    return (
      <BodySTY>
        <StatusCard>
          <div style={{ fontWeight: "600", color: "#567190" }}>查無訂單</div>
        </StatusCard>{" "}
      </BodySTY>
    );

  return (
    <BodySTY>
      {data[type]?.map((item, index) => (
        <Link
          key={`${type}-${index} `}
          href={{
            pathname: `/orders/order/${item.quote_no}`
          }}
        >
          <Collapse title={item.purpose} opened>
            <Pane style={{ background: "#fff" }}>
              <Group className="info">
                <Group className="info__text">
                  <DetailItem title="乘車日期" value={item.departure_date} />
                  <DetailItem title="詢價編號" value={item.quote_no} />
                </Group>
                <Pane>
                  <ProgressList dataLists={MOCK_progressList} />
                </Pane>
              </Group>
            </Pane>
          </Collapse>
        </Link>
      ))}
    </BodySTY>
  );
};

export default OrdersList;
