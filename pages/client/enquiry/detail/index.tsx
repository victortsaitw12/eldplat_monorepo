import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageWithLayout
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { getLayout } from "@layout/QuoteLayout";
import StatusCard from "@components/StatusCard";
import { BodySTY } from "./style";
import NavigationList from "@components/NavigationList";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";

import { Button, TickCircleIcon } from "evergreen-ui";
//@mock_data
import { mock_orderData } from "@mock-data/adminOrders/mockData";
//@content
import OrdersDetail from "@contents/Client/Enquiry/Detail";
//
const DummyExpenseDetailData = [
  {
    label: "基本車資",
    hint: "基本車資說明",
    value: 1200
  },
  {
    label: "小費",
    hint: "小費說明",
    value: 200
  },
  {
    label: "旺季加價",
    hint: "旺季加價說明",
    value: 300
  },
  {
    label: "司機費用",
    hint: "司機費用說明",
    value: 300
  }
];
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ type }) => {
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
      <div className="body-container">
        <div className="content-container">
          <OrdersDetail
            isEdit={false}
            orderData={mock_orderData}
            orderType={type === "custom" ? "0" : "1"}
          />
        </div>
        <div className="charge-container">
          <Collapse title="初估金額" opened={true}>
            <ExpenseDetail data={DummyExpenseDetailData} prefix="NT$" />
          </Collapse>
        </div>
      </div>
    </BodySTY>
  );
};

interface Props {
  type: string;
}
interface RouterQuery extends ParsedUrlQuery {
  type: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query } = context;
  const type = query.type ? (query.type as string) : "custom";

  return {
    props: {
      type: type || "",
      title: type === "custom" ? "客製包車" : "機場接送"
    }
  };
};

Page.getLayout = getLayout;
export default Page;
