import React from "react";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { TickCircleIcon } from "evergreen-ui";
import { BodySTY } from "./style";

import { getLayout } from "@layout/QuoteLayout";
import StatusCard from "@components/StatusCard";
import ConditionCard from "@components/ConditionCard";
import StatusTabsWrapper from "@components/StatusTabsWrapper";

const TEMP_DATA = {
  all: [
    { quote_no: "query0000", order_status: "詢價中" },
    { quote_no: "query0001", order_status: "詢價中" },
    { quote_no: "quote0000", order_status: "已報價" }
  ],
  query: [
    { quote_no: "query0000", order_status: "詢價中" },
    { quote_no: "query0001", order_status: "詢價中" }
  ],
  quote: [{ quote_no: "quote0000", order_status: "已報價" }],
  order: [],
  finish: [],
  cancel: []
};

interface OrderData {
  quote_no: string;
  order_status: string;
}
interface OrdersData {
  all?: OrderData[];
  query?: OrderData[];
  quote?: OrderData[];
  order?: OrderData[];
  finish?: OrderData[];
  cancel?: OrderData[];
}

const Page: NextPageWithLayout<never> = () => {
  // ----- variables, states ----- //
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState<OrdersData>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const tabsArray = [
    //{  label: "全部", length: 0, value: "00" }, //   order_status "00" "全部"  || "---"
    {
      label: "詢價中",
      content:
        data.query?.map((item, index) => (
          <StatusCard key={`all-${index} `} data-val={item.order_status}>
            <div>{item.quote_no}</div>
            <div>{item.order_status}</div>
          </StatusCard>
        )) || [],
      value: "01"
    }, //   order_status "01" "詢價" || "詢價中" (收到詢價)||(送出詢價)
    {
      label: "已報價",
      content:
        data.quote?.map((item, index) => (
          <StatusCard key={`all-${index} `} data-val={item.order_status}>
            <div>{item.quote_no}</div>
            <div>{item.order_status}</div>
          </StatusCard>
        )) || [],
      value: "02"
    }, //   order_status "02"  "報價" || "已報價" (送出報價+接受報價)||(收到報價+接受報價+尾款逾期)
    {
      label: "訂單成立",
      content:
        data.order?.map((item, index) => (
          <StatusCard key={`all-${index} `} data-val={item.order_status}>
            <div>{item.quote_no}</div>
            <div>{item.order_status}</div>
          </StatusCard>
        )) || [],
      value: "03"
    }, //   order_status "03"  "訂單" || "訂單成立" (已付全額/已付訂金/已付尾款)||(訂單成立)
    {
      label: "已完成",
      content:
        data.finish?.map((item, index) => (
          <StatusCard key={`all-${index} `} data-val={item.order_status}>
            <div>{item.quote_no}</div>
            <div>{item.order_status}</div>
          </StatusCard>
        )) || [],
      value: "04"
    } //   order_status "04"  "訂單" || "已完成" (完成報價)||(完成)
    //{  label: "已取消", length: 0, value: "05" } //  order_status "05"  "已取消" || "---"
  ];

  // ----- function ----- //
  const handleCheck = (e: any) => {
    console.log("check:", e.target.checked);
    console.log("check name:", e.target.name);
  };
  const handleTabChange = (v: string) => {
    console.log("change tabs", v);
  };

  // ----- useEffect ----- //

  React.useEffect(() => {
    setData(TEMP_DATA);
  }, []);

  //外框Layout 2  v
  //提示layout(只有外框) 1  v
  //使用條款扭 2  v
  //Tabs 2.5
  //Breadcrumb 2.5

  return (
    <BodySTY>
      <StatusCard>
        <TickCircleIcon
          color="success"
          style={{ height: "40px", width: "40px" }}
        />
        <div style={{ fontWeight: "600", color: "#567190" }}>
          已收到您的訂車詢價單，業務將盡快為您處理。
        </div>
      </StatusCard>
      <ConditionCard type="view"></ConditionCard>
      <ConditionCard
        type="checkbox"
        title="預約注意事項、使用條款、隱私權條款、寵物條款"
        onChange={handleCheck}
      ></ConditionCard>
      <StatusTabsWrapper
        tabsArray={tabsArray}
        onTabChange={(v) => handleTabChange(v)}
        isLoading={isLoading}
        defaultTab={"03"}
      >
        {tabsArray.map((item) => item.content)}
      </StatusTabsWrapper>
    </BodySTY>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
