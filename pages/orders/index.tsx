import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { TickCircleIcon, Pane, Group, InlineAlert } from "evergreen-ui";
import { BodySTY } from "./style";

import { MOCK_ORDERS_LIST, MOCK_progressList } from "@mock-data/orders";
import { getLayout } from "@layout/QuoteLayout";
import StatusTabs from "@components/StatusTabs";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import StatusCard from "@components/StatusCard";
import ConditionCard from "@components/ConditionCard";
import Breadcrumbs from "@components/Breadcrumbs";

interface OrderData {
  quote_no: string;
  costs_no: string;
  order_no: string;
  purpose: string;
  departure_date: string;
  order_status: string;
}
interface OrdersList {
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
  const { userId } = router.query;
  const [data, setData] = React.useState<OrdersList>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("01");

  const tabsArray = [
    //{  label: "全部", length: data.all?.length, value: "00" }
    {
      //   order_status "01" "詢價" || "詢價中" (收到詢價)||(送出詢價)
      label: "詢價中",
      length: data.query?.length || 0,
      value: "01"
    },
    {
      //   order_status "02"  "報價" || "已報價" (送出報價+接受報價)||(收到報價+接受報價+尾款逾期)
      label: "已報價",
      length: data.quote?.length || 0,
      value: "02"
    },
    {
      //   order_status "03"  "訂單" || "訂單成立" (已付全額/已付訂金/已付尾款)||(訂單成立)
      label: "訂單成立",
      length: data.order?.length || 0,
      value: "03"
    },
    {
      //   order_status "04"  "訂單" || "已完成" (完成報價)||(完成)
      label: "已完成",
      length: data.finish?.length || 0,
      value: "04"
    }
    //{  label: "已取消", length: data.cancel?.length, value: "05" } //  order_status "05"  "已取消" || "---"
  ];

  // ----- function ----- //
  const renderOrderCards = (
    type: "all" | "query" | "quote" | "order" | "finish",
    data: OrdersList
  ) => {
    if (!data) return;
    const content = data[type]?.map((item, index) => (
      <Link
        key={`${type}-${index} `}
        href={{
          pathname: "/orders",
          query: { order: item.quote_no }
        }}
      >
        <Collapse title={item.purpose} opened>
          <Pane style={{ background: "#fff" }}>
            <Group className="info">
              <Group className="info__text">
                <DetailItem title="乘車日期" value={item.departure_date} />
                <DetailItem title="詢價編號" value={item.quote_no} />
              </Group>
              <ProgressList dataLists={MOCK_progressList} />
            </Group>
          </Pane>
        </Collapse>
      </Link>
    ));
    return content;
  };
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
      {data && currentTab === "01" && renderOrderCards("query", data)}
      {data && currentTab === "02" && renderOrderCards("quote", data)}
      {data && currentTab === "03" && renderOrderCards("order", data)}
      {data && currentTab === "04" && renderOrderCards("finish", data)}

      {/* <ConditionCard
        type="checkbox"
        title="預約注意事項、使用條款、隱私權條款、寵物條款"
        onChange={handleCheck}
      /> */}
    </BodySTY>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
