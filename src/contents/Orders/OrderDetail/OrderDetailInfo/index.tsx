import React from "react"
import { Pane } from "evergreen-ui"
import { SectionSTY } from "./style";
import Collapse from "@components/Collapse";
import ShuttleInfo from "@contents/Client/Quote/Detail/ShuttleInfo";
import ContactInfoView from "@contents/Client/Quote/Detail/ContactInfoView";
import TakeBusInfoView from "@contents/Client/Quote/Detail/TakeBusInfoView";
import SpecialInfoView from "@contents/Client/Quote/Detail/SpecialInfoView";

const OrderDetailInfo = ({ 
  orderData,
  contactInfo,
  passengerInfo,
  shuttleInfo,
  takeBusInfo,
  specialInfo
}: any) => {
  return (
    <SectionSTY>
      <Collapse opened={true} title="聯絡資訊">
        <ContactInfoView title="訂單聯絡人" listArray={contactInfo} />
        <Pane marginBottom="20px"></Pane>
        <ContactInfoView title="乘客代表人" listArray={passengerInfo} />
      </Collapse>
      {orderData["quote_type"] === "1" ? (
        <Collapse title="行程資訊" opened={true}>
          <ShuttleInfo listArray={shuttleInfo} title="" />
        </Collapse>
      ) : (
        <>
          {/* <Collapse opened={true} title="航班資訊">
            <FlightInfoView data={orderData} />
          </Collapse>
          <ShuttleInfo arrayName="order_itinerary_list" isEdit={false} /> */}
        </>
      )}
      {orderData.bus_data.length !==0 && <Collapse title="乘車資訊" opened={true}>
        <TakeBusInfoView
          bus_data={orderData.bus_data}
          takeBusInfo={takeBusInfo}
        />
      </Collapse>}
      {specialInfo.length !== 0 && <Collapse title="特殊需求" opened={true}>
        <SpecialInfoView
          listArray={specialInfo}
          remark={orderData["remark"]}
        />
      </Collapse>}
    </SectionSTY>
  )
}

export default OrderDetailInfo