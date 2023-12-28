import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";
import { DoubleCollapseWrap } from "./ShuttleInfo/style"; 
import { MainSTY, ShadowSTY } from "./style";
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo,
  mappingProgressInfo,
  mappingShuttleInfo,
  mappingTakeBusInfo
} from "@services/client/mappingQuotationData";
import { QUOTE_TYPE, PURPOSE } from "@services/getDDL";
import SimpleTabs from "@components/SimpleTabs";
import OrderStatusInfo from "./OrderStatusInfo";
import OrderDetailInfo from "./OrderDetailInfo";
import OrderModifyInfo from "./OrderModifyInfo";

const DUMMY_modificationRecord = {
  requestId: "123456",
  requestContent: "需求內容需求內容需求內容需求內容",
  requestTimestamp: "2022-11-13 13:50",
  adjustments: [
    {
      type: "乘客數量修改",
      details: ["乘客成人改為30位", "舉牌內容改為：舉牌內容舉牌內容"],
      timestamp: "2022-11-13 14:00",
    },
    {
      type: "上車地點修改",
      details: ["行程第1天上車地點改為台北車站"],
      timestamp: "2022-11-13 14:30",
    },
  ],
};

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
  const progressInfo = mappingProgressInfo(orderData.status_list);
  const shuttleInfo = mappingShuttleInfo(orderData.order_itinerary_list);
  const takeBusInfo = mappingTakeBusInfo(orderData);
  const [currentTab, setCurrentTab] = React.useState(1);

  const tabsArray = [
    {
      label: "訂單內容",
      value: 1
    },
    {
      label: (<div className="tab notice">修改紀錄</div>),
      value: 2
    },
  ];

  const handleTabChange = (v: number) => {
    setCurrentTab(v);
    console.log("change tabs", v);
  };

  return (
    <FormProvider {...methods}>
      <form>
        <MainSTY>
          <OrderStatusInfo progressInfo={progressInfo} orderData={orderData} />
          <ShadowSTY>
            <DoubleCollapseWrap>
              <SimpleTabs
                tabsArray={tabsArray}
                onTabChange={(v: any) => handleTabChange(v)}
                defaultTab={1}
              />
              {currentTab == 1 && 
                <OrderDetailInfo 
                  orderData={orderData}
                  contactInfo={contactInfo}
                  passengerInfo={passengerInfo}
                  shuttleInfo={shuttleInfo}
                  takeBusInfo={takeBusInfo}
                  specialInfo={specialInfo}
                />}

              {currentTab == 2 && <OrderModifyInfo modificationRecord={DUMMY_modificationRecord} />}
            </DoubleCollapseWrap>
          </ShadowSTY>
        </MainSTY>
      </form>
    </FormProvider>
  );
};
export default OrderDetail;
