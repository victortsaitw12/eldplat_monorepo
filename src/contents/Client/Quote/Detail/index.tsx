import React from "react";
import { useFormContext } from "react-hook-form";
import { BodySTY } from "./style";
//@component
import Collapse from "@components/Collapse";
//@contents
import SummaryInfoView from "@contents/Client/Quote/Detail/SummaryInfoView";
import ShuttleInfo from "./ShuttleInfo";
import FlightShuttleInfo from "./FlightShuttleInfo";
import TakeBusInfoView from "./TakeBusInfoView";
import FlightInfoView from "./FlightInfoView";
import SpecialInfoView from "./SpecialInfoView";
import ContactInfoView from "./ContactInfoView";
//@mock_data
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo
} from "@services/client/mappingQuotationData";
import { QuotationCreatePayload } from "../type";
import { convertMap } from "@utils/convertValueToText";
//
const OrdersDetail = () => {
  const methods = useFormContext<QuotationCreatePayload>();
  const orderData = methods.getValues();
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);

  const r_template = () => {
    return (
      <>
        <Collapse opened={true} title="總覽">
          <SummaryInfoView
            listArray={[
              {
                title: "分類",
                value: orderData["quote_type"] === "1" ? "客製包車" : "機場接送"
              },
              {
                title: "用車目的",
                value:
                  orderData["quote_type"]! === "2"
                    ? "接機"
                    : orderData["quote_type"]! === "3"
                    ? "送機"
                    : convertMap["purpose"][orderData["purpose"]!]?.ch
              }
            ]}
          />
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          <ContactInfoView listArray={contactInfo} />
        </Collapse>
        {orderData["quote_type"] !== "1" ? (
          <>
            <Collapse opened={true} title="航班資訊">
              <FlightInfoView data={orderData} />
            </Collapse>
            <FlightShuttleInfo listArray={orderData.order_itinerary_list} />
          </>
        ) : (
          <ShuttleInfo listArray={orderData.order_itinerary_list} />
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
      </>
    );
  };
  return <BodySTY>{!orderData ? <div>loading...</div> : r_template()}</BodySTY>;
};

export default OrdersDetail;
