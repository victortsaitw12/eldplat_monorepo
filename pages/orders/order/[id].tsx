import React from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { Spinner } from "evergreen-ui";

import { getLayout } from "@layout/QuoteLayout";
import Breadcrumbs from "@components/Breadcrumbs";
import { BodySTY } from "./style";
import ConditionCard from "@components/ConditionCard";
import OrderDetail from "@contents/Orders/OrderDetail";
import Quote from "@contents/Orders/Quote";
import { getQuotation, I_OrderDetail } from "@services/client/getQuotation";
import StatusCard from "@components/StatusCard";
import { ParsedUrlQuery } from "querystring";
import PaymentMethod from "@contents/Orders/PaymentMethod";

const Page: NextPageWithLayout<never> = ({ quote_no }) => {
  // ----- variables, states ----- //
  const [data, setData] = React.useState<I_OrderDetail | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // ----- useEffect ----- //
  React.useEffect(() => {
    const fetchData = async () => {
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
            <OrderDetail orderData={data} />
            <ConditionCard type="view"></ConditionCard>
          </div>
        )}
        {data && (
          <div className="right">
            <Quote data={data} setData={setData} />
            {data.orderStatusesList[1].status === "ok" && (
              <PaymentMethod data={data} />
            )}
          </div>
        )}
      </BodySTY>
    </>
  );
};
interface Props {
  quote_no: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { query, params } = context;
  const id = params?.id;
  return {
    props: {
      quote_no: id || ""
    }
  };
};

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理", ...layoutProps });
export default Page;
