import React from "react";
import Link from "next/link";
import { Pane, Group } from "evergreen-ui";
import { BodySTY } from "./style";

import { MOCK_progressList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import StatusCard from "@components/StatusCard";
import { I_Order } from "@services/client/getOrdersList";
import { QUOTE_TYPE, STATUS_CODE } from "@services/getDDL";

const OrdersList = ({
  type,
  data
}: {
  type: "query" | "quote" | "order" | "finish";
  data: I_Order[];
}) => {
  if (!data)
    return (
      <BodySTY>
        <StatusCard>
          <div style={{ fontWeight: "600", color: "#567190" }}>查無訂單</div>
        </StatusCard>{" "}
      </BodySTY>
    );

  const renderDataList = (list) =>
    list.map((item) => ({
      label: STATUS_CODE[item.status_code].label,
      status: "ok", // "ok" | "pending" | "error",
      date: item.upddate
    }));
  return (
    <BodySTY>
      {data.map((item, index) => (
        <>
          <Link
            key={`${type}-${index} `}
            href={{
              pathname: `/orders/order/${item.quote_no}`
            }}
          >
            <Collapse title={QUOTE_TYPE[item.quote_type].label} opened>
              <Pane style={{ background: "#fff" }}>
                <Group className="info">
                  <Group className="info__text">
                    <DetailItem
                      title="乘車日期"
                      value={item.date?.split(" ")[0]}
                    />
                    <DetailItem title="詢價編號" value={item.quote_no} />
                  </Group>
                  <Pane>
                    <ProgressList
                      dataLists={renderDataList.call(null, item.status_list)}
                    />
                  </Pane>
                </Group>
              </Pane>
            </Collapse>
          </Link>
        </>
      ))}
    </BodySTY>
  );
};

export default OrdersList;
