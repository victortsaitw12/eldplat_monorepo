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
import FlightInformation from "@contents/Client/Enquiry/FlightInformation";
import { Button } from "evergreen-ui";
import { useRouter } from "next/router";
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
> = ({ departureDate, returnDate, purpose, type, airport, flightDate }) => {
  const [currentTab, setCurrentTab] = useState(1);

  console.log("currentTab", currentTab);
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
          {currentTab === 1 && type === "custom" ? (
            <TravelInformation />
          ) : (
            <FlightInformation />
          )}
          {currentTab === 2 && <RidingInformation />}
          {currentTab === 3 && <SpecialNeeds />}
          {currentTab === 4 && <ContactInformation />}
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
                if (currentTab === 1) {
                  alert("回到日期選擇頁!");
                  return;
                }
                setCurrentTab((prev) => prev - 1);
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
                if (currentTab === 4) {
                  alert("送出詢價單");
                  return;
                }
                setCurrentTab((prev) => prev + 1);
              }}
            >
              {currentTab === 4 ? "送出詢價單" : "下一步"}
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
  departureDate?: string;
  returnDate?: string;
  flightDate?: string;
  purpose?: string;
  airport?: string;
  type: string;
  title: string;
}
interface RouterQuery extends ParsedUrlQuery {
  departureDate?: string;
  returnDate?: string;
  flightDate?: string;
  purpose?: string;
  airport?: string;
  type: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query } = context;
  const departureDate = query.departureDate && (query.departureDate as string);
  const returnDate = query.returnDate && (query.returnDate as string);
  const purpose = query.purpose && (query.purpose as string);
  const flightDate = query.flightDate && (query.flightDate as string);
  const airport = query.airport && (query.airport as string);
  const type = query.type ? (query.type as string) : "custom";

  return {
    props: {
      departureDate: departureDate || "",
      returnDate: returnDate || "",
      purpose: purpose || "",
      flightDate: flightDate || "",
      airport: airport || "",
      type: type || "",
      title: type === "custom" ? "客製包車" : "機場接送"
    }
  };
};

Page.getLayout = getLayout;
export default Page;
