import React from "react";
import { useFormContext } from "react-hook-form";
import { BodySTY } from "./style";
import { Pane } from "evergreen-ui";
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
  mappingSpecailNeededsInfo,
  mappingShuttleInfo,
  mappingTakeBusInfo
} from "@services/client/mappingQuotationData";
import { QuotationCreatePayload } from "../type";
import { convertMap } from "@utils/convertValueToText";
import LoadingSpinner from "@components/LoadingSpinner";
import Section from "@contents/Client/Quote/Section";
//
const OrdersDetail = () => {
  const methods = useFormContext<QuotationCreatePayload>();
  const orderData = methods.getValues();
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);
  const shuttleInfo = mappingShuttleInfo(orderData.order_itinerary_list);
  const takeBusInfo = mappingTakeBusInfo(orderData);
  console.log("=====> ", orderData, mappingTakeBusInfo(orderData))

  const r_template = () => {
    return (
      <Section title="確認訂單">
        {/* <Collapse opened={true} title="總覽">
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
                    : convertMap["purpose"][orderData["purpose"]!]?.ch || "--"
              }
            ]}
          />
        </Collapse> */}
        <Collapse opened={true} title="聯絡資訊">
          <Pane
            display="flex"
            flexDirection="column"
            gap="12px"

          >
            <ContactInfoView listArray={contactInfo} title="訂單聯絡人" />
            <ContactInfoView listArray={passengerInfo} title="乘客代表人" />
          </Pane>
        </Collapse>


        {orderData["quote_type"] !== "1" ? (
          <>
            <Collapse opened={true} title="航班資訊">
              <FlightInfoView data={orderData} />
            </Collapse>
            <FlightShuttleInfo listArray={orderData.order_itinerary_list} />
          </>
        ) : (
          <Collapse title="行程資訊" opened={true}>
            <ShuttleInfo listArray={shuttleInfo} title="" />
          </Collapse>
        )}

        <Collapse title="乘車資訊" opened={true}>
          <TakeBusInfoView
            bus_data={orderData.bus_data}
            takeBusInfo={takeBusInfo}
          />
        </Collapse>
        <Collapse title="其他需求" opened={true}>
          <SpecialInfoView
            listArray={specialInfo}
            remark={orderData["remark"]}
          />
        </Collapse>
      </Section>
    );
  };
  return <BodySTY>{!orderData ? <LoadingSpinner /> : r_template()}</BodySTY>;
};

export default OrdersDetail;
