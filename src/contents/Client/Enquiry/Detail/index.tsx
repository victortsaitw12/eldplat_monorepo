import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";
//@component
import LabelTag from "@components/LabelTag";
import Collapse from "@components/Collapse";
//@contents
import ShuttleInfo from "@contents/AdminOrders/AdminOrdersDetail/ShuttleInfo";
import CarInfoView from "@contents/AdminOrders/AdminOrdersDetail/CarInfo/CarInfoView";
import ContactInfoView from "@contents/AdminOrders/AdminOrdersDetail/ContactInfo/ContactInfoView";
import PassengerInfoView from "@contents/AdminOrders/AdminOrdersDetail/PassengerInfo/PassengerInfoView";
import PassengerInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/PassengerInfo/PassengerInfoEdit";
import TakeBusInfoView from "@contents/AdminOrders/AdminOrdersDetail/TakeBusInfo/TakeBusInfoView";
import TakeBusInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/TakeBusInfo/TakeBusInfoEdit";
import FlightInfoView from "@contents/AdminOrders/AdminOrdersDetail/FlightInfo/FlightInfoView";
import FlightInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/FlightInfo/FlightInfoEdit";
//@mock_data
import {
  order_contact,
  order_represent,
  order_shuttleList,
  order_sepcial,
  order_flight
} from "@mock-data/adminOrders/mockData";
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo
} from "@services/client/mappingQuotationData";
import DetailList from "@components/DetailList";

interface I_Props {
  isEdit: boolean;
  orderType?: "1" | "2" | "3";
  orderData: any;
}

const OrdersDetail = ({ isEdit, orderType = "1", orderData }: I_Props) => {
  console.log("🤣🤣🤣🤣detail頁的orderData", orderData);
  console.log("📃📃📃📃📃isEdit", isEdit);
  console.log("orderType", orderType);
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);
  console.log("contactInfo", contactInfo);
  console.log("passengerInfo", passengerInfo);
  console.log("specialInfo", specialInfo);

  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      "schedule-list": [
        {
          label: "",
          location: "桃園國際機場"
        },
        {
          label: "",
          location: "你家"
        }
      ]
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
          <CarInfoView
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
          <ContactInfoView data={contactInfo} />
        </Collapse>

        {/*以下為變動*/}
        {orderType === "1" ? (
          <ShuttleInfo
            arrayName="order_itinerary_list"
            isEdit={false}
            shuttleList={order_shuttleList}
          />
        ) : (
          <Collapse opened={true} title="航班資訊">
            <FlightInfoView data={order_flight} />
          </Collapse>
        )}
        {/*變動*/}
        <Collapse title="乘車資訊">
          {isEdit ? <TakeBusInfoEdit /> : <TakeBusInfoView />}
        </Collapse>
        <Collapse title="特殊需求">
          <Pane className="special_content" style={{ padding: "20px" }}>
            <DetailList listArray={specialInfo} />
          </Pane>
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          <PassengerInfoView data={passengerInfo} />
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
