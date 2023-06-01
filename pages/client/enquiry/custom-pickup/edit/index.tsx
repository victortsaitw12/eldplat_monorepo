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
import TravelInformation from "@contents/Client/Enquiry/TravelInformation";
import RidingInformation from "@contents/Client/Enquiry/RidingInformation";
import SpecialNeeds from "@contents/Client/Enquiry/SpecialNeeds";
import ContactInformation from "@contents/Client/Enquiry/ContactInformation";
import { Button } from "evergreen-ui";
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
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ departureDate, returnDate, purpose }) => {
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
          {/* <TravelInformation /> */}
          {/* <RidingInformation /> */}
          {/* <SpecialNeeds /> */}
          <ContactInformation />
          <div className="content-actions-container">
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#567190",
                fontWeight: "600",
                borderRadius: "32px",
                flex: "1",
                border: "none"
              }}
              onClick={() => {
                console.log("上一步");
              }}
            >
              上一步
            </Button>
            <Button
              appearance="primary"
              style={{
                // backgroundColor: "#fff",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "32px",
                flex: "1",
                border: "none"
              }}
              onClick={() => {
                console.log("上一步");
              }}
            >
              下一步
            </Button>
          </div>
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
  departureDate: string;
  returnDate: string;
  purpose: string;
  title: string;
}
interface RouterQuery extends ParsedUrlQuery {
  departureDate: string;
  returnDate: string;
  purpose: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query } = context;
  const departureDate = query.departureDate as string;
  const returnDate = query.returnDate as string;
  const purpose = query.purpose as string;

  return {
    props: {
      departureDate,
      returnDate,
      purpose,
      title: "客製包車"
    }
  };
};

Page.getLayout = getLayout;
export default Page;
