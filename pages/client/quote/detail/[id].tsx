import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageWithLayout
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { getLayout } from "@layout/QuoteLayout";
import StatusCard from "@components/StatusCard";
import { BodySTY, ExpenseTitle } from "./style";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";
import LoadingSpinner from "@components/LoadingSpinner";
import { TickCircleIcon } from "evergreen-ui";
//@mock_data
//@content
import OrdersDetail from "@contents/Client/Quote/Detail";
//

import { getQuotation, I_OrderDetail } from "@services/client/getQuotation";
const DummyExpenseDetailData = [
  {
    label: "基本車資",
    hint: "基本車資說明",
    name: "basic",
    value: 1200
  },
  {
    label: "小費",
    hint: "小費說明",
    name: "tip",
    value: 200
  },
  {
    label: "旺季加價",
    hint: "旺季加價說明",
    name: "peak",
    value: 300
  },
  {
    label: "司機費用",
    hint: "司機費用說明",
    name: "driver",
    value: 300
  },
  {
    label: "夜間加價",
    hint: "夜間加價費用說明",
    name: "night",
    value: 200
  },
  {
    label: "偏遠地區加價",
    hint: "偏遠地區加價費用說明",
    name: "remote",
    value: 300
  },
  {
    label: "特殊需求小計",
    hint: "特殊需求小計費用說明",
    name: "special",
    value: 300
  }
];
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ quoteNo }) => {
  console.log({
    quoteNo
  });
  const [data, setData] = useState<I_OrderDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getQuotationData = async () => {
      setIsLoading(true);
      try {
        const res = await getQuotation(quoteNo);
        console.log("response of getQuotation: ", res);
        setData(res);
      } catch (e: any) {
        console.log(e);
      }
      setIsLoading(false);
    };
    getQuotationData();
  }, []);
  if (!quoteNo || quoteNo.trim() === "") {
    return <div>查無此訂單</div>;
  }
  return (
    <BodySTY>
      {isLoading ? (
        <LoadingSpinner />
      ) : data ? (
        <>
          <StatusCard>
            <TickCircleIcon
              color="success"
              style={{ height: "40px", width: "40px" }}
            />
            <div style={{ fontWeight: "600", color: "#567190" }}>
              已收到您的訂車詢價單，業務將盡快為您處理。
            </div>
          </StatusCard>
          <div className="body-container">
            <div className="content-container">
              <OrdersDetail isEdit={false} orderData={data} />
            </div>
            <div className="charge-container">
              <Collapse
                titleChildren={
                  <ExpenseTitle>
                    <div className="title">初估金額</div>
                    <div className="price-info">NT$2,200</div>
                  </ExpenseTitle>
                }
                opened={true}
              >
                <ExpenseDetail data={DummyExpenseDetailData} prefix="NT$" />
              </Collapse>
            </div>
          </div>
        </>
      ) : (
        <div>查無訂單資料...</div>
      )}
    </BodySTY>
  );
};

interface Props {
  quoteNo: string;
}
interface RouterQuery extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query, params } = context;
  const id = params?.id;
  return {
    props: {
      title: "詢價單資訊",
      quoteNo: id || ""
    }
  };
};

Page.getLayout = getLayout;
export default Page;
