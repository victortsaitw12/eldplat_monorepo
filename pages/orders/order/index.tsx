import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { TickCircleIcon, Pane, Group, InlineAlert } from "evergreen-ui";
import { BodySTY } from "./style";

import { getLayout } from "@layout/QuoteLayout";
import StatusTabs from "@components/StatusTabs";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import StatusCard from "@components/StatusCard";
import ConditionCard from "@components/ConditionCard";
import Breadcrumbs from "@components/Breadcrumbs";
interface OrderData {
  customer_no: string;
  quote_no: string;
  costs_no: string;
  order_no: string;
  purpose: string;
  departure_date: string;
  order_status: string;
}

const TEMP_DATA = {
  customer_no: "CTM000001",
  quote_no: "ORD202302020001",
  costs_no: "CST202302020001",
  order_no: "ORD202302020001-20230530",
  purpose: "機場接送",
  departure_date: "2023/06/15",
  order_status: "01",
  payment_status: "1"
};
const Page: NextPageWithLayout<never> = () => {
  // ----- variables, states ----- //
  const router = useRouter();
  const { orderId } = router.query;
  const [data, setData] = React.useState<OrdersData>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("01");
  // ----- function ----- //

  // ----- useEffect ----- //
  React.useEffect(() => {
    setData(TEMP_DATA);
  }, []);
  React.useEffect(() => {
    console.log("orderId:", orderId);
  }, [orderId]);

  return (
    <BodySTY>
      {data && (
        <Breadcrumbs
          routes={[
            { label: "首頁", url: "/" },
            { label: "訂單管理", url: `/orders?${data.customer_no}` },
            {
              label: `訂單編號${data.quote_no}`,
              url: {
                pathname: "/orders",
                query: { order: data.quote_no }
              }
            }
          ]}
        />
      )}
    </BodySTY>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
