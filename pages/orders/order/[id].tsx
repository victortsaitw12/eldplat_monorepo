import React from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Spinner } from "evergreen-ui";
import { BodySTY, SectionSTY } from "./style";

import { MOCK_ORDER_DETAIL } from "@mock-data/orders";
import { getLayout } from "@layout/QuoteLayout";
import ConditionCard from "@components/ConditionCard";
import Breadcrumbs from "@components/Breadcrumbs";
import OrderDetail from "@contents/Orders/OrderDetail";
import Quote from "@contents/Orders/Quote";
import { getQuotation, I_OrderDetail } from "@services/client/getQuotation";
import StatusCard from "@components/StatusCard";

const Page: NextPageWithLayout<never> = ({ quote_no }) => {
  // ----- variables, states ----- //
  const router = useRouter();
  const [data, setData] = React.useState<I_OrderDetail>(null);
  const [isLoading, setIsLoading] = React.useState(false);

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
    const fetchData = async () => {
      console.log(`fetchData:${quote_no}`);
      setIsLoading(true);
      try {
        const res = await getQuotation(quote_no);
        setData(res);
        console.log("res:", res);
      } catch (e) {
        console.log("載入訂單失敗:", e);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [quote_no]);

  return (
    <>
      {isLoading && (
        <StatusCard>
          <Spinner />
          <div>載入訂單資料中</div>
        </StatusCard>
      )}
      {data && (
        <Breadcrumbs
          routes={[
            { label: "首頁", url: "/" },
            { label: "訂單管理", url: "/orders" },
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
        {!isLoading && data && (
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
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      quote_no: params ? params.id : ""
    }
  };
};

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理", ...layoutProps });
export default Page;
