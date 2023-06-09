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
import {
  STATUS_CODE,
  QUOTE_TYPE,
  PURPOSE,
  BUS_AGE,
  BRING_PETS_RADIO
} from "@services/getDDL";

const OrderDetail = ({ data }) => {
  const methods = useForm();
  // ----- function ----- //

  const filterData = (
    keysArr: { title: string; key: string; val: string; isShown: boolean }[]
  ) => {
    return keysArr.filter((item) => item.isShown === true);
  };
  // ----- render ----- //
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

  const renderContactArr = (contactData) => {
    const contactArr = [
      { title: "姓", value: contactData.family_name || "" },
      { title: "名", value: contactData.name || "" },
      {
        title: "手機",
        value: `${contactData.contact_phone_code || ""} ${
          contactData.contact_phone || "---"
        }`
      },
      {
        title: "電話",
        value: `${contactData.contact_tel_code || ""} ${
          contactData.contact_tel || "---"
        }`
      },
      { title: "信箱", value: contactData.contact_email },
      {
        title: "通訊軟體",
        value: `${contactData.social_media_type || ""} ${
          contactData.social_media || "---"
        }`
      }
    ];
    return contactArr;
  };
  const itineraryArr = [];
  const specPassengerArr = [
    { label: "成人", value: data?.adult },
    { label: "兒童", value: data?.child },
    { label: "嬰兒", value: data?.infant }
  ];
  const specLuggageArr = [
    {
      label: "托運行李 (21吋以上)",
      value: " " + data?.check_in_luggage + " 件"
    },
    {
      label: "手提行李（20吋以下）",
      value: " " + data?.carry_on_luggage + " 件"
    }
  ];
  const specBusTypeArr = data?.bus_data?.map((item) => ({
    label: (
      <>
        <span>{item?.bus_type}</span>
        <span>{`(${item?.bus_seat}人座)`}</span>
      </>
    ),
    value: item?.order_quantity
  }));

  const extraChargeArr = [
    {
      title: `舉牌: ${data.pickup_sign_remark}`,
      value:
        data.pickup_sign_carge && data.pickup_sign_carge === 0
          ? "免費"
          : `NT$ ${data.pickup_sign_carge || "未設定收費金額"}`,
      isShown: data.pickup_sign_check === "1"
    },
    {
      title: "司導",
      key: "driver_guide_check",
      value:
        data.driver_guide_charge === 0
          ? "免費"
          : `NT$ ${data.driver_guide_charge || "未設定收費金額"}`,
      isShown: data.driver_guide_check === "1"
    },
    {
      title: `指定車齡 ${BUS_AGE[data.bus_age].label}`,
      key: "bus_age",
      value:
        data.bus_age_charge === 0
          ? "免費"
          : `NT$ ${data.bus_age_charge || "未設定收費金額"}`,
      isShown: data.bus_age_check === "1"
    },
    {
      title: "攜帶特大/特殊行李",
      key: "special_luggage_check",
      value:
        data.special_luggage_charge === 0
          ? "免費"
          : `NT$ ${data.special_luggage_charge || "未設定收費金額"}`,
      isShown: data.special_luggage_check === "1"
    },
    {
      title: `攜帶寵物: ${BRING_PETS_RADIO[data.bring_pets_radio].label}`,
      key: "bring_pets_charge",
      value:
        data.bring_pets_charge === 0
          ? "免費"
          : `NT$ ${data.bring_pets_charge || "未設定收費金額"}`,
      isShown: data.bring_pets_check === "1"
    },
    {
      title: "杯水",
      key: "mineral_water_check",
      value:
        data.mineral_water_charge === 0
          ? "免費"
          : `NT$ ${data.mineral_water_charge || "未設定收費金額"}`,
      isShown: data.mineral_water_check === "1"
    },
    {
      title: `瓶裝水 ${data.bottled_water_box} 箱`,
      key: "bottled_water_check",
      value:
        data.bottled_water_charge === 0
          ? "免費"
          : `NT$ ${
              data.bottled_water_charge * data.bottled_water_box ||
              "未設定收費金額"
            }`,
      isShown: data.bottled_water_check === "1"
    },
    {
      title: `兒童座椅 由店家提供 ${data.child_seat_seller}`,
      key: "child_seat_seller",
      value:
        data.child_seat_charge === 0
          ? "免費"
          : `NT$ ${
              data.child_seat_charge * data.child_seat_seller ||
              "未設定收費金額"
            }`,
      isShown: data.child_seat_check === "1" && data.child_seat_seller !== 0
    },
    {
      title: `兒童座椅 自備 ${data.child_seat_yourself}`,
      key: "child_seat_yourself",
      value: "免費",
      isShown: data.child_seat_check === "1" && data.child_seat_yourself !== 0
    },
    {
      title: `嬰兒座椅 由店家提供 ${data.infant_seat_seller}`,
      key: "infant_seat_seller",
      value:
        data.infant_seat_charge === 0
          ? "免費"
          : `NT$ ${data.infant_seat_charge || "未設定收費金額"}`,
      isShown: data.infant_seat_check === "1" && data.infant_seat_seller !== 0
    },
    {
      title: `嬰兒座椅 自備 ${data.infant_seat_yourself}`,
      key: "infant_seat_yourself",
      value: "免費",
      isShown: data.infant_seat_check === "1" && data.infant_seat_yourself !== 0
    }
  ];
  const quotationDetailArr = [];

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
                <DetailList
                  listArray={renderContactArr.call(
                    null,
                    data.order_contact_list[0]
                  )}
                />
              </Pane>
            </Collapse>
            {data.order_itinerary_list?.map((item, i) => (
              <Collapse
                opened={true}
                key={i}
                title={
                  "第" +
                  item.day_number +
                  "天  " +
                  dayjs(item.day_date).format("YYYY-MM-DD")
                }
              >
                <Pane style={{ padding: "20px" }}>
                  <span className="detail-with-icon">
                    <DetailItem
                      title={
                        <>
                          <TimeIcon color="#8EA8C7" size={11} />
                          <span> 出發時間</span>
                        </>
                      }
                      value={item.departure_time || "-"}
                    />
                  </span>
                  <ScheduleList
                    control={methods.control}
                    register={methods.register}
                    fatherArrayName={"forFormUseOnly"}
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
                <DetailList listArray={filterData(extraChargeArr)} />
              </Pane>
            </Collapse>
            <Collapse title={"旅客代表人"} opened>
              <Pane style={{ padding: "20px" }}>
                <DetailList
                  listArray={renderContactArr.call(
                    null,
                    data.order_contact_list[1]
                  )}
                />
              </Pane>
            </Collapse>
          </Pane>
        </SectionSTY>
      </form>
    </FormProvider>
  );
};
export default OrderDetail;
