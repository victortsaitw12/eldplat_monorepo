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

import { Button } from "evergreen-ui";
//@mock_data
import { mock_orderData } from "@mock-data/adminOrders/mockData";
//@content
import OrdersDetal from "@contents/Client/Enquiry/Detail";
//
const DummyNavigationListData = [
  {
    label: "選擇日期"
  },
  {
    label: "行程資訊"
  },
  {
    label: "乘車資訊"
  },
  {
    label: "特殊需求"
  },
  {
    label: "聯絡人資料"
  },
  {
    label: "詢價完成"
  }
];
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
const Page = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <BodySTY>
      <StatusCard>
        <NavigationList
          dataLists={DummyNavigationListData}
          currentStep={currentTab}
        />
      </StatusCard>
      <div className="body-container">
        <div className="content-container">
          <OrdersDetal
            isEdit={false}
            orderData={mock_orderData}
            orderType="0"
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

Page.getLayout = getLayout;
export default Page;
