import React from "react";
import { Pane, Text, Button } from "evergreen-ui";
import { BodySTY } from "./style";
import DetailList from "@components/DetailList";
import LabelButton from "@components/Button/Primary/Label";
interface I_Props {
  orderData: any;
}
const PriceInfoView = ({ orderData }: I_Props) => {
  console.log("🎶🎶🎶🎶🎶🎶🎶🎶🎶PriceInfoView", orderData);
  return (
    <BodySTY>
      <Pane>
        <LabelButton className="submit_btn" text="送出報價" />
        <Pane className="total_price">
          <Text>總金額</Text>
          <Text>NT${orderData?.full_payment_amount || "0"}</Text>
        </Pane>
        <Text>2023-05-01 前繳款</Text>
        <hr />
      </Pane>
      <Pane className="price_detail">
        <DetailList
          listArray={[
            {
              title: "基本車資",
              value: orderData?.basic_amount
                ? "NT$" + orderData?.basic_amount
                : "0"
            },
            {
              title: "小費",
              value: orderData?.tip ? "NT" + orderData?.tip : "0"
            },
            {
              title: "旺季加價",
              value: orderData?.high_season_charge
                ? "NT$" + orderData?.high_season_charge
                : "0"
            },
            {
              title: "夜間加價",
              value: orderData?.night_charge
                ? "NT$" + orderData?.night_charge
                : "0"
            },
            {
              title: "偏遠地區加價",
              value: orderData?.remote_charge
                ? "NT$" + orderData?.remote_charge
                : "0"
            },
            {
              title: "司導",
              value: orderData?.driver_guide_charge
                ? "NT$" + orderData?.driver_guide_charge
                : "0"
            },
            {
              title: "指定車齡",
              value: orderData?.bus_age_charge
                ? "NT$" + orderData?.bus_age_charge
                : "0"
            },
            {
              title: "特大/特殊行李",
              value: orderData?.special_luggage_charge
                ? "NT$" + orderData?.special_luggage_charge
                : "0"
            },
            {
              title: "攜帶寵物",
              value: orderData?.bring_pets_charge
                ? "NT" + orderData?.bring_pets_charge
                : "0"
            },
            {
              title: "杯水",
              value: orderData?.mineral_water_charge
                ? "NT$" + orderData?.mineral_water_charge
                : "0"
            },
            {
              title: "瓶裝水",
              value: orderData?.bottled_water_charge
                ? "NT$" + orderData?.bottled_water_charge
                : "0"
            },
            {
              title: "兒童座椅",
              value: orderData?.child_seat_charge
                ? "NT$" + orderData?.child_seat_charge
                : "0"
            },
            {
              title: "嬰兒座椅",
              value: orderData?.infant_seat_charge
                ? "NT$" + orderData?.infant_seat_charge
                : "0"
            }
          ]}
        />
      </Pane>
    </BodySTY>
  );
};
export default PriceInfoView;
