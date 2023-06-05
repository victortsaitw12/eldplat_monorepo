import React from "react";
import { Pane, Group, TimeIcon } from "evergreen-ui";
import { useForm, FormProvider } from "react-hook-form";
import { SectionSTY } from "./style";

import Collapse from "@components/Collapse";
import DetailList from "@components/DetailList";
import VerticalDetail from "@components/VerticalDetail";
import { order_shuttleList } from "@mock-data/adminOrders/mockData";
import ShuttleInfoView from "@contents/AdminOrders/AdminOrdersDetail/ShuttleInfo/ShuttleInfoView";
import DetailItem from "@components/DetailList/DetailItem";
import ProgressList from "@components/ProgressList";
import { MOCK_progressList } from "@mock-data/orders";

const OrderDetail = ({ data }) => {
  const methods = useForm();
  // ----- function ----- //
  const filterData = (
    data: any,
    keysArr: { title: string; key: string; val: string }[]
  ) => {
    return keysArr
      .filter((key) => {
        const value = data[key.key];
        return value !== null && value !== false && value !== "0";
      })
      .map((key) => ({
        title: `${key.title} ${data[key.key]}`,
        value: key.val
      }));
  };

  const contactArr = data?.contact
    ? [
        { title: "姓", value: data.contact[0]?.family_name || "" },
        { title: "名", value: data.contact[0]?.name || "" },
        { title: "手機", value: data.contact[0]?.contact_phone || "" },
        { title: "電話", value: data.contact[0]?.contact_tel || "" },
        { title: "信箱", value: data.contact[0]?.contact_email || "" },
        { title: "通訊軟體", value: data.contact[0]?.social_media || "" }
      ]
    : [];
  const itineraryArr = [];
  const specPassengerArr = [
    { label: "成人", value: data?.adult },
    { label: "兒童", value: data?.child },
    { label: "嬰兒", value: data?.infant }
  ];
  const specLuggageArr = [
    { label: "托運行李 (21吋以上)", value: data?.check_in_luggage },
    { label: "手提行李（20吋以下）", value: data?.carry_on_luggage }
  ];
  const specBusTypeArr = data?.bus?.map((item) => ({
    label: (
      <>
        <span>{item?.bus_type}</span>
        <span>{`(${item?.bus_seat}人座)`}</span>
      </>
    ),
    value: item?.order_quantity
  }));

  const addonArr = [
    {
      title: "舉牌:",
      key: "pickup_sign_remark",
      val: "NT$200"
    },
    {
      title: "司導",
      key: "driver_guide_check",
      val: "NT$200"
    },
    {
      title: "指定車齡",
      key: "bus_age",
      val: "NT$1000"
    },
    {
      title: "兒童座椅 由店家提供",
      key: "child_seat_seller",
      val: "免費"
    },
    {
      title: "兒童座椅 自備",
      key: "child_seat_yourself",
      val: "免費"
    },
    {
      title: "嬰兒座椅 自備",
      key: "infant_seat_yourself",
      val: "免費"
    }
  ];
  const quotationDetailArr = [];
  const repArr = data?.contact
    ? [
        { title: "姓", value: data.contact[1]?.family_name || "" },
        { title: "名", value: data?.contact[1]?.name || "" },
        { title: "手機", value: data?.contact[1]?.contact_phone || "" },
        { title: "電話", value: data?.contact[1]?.contact_tel || "" },
        { title: "信箱", value: data?.contact[1]?.contact_email || "" },
        { title: "通訊軟體", value: data?.contact[1]?.social_media || "" }
      ]
    : contactArr;
  return (
    <FormProvider {...methods}>
      <SectionSTY>
        <Collapse
          title={data.purpose}
          titleChildren={
            <div>
              <span className="collapse__title">{data.purpose}</span>
              <span className="collapse__subTitle">
                旅遊｜9人座車（4-7人搭乘）
              </span>
            </div>
          }
          opened
        >
          <Pane style={{ background: "#fff" }}>
            <DetailItem title="乘車日期" value={data.departure_date} />
            <DetailItem title="詢價編號" value={data.quote_no} />
            <ProgressList dataLists={MOCK_progressList} />
          </Pane>
        </Collapse>
        <Pane>
          <Collapse title={"訂單聯絡人"} opened>
            <Pane style={{ padding: "20px" }}>
              <DetailList listArray={contactArr} />
            </Pane>
          </Collapse>
          <ShuttleInfoView shuttleList={order_shuttleList} />
          <Collapse title={"乘車資訊"} opened>
            <Pane style={{ padding: "20px" }}>
              <VerticalDetail title="乘客數量" items={specPassengerArr} />
              <VerticalDetail title="行李件數" items={specLuggageArr} />
              <VerticalDetail title="車型及數量" items={specBusTypeArr} />
            </Pane>
          </Collapse>
          <Collapse title={"特殊需求"} opened>
            <Pane style={{ padding: "20px" }} className="addon">
              <DetailList listArray={filterData(data, addonArr)} />
            </Pane>
          </Collapse>
          <Collapse title={"旅客代表人"} opened>
            <Pane style={{ padding: "20px" }}>
              <DetailList listArray={repArr} />
            </Pane>
          </Collapse>
        </Pane>
      </SectionSTY>
    </FormProvider>
  );
};
export default OrderDetail;
