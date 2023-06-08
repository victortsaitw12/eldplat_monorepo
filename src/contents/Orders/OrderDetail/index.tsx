import React from "react";
import { Pane, Group, TimeIcon, Button } from "evergreen-ui";
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
import { MOCK_progressList } from "@mock-data/orders";
import { STATUS_CODE, QUOTE_TYPE, PURPOSE } from "@services/getDDL";

const OrderDetail = ({ data }) => {
  const methods = useForm();
  // ----- function ----- //
  const renderDataList = (list) => {
    const dataArr = [
      "送出詢價", //1|2
      "收到報價", //3|4
      "接受報價", //5|7
      "訂單成立", //"6" || "8" || "12" || "13" || "14"
      "結案" //15
    ].map((item) => ({
      label: item,
      status: "pending", // "ok" | "pending" | "error"
      date: ""
    }));
    const renderOverdue = (item) => {
      dataArr.splice(3, 0, {
        label: STATUS_CODE[item.status_code].label,
        status: "error",
        date: item.upddate
      });
      //TODO 更新訂單成立跟結案的狀態=>'due'? 待確認
    };
    list.forEach((item) => {
      switch (item.status_code) {
        case "1" || "2":
          dataArr[0].status = "ok";
          dataArr[0].date = dayjs(item.upddate).format("MM/DD HH:MM");
          break;
        case "3" || "4":
          dataArr[1].status = "ok";
          dataArr[1].date = item.upddate;
          break;
        case "5" || "7":
          dataArr[2].status = "ok";
          dataArr[2].date = item.upddate;
          break;
        case "9" || "10" || "11":
          renderOverdue(item);
          break;
        case "6" || "8" || "12" || "13" || "14":
          dataArr[dataArr.length - 2].status = "ok";
          dataArr[dataArr.length - 2].date = item.upddate;
          break;
        case "15":
          dataArr[dataArr.length - 1].status = "ok";
          dataArr[dataArr.length - 1].date = item.upddate;
          break;
        default:
          return;
      }
    });
    return dataArr;
  };
  // ----- render ----- //
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
  const onSubmit = (data) => console.log("Check:", data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <SectionSTY>
          <Collapse
            title={QUOTE_TYPE[data.quote_type]?.label}
            titleChildren={
              <div>
                <span className="collapse__title">
                  {QUOTE_TYPE[data.quote_type]?.label}
                </span>
                <span className="collapse__subTitle">
                  {`${PURPOSE[data.purpose]?.label || "---"}｜${
                    data.bus_type?.bus_seat || "---"
                  }人座車（4-7人搭乘）`}
                </span>
              </div>
            }
            opened
          >
            <Pane style={{ background: "#fff" }}>
              <DetailItem
                title="乘車日期"
                value={dayjs(data.departure_date).format("YYYY/MM/DD")}
              />
              <DetailItem title="詢價編號" value={data.quote_no} />
              <ProgressList
                dataLists={renderDataList.call(null, data.orderStatusesList)}
              />
            </Pane>
          </Collapse>
          <Pane>
            <Collapse title={"訂單聯絡人"} opened>
              <Pane style={{ padding: "20px" }}>
                <DetailList listArray={contactArr} />
              </Pane>
            </Collapse>
            {data.order_itinerary_list?.map((item, i) => (
              <Collapse
                opened={true}
                key={i}
                title={"第" + item.day_number + "天  " + item.day_date}
              >
                <Pane style={{ padding: "20px" }}>
                  <span className="detail-with-icon">
                    <TimeIcon color="#8EA8C7" size={11} />
                    <DetailItem
                      title="出發時間"
                      value={item.departure_time || "-"}
                    />
                  </span>
                  <ScheduleList
                    control={methods.control}
                    register={methods.register}
                    fatherArrayName={"fatherArrayName"}
                    dayIndex={1}
                    arrayName={"stopover_addresses"}
                  />
                </Pane>
              </Collapse>
            ))}

            {/* <ShuttleInfoView shuttleList={order_shuttleList} /> */}
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
      </form>
    </FormProvider>
  );
};
export default OrderDetail;
