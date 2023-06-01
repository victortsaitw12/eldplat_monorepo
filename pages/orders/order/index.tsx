import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { TickCircleIcon, Pane, Group, InlineAlert } from "evergreen-ui";
import { BodySTY, SectionSTY } from "./style";

import { MOCK_ORDER_DETAIL, MOCK_progressList } from "@mock-data/orders";

import { mappingQueryData } from "@utils/mappingQueryData";
import { getLayout } from "@layout/QuoteLayout";
import StatusTabs from "@components/StatusTabs";
import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import StatusCard from "@components/StatusCard";
import ConditionCard from "@components/ConditionCard";
import Breadcrumbs from "@components/Breadcrumbs";
import ExpenseDetail from "@components/ExpenseDetail";
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
      {data && (
        <>
          <Collapse title={data.purpose} opened>
            <Pane style={{ background: "#fff" }}>
              <DetailItem title="乘車日期" value={data.departure_date} />
              <DetailItem title="詢價編號" value={data.quote_no} />
              <ProgressList dataLists={MOCK_progressList} />
            </Pane>
          </Collapse>
          <SectionSTY style={{ background: "#fff" }}>
            <Collapse title={"訂單聯絡人"} opened>
              <Pane style={{ background: "#fff" }}>
                {contactInfo.map((item, index) => (
                  <DetailItem
                    key={`contact-${index}`}
                    title={item.title}
                    value={item.value}
                  />
                ))}
                <DetailItem title="詢價編號" value={data.quote_no} />
              </Pane>
            </Collapse>
            <Collapse title={"訂單聯絡人"} opened>
              <Pane style={{ background: "#fff" }}>
                {contactInfo.map((item, index) => (
                  <DetailItem
                    key={`contact-${index}`}
                    title={item.title}
                    value={item.value}
                  />
                ))}
                <DetailItem title="詢價編號" value={data.quote_no} />
              </Pane>
            </Collapse>
          </SectionSTY>
          <ConditionCard type="view"></ConditionCard>
        </>
      )}
      {data && (
        <div className="cost">
          <Collapse title="金額試算" opened>
            <ExpenseDetail data={[]} prefix="NT$" />
          </Collapse>
        </div>
      )}
    </BodySTY>
  );
};

Page.getLayout = (page) => getLayout(page, { title: "訂單管理" });
export default Page;
