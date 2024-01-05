import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageWithLayout
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useState, useRef, useEffect, useCallback } from "react";
import { getLayout } from "@layout/ClientLayout";
import StatusCard from "@components/StatusCard";
import { BodySTY } from "./style";
import NavigationList from "@components/NavigationList";
import Collapse from "@components/Collapse";
import TravelInformation from "@contents/Client/Quote/TravelInformation";
import RidingInformation from "@contents/Client/Quote/RidingInformation";
import ContactInformation from "@contents/Client/Quote/ContactInformation";
import FlightInformation from "@contents/Client/Quote/FlightInformation";
import { Button, toaster, TickCircleIcon } from "evergreen-ui";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { Pane } from "evergreen-ui";
//
import {
  QuotationCreatePayload,
  defaultQuotationCreatePayload
} from "@contents/Client/Quote/type";
import { shiftDate, calculateDuration } from "@utils/calculateDate";
import { createQuotation } from "@services/client/createQuotation";
import { getBusType } from "@services/client/getBusType";
import LoadingSpinner from "@components/LoadingSpinner";
import LoadingModal from "@components/LoadingModal";
import OrdersDetail from "@contents/Client/Quote/Detail";
import NoticeMessage from "@components/NoticeMessage";
import Section from "@contents/Client/Quote/Section";
import DetailGrid from "@components/DetailGrid";
import Link from "next/link";
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
    label: "聯絡人資料"
  },
  {
    label: "資料確認"
  },
  {
    label: "詢價完成"
  }
];
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
const initValidationList: Array<{ valid: boolean; errorMessage: string }> = [
  { valid: true, errorMessage: "" },
  { valid: true, errorMessage: "" },
  { valid: true, errorMessage: "" },
  { valid: true, errorMessage: "" },
  { valid: true, errorMessage: "" },
  { valid: true, errorMessage: "" }
];
//
let validationList = [...initValidationList];
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  departureDate,
  returnDate,
  purpose,
  type,
  airport,
  flightDate,
  flightTime,
  flightNo,
  terminal,
  airline
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [remainTime, setRemainTime] = useState(5);
  const [quoteNo, setQuoteNo] = useState("ORD202311110001");
  useEffect(() => {
    validationList = [...initValidationList];
  }, []);
  const router = useRouter();
  function goToOrdersPage() {
    setIsLoading(true);
    router.push("/client/orders");
  }
  async function asyncGetDefaultValues(
    type: string
  ): Promise<QuotationCreatePayload> {
    let busData;
    try {
      busData = await getBusType();
    } catch(err) {
      console.log(err);
    }

    const formatedBusData = [];
    for (const key in busData) {
      formatedBusData.push({
        type_name: busData[key].type_name,
        ddl_code: busData[key].ddl_code,
        bus_list: busData[key].bus_list.map((child: any) => {
          return {
            bus_name: child.bus_name,
            bus_seat: child.bus_seat,
            bus_type: child.type,
            order_quantity: 0
          };
        })
      });
    }
    if (type === "custom") {
      let durationDay = 1;
      if (returnDate && departureDate) {
        durationDay = calculateDuration(departureDate, returnDate);
      }
      return {
        ...defaultQuotationCreatePayload,
        bus_data: formatedBusData,
        quote_type: "1",
        departure_date: departureDate,
        return_date: returnDate,
        purpose: purpose,
        order_itinerary_list: new Array(durationDay + 1)
          .fill({})
          .map((_, index) => {
            return {
              day_number: index + 1,
              day_date: shiftDate(new Date(departureDate!), index),
              arrive_time: flightTime!,
              departure_time: "",
              pickup_location: "",
              stopover_address_list: [],
              dropoff_location: ""
            };
          })
      };
    } else {
      return {
        ...defaultQuotationCreatePayload,
        bus_data: formatedBusData,
        quote_type: type === "pickUp" ? "2" : "3",
        departure_date: flightDate,
        return_date: returnDate,
        flight_date: flightDate,
        flight_number: flightNo,
        airport: airport,
        terminal: terminal,
        flight_departure_time: flightTime,
        airline: airline,
        order_itinerary_list: [
          {
            day_number: 1,
            day_date: flightDate!,
            departure_time: flightTime!,
            arrive_time: flightTime!,
            pickup_location:
              type === "pickUp"
                ? airport! + `${terminal ? `第${terminal}航廈` : ""}`
                : "",
            stopover_address_list: [],
            dropoff_location:
              type === "dropOff"
                ? airport! + `${terminal ? `第${terminal}航廈` : ""}`
                : ""
          }
        ]
      };
    }
  }
  const methods = useForm<QuotationCreatePayload>({
    defaultValues: async () => {
      setIsLoading(true);
      const result = await asyncGetDefaultValues(type);
      setIsLoading(false);
      return result as QuotationCreatePayload;
    }
  });

  const asyncSubmitFormHandler = async (data: QuotationCreatePayload) => {
    console.log("submit");
    try {
      // TODO:送出API位置，先註解
      // const result = await createQuotation(data);
      // const { quote_no } = result;
      const { quote_no } = { quote_no: "ORD202311110001"};
      if (!quote_no) {
        throw new Error("Fail to create quotation");
      }
      setQuoteNo(quote_no)
      setCurrentTab(6);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    let timmer: any;
    // 自動返回首頁
    // if (currentTab === 5) {
    //   timmer = setInterval(() => {
    //     setRemainTime((prev) => prev - 1);
    //   }, 1000);
    // }
    // if (remainTime <= 0) {
    //   clearInterval(timmer);
    //   setCurrentTab(1);
    //   goToOrdersPage();
    // }
    return () => {
      if (timmer) clearTimeout(timmer);
    };
  }, [currentTab, remainTime]);
  if (currentTab === 5) {
    return (
      <BodySTY>
        <div className="redirect_body">
          <TickCircleIcon
            color="success"
            style={{ height: "40px", width: "40px" }}
          />
          <div
            style={{ fontWeight: "700", fontSize: "16px", color: "#567190" }}
          >
            已收到您的訂車詢價單，業務將盡快為您處理。
          </div>
        </div>
        <Pane
          className="quote_detail"
          boxShadow="box-shadow: 0px 4px 8px 0px #10184014"
        >
          <Section title="訂單資訊">
            <DetailGrid listArray={[
              {
                title: "訂單編號",
                value: <Link href="/">{quoteNo}</Link>,
              },
              {
                title: "訂單狀態",
                value: "詢價中",
              },
              { 
                title: "服務類型",
                value: "客製包車",
              },
              {
                title: "粗估金額",
                value: "NTD $2,805",
              },
            ]} />
            <Pane 
              marginTop="24px"
              textAlign="right"

            >
              <NoticeMessage message="注意事項注意事項注意事項注意事項注意事項注意事項" />
              <Button
                  appearance="primary"
                  type="button"
                  style={{
                    color: "#5E6C84",
                    border: "1px solid #B3BAC5",
                    fontWeight: "600",
                    borderRadius: "4px",
                    flex: "1",
                    backgroundColor: "#fff",
                    margin: "20px 0"
                  }}
                  onClick={() => {console.log("修改訂單")}}
                >
                  修改訂單
              </Button>
            </Pane>
          </Section>
        </Pane>
        {/* <div className="redirect-container">
          <p>頁面即將於{remainTime}秒後跳轉至訂單管理頁</p>
          <button
            onClick={() => {
              goToOrdersPage();
            }}
          >
            立即跳轉
          </button>
        </div> */}

      </BodySTY>
    );
  }
  return isLoading ? (
    <LoadingModal>
      <LoadingSpinner />
    </LoadingModal>
  ) : (
    <BodySTY>
      <StatusCard>
        <NavigationList
          dataLists={DummyNavigationListData}
          currentStep={currentTab}
        />
      </StatusCard>

      <div className="body_container">
        <FormProvider {...methods}>
          <form
            className="content_container"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <button type="submit" style={{ display: "none" }}>
              submit
            </button>
            {currentTab === 1 && type !== "custom" && (
              <FlightInformation
                flightTime={flightTime}
                type={type}
                validateSubForm={(data) => {
                  validationList[1] = data;
                }}
              />
            )}
            {currentTab === 1 && type === "custom" && <TravelInformation />}
            {currentTab === 2 && (
              <RidingInformation
                validateSubForm={(data) => {
                  validationList[2] = data;
                }}
              />
            )}
            {/* {currentTab === 3 && <SpecialNeeds />} */}
            {currentTab === 3 && <ContactInformation />}
            {currentTab === 4 && <OrdersDetail />}

          </form>
        </FormProvider>
        <div className="charge_container">
          <div className="charge_header">
            <div className="title">初估金額</div>
            <div className="charge">NTD $2,805</div>
          </div>
          <NoticeMessage size={16} message="注意事項注意事項注意事項注意事項注意事項注意事項" />
          <div className="content_actions_container">
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#567190",
                fontWeight: "600",
                borderRadius: "4px",
                flex: "1",
                border: "1px solid #B3BAC5"
              }}
              type="button"
              onClick={() => {
                if (currentTab === 1) {
                  router.push({
                    pathname: "/client/quote/confirm",
                    query: {
                      type,
                      departureDate,
                      returnDate,
                      purpose,
                      flightDate,
                      flightNo,
                      airport,
                      terminal,
                      airline,
                      flightTime,
                      quote_type:
                        type === "custom"
                          ? "1"
                          : type === "pickUp"
                          ? "2"
                          : "3"
                    }
                  });
                  return;
                }
                setCurrentTab((prev) => prev - 1);
              }}
            >
              上一步
            </Button>
            <Button
              appearance="primary"
              type="button"
              style={{
                color: "#fff",
                backgroundColor: "#5E6C84",
                fontWeight: "600",
                borderRadius: "4px",
                flex: "1",
                border: "none"
              }}
              disabled={methods.formState.isSubmitting}
              onClick={() => {
                let isValid = true;
                if (currentTab < 5) {
                  if (currentTab === 2) {
                    // if (currentTab === 1 || currentTab === 2) {
                    isValid = validationList[currentTab].valid;
                    if (!isValid) {
                      toaster.danger("無法前往下一頁", {
                        description: validationList[currentTab].errorMessage,
                        id: "validation-error"
                      });
                      return;
                    }
                  }
                  methods.handleSubmit(() => {
                    console.log("valid from");
                    setCurrentTab((prev) => prev + 1);
                  })();
                } else {
                  console.log("submit");
                  methods.handleSubmit(asyncSubmitFormHandler)();
                }
              }}
            >
              {currentTab === 4 ? "送出詢價單" : "下一步"}
            </Button>
          </div>
        </div>

      </div>
    </BodySTY>
  );
};

