import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";
//@component
import LabelTag from "@components/LabelTag";
import Collapse from "@components/Collapse";
//@contents
import ShuttleInfo from "./ShuttleInfo";
import SummaryInfoView from "@contents/Client/Enquiry/Detail/SummaryInfoView";
import TakeBusInfoView from "./TakeBusInfoView";
import FlightInfoView from "@contents/AdminOrders/AdminOrdersDetail/FlightInfo/FlightInfoView";
import SpecialInfoView from "./SpecialInfoView";
import ContactInfoView from "./ContactInfoView";
//@mock_data
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo
} from "@services/client/mappingQuotationData";

interface I_Props {
  isEdit: boolean;
  orderType?: "1" | "2" | "3";
  orderData: any;
}

const OrdersDetail = ({ isEdit, orderType = "1", orderData }: I_Props) => {
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      ...orderData
    }
  });

  const asyncSubmitForm = async (data: any) => {
    console.log("edited data", data);
    setLoading(true);
    try {
      console.log("response of vendor edit: ");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };

  const r_template = (orderType: "1" | "2" | "3") => {
    return (
      <>
        <Collapse opened={true} title="總覽">
          <SummaryInfoView
            listArray={[
              {
                title: "訂單編號",
                value: orderData["quote_no"]
              },
              {
                title: "用車目的",
                value:
                  orderData["quote_type"] === "2"
                    ? "接機"
                    : orderData["quote_type"] === "3"
                    ? "送機"
                    : orderData["purpose"]
              }
            ]}
          />
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          <ContactInfoView listArray={contactInfo} />
        </Collapse>
        <ShuttleInfo arrayName="order_itinerary_list" isEdit={isEdit} />
        {/*以下為變動*/}
        {/* {orderType === "1" ? (
          <ShuttleInfo
            arrayName="order_itinerary_list"
            isEdit={false}
            shuttleList={order_shuttleList}
          />
        ) : (
          <Collapse opened={true} title="航班資訊">
            <FlightInfoView data={order_flight} />
          </Collapse>
        )} */}
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
      </>
    );
  };
  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log(data);
            asyncSubmitForm({ ...data });
          })}
        >
          <Pane style={{ background: "#ffffff" }}>{r_template(orderType)}</Pane>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default OrdersDetail;
