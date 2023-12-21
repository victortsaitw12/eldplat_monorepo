import React from "react";
import { Pane } from "evergreen-ui";
import { useForm, FormProvider } from "react-hook-form";
import dayjs from "dayjs";

import Collapse from "@components/Collapse";
import { DoubleCollapseWrap } from "./ShuttleInfo/style"; 
import { MainSTY, CustomTableSTY, SectionSTY } from "./style";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo,
  mappingProgressInfo,
  mappingShuttleInfo,
  mappingTakeBusInfo
} from "@services/client/mappingQuotationData";
import { QUOTE_TYPE, PURPOSE } from "@services/getDDL";
// import ShuttleInfo from "@contents/Orders/OrderDetail/ShuttleInfo";
import ShuttleInfo from "@contents/Client/Quote/Detail/ShuttleInfo";
import TakeBusInfoView from "@contents/Client/Quote/Detail/TakeBusInfoView";
import FlightInfoView from "@contents/Client/Quote/Detail/FlightInfoView";
import SpecialInfoView from "@contents/Client/Quote/Detail/SpecialInfoView";
import ContactInfoView from "@contents/Client/Quote/Detail/ContactInfoView";
import Section from "@contents/Client/Quote/Section";
import DetailGrid from "@components/DetailGrid";
import Link from "next/link";
import SimpleTabs from "@components/SimpleTabs";

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
          <CustomTableSTY>
              <Section title="訂單資訊">
                {/* <Collapse
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
                          ? "| 接機"
                          : orderData.quote_type === "3"
                          ? "| 送機"
                          : orderData.purpose
                          ? `| ${PURPOSE[orderData.purpose]?.label}`
                          : "| --"}
                      </span>
                    </div>
                  }
                  opened
                  viewOnly
                >
                </Collapse> */}
                  {/* <Pane style={{ background: "#fff" }}>
                    <DetailItem
                      title="乘車日期"
                      value={
                        orderData.departure_date
                          ? dayjs(orderData.departure_date).format("YYYY/MM/DD")
                          : "--"
                      }
                    />
                    <DetailItem title="詢價編號" value={orderData.quote_no} />
                  </Pane> */}
                <Pane marginBottom="24px">
                  <ProgressList color="#5E6C84" dataLists={progressInfo} showTick={true} />
                </Pane>
                <DetailGrid 
                  listArray={[
                    {
                      title: "訂單編號",
                      value: <div className="quote">{orderData.quote_no}</div>
                    },
                    {
                      title: "服務項目",
                      value: orderData.quote_type === "1" ? "客製包車" : "機場接送"
                    }
                  ]}
                />
              </Section>
          </CustomTableSTY>
          <DoubleCollapseWrap>
            <SimpleTabs
              tabsArray={tabsArray}
              onTabChange={(v: any) => handleTabChange(v)}
              defaultTab={1}
            />
            {currentTab == 1 && <SectionSTY>
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
            </SectionSTY>}
            {currentTab == 2 && <div>修改</div>}
          </DoubleCollapseWrap>
        </MainSTY>
      </form>
    </FormProvider>
  );
};
export default OrderDetail;
