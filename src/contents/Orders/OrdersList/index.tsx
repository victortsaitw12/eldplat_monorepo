import React from "react";
import Link from "next/link";
import { BodySTY } from "./style";
import Collapse from "@components/Collapse";
import StatusCard from "@components/StatusCard";
import { PURPOSE, QUOTE_TYPE } from "@services/getDDL";
import { I_Order } from "@services/client/getOrdersList";
import OrderListItem from "./OrderListItem";
const OrdersList = ({
  type,
  orderData
}: {
  type: "query" | "quote" | "order" | "finish";
  orderData: any;
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
                pathname: `/orders/order/${item.quote_no}`
              }}
            >
              <Collapse
                title={item.quote_type === "1" ? "客製包車" : "機場接送"}
                titleChildren={
                  <div>
                    <span className="collapse__title">
                      {QUOTE_TYPE[item.quote_type].label}
                      {" | "}
                    </span>
                    <span className="collapse__subTitle">
                      {`${
                        item.quote_type === "2"
                          ? "送機"
                          : item.quote_type === "3"
                          ? "接機"
                          : item.purpose
                          ? PURPOSE[item.purpose].label
                          : "---"
                      }`}
                    </span>
                  </div>
                }
                opened
              >
                <OrderListItem itemData={item} />
              </Collapse>
            </Link>
          </div>
        );
      })}
    </BodySTY>
  );
};

export default OrdersList;
