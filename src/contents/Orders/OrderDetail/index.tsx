import React from "react";
import { Pane } from "evergreen-ui";
import { useForm, FormProvider } from "react-hook-form";
import { SectionSTY } from "./style";
import dayjs from "dayjs";

import Collapse from "@components/Collapse";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo,
  mappingProgressInfo
} from "@services/client/mappingQuotationData";
import { QUOTE_TYPE, PURPOSE } from "@services/getDDL";
import ShuttleInfo from "@contents/Orders/OrderDetail/ShuttleInfo";
import TakeBusInfoView from "@contents/AdminOrders/AdminOrdersDetail/TakeBusInfo/TakeBusInfoView";
import FlightInfoView from "@contents/Client/Quote/Detail/FlightInfoView";
import SpecialInfoView from "@contents/Client/Quote/Detail/SpecialInfoView";
import ContactInfoView from "@contents/Client/Quote/Detail/ContactInfoView";

const OrderDetail = ({ orderData }: { orderData: any }) => {
  // ----- function ----- //
  const methods = useForm({
    defaultValues: {
      ...orderData
    }
  });

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <span className="collapse__title">
                  {orderData.quote_type === "1" ? "客製包車" : "機場接送"}
                </span>
                <span className="collapse__subTitle">
                  {orderData.quote_type === "2"
                    ? "| 送機"
                    : orderData.quote_type === "3"
                    ? "| 接機"
                    : orderData.purpose
                    ? `| ${PURPOSE[orderData.purpose]?.label}`
                    : "| --"}
                </span>
              </div>
            }
            opened
            viewOnly
          >
            <Pane style={{ background: "#fff" }}>
              <DetailItem
                title="乘車日期"
                value={dayjs(orderData.departure_date).format("YYYY/MM/DD")}
              />
              <DetailItem title="詢價編號" value={orderData.quote_no} />
              <Pane>
                <ProgressList dataLists={progressInfo} />
              </Pane>
            </Pane>
          </Collapse>
          <Pane>
            <Collapse opened={true} title="訂單聯絡人">
              <ContactInfoView listArray={contactInfo} />
            </Collapse>
            {orderData["quote_type"] === "1" ? (
              <ShuttleInfo arrayName="order_itinerary_list" isEdit={false} />
            ) : (
              <>
                <Collapse opened={true} title="航班資訊">
                  <FlightInfoView data={orderData} />
                </Collapse>
                <ShuttleInfo arrayName="order_itinerary_list" isEdit={false} />
              </>
            )}
            <Collapse title="乘車資訊" opened={true}>
              <TakeBusInfoView
                adult={orderData.adult}
                child={orderData.child}
                infant={orderData.infant}
                check_in_luggage={orderData.check_in_luggage}
                carry_on_luggage={orderData.carry_on_luggage}
                bus_data={orderData.bus_data}
              />
            </Collapse>
            <Collapse title="特殊需求" opened={true}>
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
