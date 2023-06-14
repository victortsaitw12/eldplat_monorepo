import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageWithLayout
} from "next";
import { ParsedUrlQuery } from "querystring";
import { useState, useRef, useMemo } from "react";
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
import { useForm } from "react-hook-form";
//
import {
  QuotationCreatePayload,
  defaultQuotationCreatePayload
} from "@contents/Client/Enquiry/type";
import { shiftDate, calculateDuration } from "@utils/calculateDate";
import { createQuotation } from "@services/client/createQuotation";
import { getBusType } from "@services/client/getBusType";
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
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const [currentTab, setCurrentTab] = useState(1);
  const router = useRouter();
  const asyncGetDefaultValues = async (type: string) => {
    const busData = await getBusType();
    console.log("busData", busData);
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
    console.log("formatedBusData", formatedBusData);
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
              departure_time: "",
              pickup_location: "",
              stopover_addresses: [],
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
            day_date: flightDate,
            departure_time: flightTime,
            pickup_location: type === "pickUp" ? airport : "",
            stopover_addresses: [],
            dropoff_location: type === "dropOff" ? airport : ""
          }
        ]
      };
    }
  };
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<QuotationCreatePayload>({
    defaultValues: async () => {
      const result = await asyncGetDefaultValues(type);
      console.log("default values", result);
      return result;
    }
  });
  const asyncSubmitFormHandler = async (data: QuotationCreatePayload) => {
    console.log("create bus data", data);
    try {
      const result = await createQuotation(data);
      const { quote_no } = result;
      router.push({
        pathname: `/client/enquiry/detail/${quote_no}`,
        query: {
          quote_type: type === "custom" ? "1" : type === "pickUp" ? "2" : "3"
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BodySTY>
      <StatusCard>
        <NavigationList
          dataLists={DummyNavigationListData}
          currentStep={currentTab}
        />
      </StatusCard>
      <div className="body-container">
        <form
          className="content-container"
          onSubmit={handleSubmit(asyncSubmitFormHandler)}
        >
          <button type="submit" style={{ display: "none" }} ref={submitRef}>
            submit
          </button>
          {currentTab === 1 && type === "custom" && (
            <TravelInformation
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
            />
          )}
          {currentTab === 1 && type !== "custom" && (
            <FlightInformation
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
              type={type}
            />
          )}
          {currentTab === 2 && (
            <RidingInformation
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          )}

          {currentTab === 3 && (
            <SpecialNeeds
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          )}
          {currentTab === 4 && (
            <ContactInformation
              control={control}
              errors={errors}
              register={register}
              setValue={setValue}
              getValues={getValues}
            />
          )}
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
              type="button"
              onClick={() => {
                if (currentTab === 1) {
                  alert("回到日期選擇頁!");
                  router.push({
                    pathname: "/client/enquiry/confirm",
                    query: {
                      type: type === "custom" ? "custom" : "airport"
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
                backgroundColor: "#3670C9",
                fontWeight: "600",
                borderRadius: "32px",
                flex: "1",
                border: "none"
              }}
              onClick={() => {
                if (currentTab === 4) {
                  alert("送出詢價單");
                  submitRef.current?.click();
                  return;
                }
                setCurrentTab((prev) => prev + 1);
              }}
            >
              {currentTab === 4 ? "送出詢價單" : "下一步"}
            </Button>
          </div>
        </form>
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
