import React from "react"
import { CustomTableSTY } from "./style"
import Section from "@contents/Client/Quote/Section"
import { Pane } from "evergreen-ui"
import ProgressList from "@components/ProgressList"
import DetailGrid from "@components/DetailGrid"

const OrderStatusInfo = ({ 
  progressInfo,
  orderData
}: { progressInfo: any; orderData: any }) => {
  return (
    <CustomTableSTY>
      <Section title="訂單資訊">
        {/* <Collapse
          title={QUOTE_TYPE[orderData.quote_type]?.label}
          titleChildren={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <span className="collapse__title">
                {orderData.quote_type === "1" ? "客製包車" : "機場接送"}
              </span>
              <span className="collapse__subTitle">
                {orderData.quote_type === "2"
                  ? "| 接機"
                  : orderData.quote_type === "3"
                  ? "| 送機"
                  : orderData.purpose
                  ? `| ${PURPOSE[orderData.purpose]?.label}`
                  : "| --"}
              </span>
            </div>
          }
          opened
          viewOnly
        >
        </Collapse> */}
          {/* <Pane style={{ background: "#fff" }}>
            <DetailItem
              title="乘車日期"
              value={
                orderData.departure_date
                  ? dayjs(orderData.departure_date).format("YYYY/MM/DD")
                  : "--"
              }
            />
            <DetailItem title="詢價編號" value={orderData.quote_no} />
          </Pane> */}
        <Pane marginBottom="24px">
          <ProgressList color="#5E6C84" dataLists={progressInfo} showTick={true} />
        </Pane>
        <DetailGrid 
          listArray={[
            {
              title: "訂單編號",
              value: <div className="quote">{orderData.quote_no}</div>
            },
            {
              title: "服務項目",
              value: orderData.quote_type === "1" ? "客製包車" : "機場接送"
            }
          ]}
        />
      </Section>
  </CustomTableSTY>
  )
}

export default OrderStatusInfo