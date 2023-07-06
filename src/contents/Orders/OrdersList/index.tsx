import React from "react";
import Link from "next/link";
import { BodySTY } from "./style";

import Collapse from "@components/Collapse";
import StatusCard from "@components/StatusCard";
import { PURPOSE, QUOTE_TYPE } from "@services/getDDL";
import { I_Order } from "@services/client/getOrdersList";
import OrderListItem from "./OrderListItem";
import OverdueMsg from "@contents/Orders/OverdueMsg";

const OrdersList = ({
  orderData,
  setData
}: {
  orderData: I_Order[];
  setData: (v: any) => void;
}) => {
  if (!orderData || orderData.length === 0)
    return (
      <BodySTY>
        <StatusCard>
          <div style={{ fontWeight: "600", color: "#567190" }}>查無訂單</div>
        </StatusCard>{" "}
      </BodySTY>
    );

  return (
    <BodySTY>
      {orderData.map((item: I_Order) => {
        return (
          <div className="list-item" key={item.quote_no}>
            <Link
              href={{
                pathname: `/client/orders/detail/${item.quote_no}`
              }}
            >
              <Collapse
                title={item.quote_type === "1" ? "客製包車" : "機場接送"}
                titleChildren={
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: "10" }}>
                      <span className="collapse__title">
                        {QUOTE_TYPE[item.quote_type].label}
                        {" | "}
                      </span>
                      <span className="collapse__subTitle">
                        {item.quote_type === "2"
                          ? "送機"
                          : item.quote_type === "3"
                          ? "接機"
                          : item.purpose
                          ? `${PURPOSE[item.purpose]?.label}`
                          : "--"}
                      </span>
                    </div>
                    <div style={{ fontSize: "18px" }}>{`NT$${parseFloat(
                      item.quote_total_amount || "0"
                    )?.toLocaleString()}`}</div>
                  </div>
                }
                viewOnly
                opened
              >
                <OrderListItem itemData={item} setData={setData} />
                {item.status_list.filter(
                  (statusItem) => statusItem.status === "error"
                ) && <OverdueMsg data={item} />}
              </Collapse>
            </Link>
          </div>
        );
      })}
    </BodySTY>
  );
};

export default OrdersList;