interface Props {
  departureDate?: string;
  returnDate?: string;
  flightDate?: string;
  flightNo?: string;
  flightTime?: string;
  airport?: string;
  airline?: string;
  terminal?: string;
  purpose?: string;
  type: string;
  title: string;
}
interface RouterQuery extends ParsedUrlQuery {
  departureDate?: string;
  returnDate?: string;
  flightDate?: string;
  flightNo?: string;
  flightTime?: string;
  airport?: string;
  airline?: string;
  terminal?: string;
  purpose?: string;
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
  const flightNo = query.flightNo && (query.flightNo as string);
  const terminal = query.terminal && (query.terminal as string);
  const airline = query.airline && (query.airline as string);
  const flightTime = query.flightTime && (query.flightTime as string);
  const airport = query.airport && (query.airport as string);
  const type = query.type ? (query.type as string) : "custom";

  return {
    props: {
      departureDate: departureDate || "",
      returnDate: returnDate || "",
      purpose: purpose || "",
      flightNo: flightNo || "",
      terminal: terminal || "",
      airline: airline || "",
      flightDate: flightDate || "",
      flightTime: flightTime || "",
      airport: airport || "",
      type: type || "",
      title: type === "custom" ? "客製包車" : "機場接送"
    }
  };
};

Page.getLayout = getLayout;
export default Page;
