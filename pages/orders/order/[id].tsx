import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { BodySTY, SectionSTY } from "./style";

import { MOCK_ORDER_DETAIL } from "@mock-data/orders";
import { getLayout } from "@layout/QuoteLayout";
import ConditionCard from "@components/ConditionCard";
import Breadcrumbs from "@components/Breadcrumbs";
import OrderDetail from "@contents/Orders/OrderDetail";
import Quote from "@contents/Orders/Quote";

interface OrderData {
  customer_no: string;
  quote_no: string;
  costs_no: string;
  order_no: string;
  purpose: string;
  departure_date: string;
  order_status: string;
}

const Page: NextPageWithLayout<never> = () => {
  // ----- variables, states ----- //
  const router = useRouter();
  const { orderId } = router.query;
  const [data, setData] = React.useState<OrdersData>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState("01");

  const contactInfo = [
    { title: "姓", value: data?.family_name },
    { title: "名", value: data?.name },
    { title: "手機", value: data?.contact_phone },
    { title: "電話", value: data?.contact_tel },
    { title: "信箱", value: data?.contact_email },
    { title: "通訊軟體", value: data?.social_media }
  ];
  // ----- function ----- //

  // ----- useEffect ----- //
  React.useEffect(() => {
    setData(MOCK_ORDER_DETAIL);
  }, []);
  React.useEffect(() => {
    console.log("orderId:", orderId);
  }, [orderId]);

  return (
    <>
      {" "}
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
          style={{ marginBottom: "24px" }}
        />
      )}
      <BodySTY>
        {data && (
          <div className="left">
            <OrderDetail data={data} />
            <ConditionCard type="view"></ConditionCard>
          </div>
        )}
        {data && (
          <div className="right">
            <Quote data={data} />
          </div>
        )}
      </BodySTY>
    </>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
