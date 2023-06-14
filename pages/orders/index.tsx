import React from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import { MOCK_ORDERS_LIST } from "@mock-data/orders";
import { getLayout } from "@layout/QuoteLayout";
import StatusTabs from "@components/StatusTabs";
import StatusCard from "@components/StatusCard";
import OrdersList from "@contents/Orders/OrdersList";

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

const Page: NextPageWithLayout<never> = () => {
  // ----- variables, states ----- //
  const router = useRouter();
  const { userId } = router.query;
  const [data, setData] = React.useState<I_OrdersList>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("01");

  const tabsArray = [
    {
      label: "詢價中",
      length: data.query?.length || 0,
      value: "01"
    },
    {
      label: "已報價",
      length: data.quote?.length || 0,
      value: "02"
    },
    {
      label: "訂單成立",
      length: data.order?.length || 0,
      value: "03"
    },
    {
      label: "已完成",
      length: data.finish?.length || 0,
      value: "04"
    }
  ];

  // ----- function ----- //
  const handleTabChange = (v: string) => {
    setCurrentTab(v);
    console.log("change tabs", v);
  };

  // ----- useEffect ----- //
  React.useEffect(() => {
    setData(MOCK_ORDERS_LIST);
  }, []);
  React.useEffect(() => {
    console.log("userId:", userId);
  }, [userId]);

  return (
    <BodySTY>
      {!isLoading && !userId && (
        <StatusCard>
          <div style={{ fontWeight: "600", color: "#567190" }}>尚未登入。</div>
        </StatusCard>
      )}
      <StatusTabs
        tabsArray={tabsArray}
        onTabChange={(v) => handleTabChange(v)}
        isLoading={isLoading}
        defaultTab={"01"}
      />
      {data && currentTab === "01" && <OrdersList type="query" data={data} />}
      {data && currentTab === "02" && <OrdersList type="quote" data={data} />}
      {data && currentTab === "03" && <OrdersList type="order" data={data} />}
      {data && currentTab === "04" && <OrdersList type="finish" data={data} />}
    </BodySTY>
  );
};

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理xxxx", ...layoutProps });
export default Page;
