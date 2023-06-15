import React from "react";
import { Pane, TimeIcon } from "evergreen-ui";
import { useForm, FormProvider } from "react-hook-form";
import { SectionSTY } from "./style";
import dayjs from "dayjs";

import Collapse from "@components/Collapse";
import DetailList from "@components/DetailList";
import VerticalDetail from "@components/VerticalDetail";
// import { order_shuttleList } from "@mock-data/adminOrders/mockData";
// import ShuttleInfoView from "@contents/AdminOrders/AdminOrdersDetail/ShuttleInfo/ShuttleInfoView";
import ScheduleList from "@components/ScheduleList";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo,
  mappingProgressInfo
} from "@services/client/mappingQuotationData";
import {
  STATUS_CODE,
  QUOTE_TYPE,
  PURPOSE,
  BUS_AGE,
  BRING_PETS_RADIO,
  SOCIAL_MEDIA_TYPE
} from "@services/getDDL";

import ShuttleInfo from "@contents/Client/Quote/Detail/ShuttleInfo";
import TakeBusInfoView from "@contents/Client/Quote/Detail/TakeBusInfoView";
import FlightInfoView from "@contents/Client/Quote/Detail/FlightInfoView";
import SpecialInfoView from "@contents/Client/Quote/Detail/SpecialInfoView";
import ContactInfoView from "@contents/Client/Quote/Detail/ContactInfoView";

type StatusItemType = {
  label: string;
  status: "pending" | "error" | "ok" | "disabled";
  date?: string | undefined;
};

const OrderDetail = ({ orderData }: { orderData: any }) => {
  // ----- function ----- //
  const methods = useForm();
  console.log("orderData", orderData);
  const filterData = (
    keysArr: { title: string; key: string; val: string; isShown: boolean }[]
  ) => {
    return keysArr.filter((item) => item.isShown === true);
  };
  // ----- render ----- //
  // const renderDataList = (list: any[]): Array<StatusItemType> => {
  //   const dataArr: Array<StatusItemType> = [
  //     "送出詢價", //1|2
  //     "收到報價", //3|4
  //     "接受報價", //5|7
  //     "訂單成立", //"6" || "8" || "12" || "13" || "14"
  //     "結案" //15
  //   ].map((item) => ({
  //     label: item,
  //     status: "pending", // "ok" | "pending" | "error" |"disabled"
  //     date: ""
  //   }));
  //   const renderOverdue = (item: any) => {
  //     dataArr.splice(3, 0, {
  //       label: STATUS_CODE[item.status_code].label,
  //       status: "error",
  //       date: dayjs(item.upddate).format("MM/DD HH:MM")
  //     });
  //     dataArr[dataArr.length - 2].status = "disabled";
  //     dataArr[dataArr.length - 1].status = "disabled";
  //     //TODO 更新訂單成立跟結案的狀態=>'due'? 待確認
  //   };
  //   list.forEach((item) => {
  //     switch (item.status_code) {
  //       case "1" || "2":
  //         dataArr[0].status = "ok";
  //         dataArr[0].date = dayjs(item.upddate).format("MM/DD HH:MM");
  //         break;
  //       case "3" || "4":
  //         dataArr[1].status = "ok";
  //         dataArr[1].date = dayjs(item.upddate).format("MM/DD HH:MM");
  //         break;
  //       case "5" || "7":
  //         dataArr[2].status = "ok";
  //         dataArr[2].date = dayjs(item.upddate).format("MM/DD HH:MM");
  //         break;
  //       case "9" || "10" || "11":
  //         renderOverdue(item);
  //         break;
  //       case "6" || "8" || "12" || "13" || "14":
  //         dataArr[dataArr.length - 2].status = "ok";
  //         dataArr[dataArr.length - 2].date = dayjs(item.upddate).format(
  //           "MM/DD HH:MM"
  //         );
  //         break;
  //       case "15":
  //         dataArr[dataArr.length - 1].status = "ok";
  //         dataArr[dataArr.length - 1].date = dayjs(item.upddate).format(
  //           "MM/DD HH:MM"
  //         );
  //         break;
  //       default:
  //         return;
  //     }
  //   });
  //   return dataArr;
  // };
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);
  const progressInfo = mappingProgressInfo(orderData.orderStatusesList);
  return (
    <FormProvider {...methods}>
      <form>
        <SectionSTY>
          <Collapse
            title={QUOTE_TYPE[orderData.quote_type]?.label}
            titleChildren={
              <div>
                <span className="collapse__title">
                  {orderData.quote_type === "1" ? "客製包車" : "機場接送"}
                </span>
                <span className="collapse__subTitle">
                  {orderData.quote_type === "3"
                    ? "送機"
                    : orderData.quote_type === "2"
                    ? "接機"
                    : PURPOSE[orderData.purpose].label}
                </span>
              </div>
            }
            opened
          >
            <Pane style={{ background: "#fff" }}>
              <DetailItem
                title="乘車日期"
                value={dayjs(orderData.departure_date).format("YYYY/MM/DD")}
              />
              <DetailItem title="詢價編號" value={orderData.quote_no} />
              <Pane>
                <ProgressList
                  // dataLists={renderDataList.call(
                  //   null,
                  //   orderData.orderStatusesList
                  // )}
                  dataLists={progressInfo}
                />
              </Pane>
            </Pane>
          </Collapse>
          <Pane>
            <Collapse opened={true} title="訂單聯絡人">
              <ContactInfoView listArray={contactInfo} />
            </Collapse>

            {/*以下為變動*/}
            {orderData["quote_type"] === "1" ? (
              <ShuttleInfo arrayName="order_itinerary_list" isEdit={false} />
            ) : (
              <Collapse opened={true} title="航班資訊">
                <FlightInfoView data={orderData} />
              </Collapse>
            )}
            {/*變動*/}
            <Collapse title="乘車資訊">
              <TakeBusInfoView
                adult={orderData.adult}
                child={orderData.child}
                infant={orderData.infant}
                check_in_luggage={orderData.check_in_luggage}
                carry_on_luggage={orderData.carry_on_luggage}
                bus_data={orderData.bus_data}
              />
            </Collapse>
            <Collapse title="特殊需求">
              <SpecialInfoView
                listArray={specialInfo}
                remark={orderData["remark"]}
              />
            </Collapse>
            <Collapse opened={true} title="旅客代表人">
              <ContactInfoView listArray={passengerInfo} />
            </Collapse>
          </Pane>
        </SectionSTY>
      </form>
    </FormProvider>
  );
};
export default OrderDetail;
