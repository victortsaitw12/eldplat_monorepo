import React from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Spinner } from "evergreen-ui";
import { BodySTY } from "./style";

import { getLayout } from "@layout/QuoteLayout";
import StatusTabs from "@components/StatusTabs";
import StatusCard from "@components/StatusCard";
import OrdersList from "@contents/Orders/OrdersList";
import { getOrdersList, I_Order } from "@services/client/getOrdersList";
interface I_OrdersList {
  query?: I_Order[];
  quote?: I_Order[];
  order?: I_Order[];
  finish?: I_Order[];
}

const Page: NextPageWithLayout<never> = () => {
  // ----- variables, states ----- //
  const [data, setData] = React.useState<I_OrdersList>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState(1);

  const tabsArray = [
    {
      label: "詢價中",
      length: data.query?.length || 0,
      value: 1
    },
    {
      label: "已報價",
      length: data.quote?.length || 0,
      value: 2
    },
    {
      label: "訂單成立",
      length: data.order?.length || 0,
      value: 3
    },
    {
      label: "已完成",
      length: data.finish?.length || 0,
      value: 4
    }
  ];

  // ----- function ----- //
  const handleTabChange = (v: number) => {
    setCurrentTab(v);
    console.log("change tabs", v);
  };

  // ----- useEffect ----- //
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const queryRes = await getOrdersList(1);
        const quoteRes = await getOrdersList(2);
        const orderRes = await getOrdersList(3);
        const finishRes = await getOrdersList(4);
        setData({
          query: queryRes,
          quote: quoteRes,
          order: orderRes,
          finish: finishRes
        });
      } catch (e) {
        console.log("出現錯誤");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <BodySTY>
      <StatusTabs
        tabsArray={tabsArray}
        onTabChange={(v) => handleTabChange(v)}
        isLoading={isLoading}
        defaultTab={1}
      />
      {isLoading && (
        <StatusCard>
          <Spinner />
        </StatusCard>
      )}
      {!isLoading && data && currentTab == 1 && (
        <OrdersList type="query" orderData={data.query} />
      )}
      {!isLoading && data && currentTab == 2 && (
        <OrdersList type="quote" orderData={data.quote} />
      )}
      {!isLoading && data && currentTab == 3 && (
        <OrdersList type="order" orderData={data.order} />
      )}
      {!isLoading && data && currentTab == 4 && (
        <OrdersList type="finish" orderData={data.finish} />
      )}
    </BodySTY>
  );
};

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理", ...layoutProps });
export default Page;
