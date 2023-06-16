import React from "react";
import { Pane } from "evergreen-ui";

import DetailList from "@components/DetailList";
import { BodySTY } from "./style";
interface I_Porps {
  pickup_sign_check?: any; //舉牌需求(勾選) 0:未鉤 1:已鉤
  driver_guide_check?: any; // 司導(勾選) 0:未鉤 1:已鉤
  bus_age_check?: any; // 指定車齡(勾選) 0: 未鈎  1: 已鈎
  bus_age?: any; // 指定車齡代號 例: 下拉代號"01"
  special_luggage_check?: any; // 攜帶特大/特殊行李(勾選) 0:未鉤 1:已鉤
  bring_pets_check?: any; // 攜帶寵物 0: 未鈎  1: 已鈎
  bring_pets_radio?: any; // 攜帶寵物單選代號 "1:攜帶小型寵物...。 2:寵物無法裝籠...（NT$1,000）
  mineral_water_check?: any; // 杯水(勾選) 0:未鈎 1：已鈎
  bottled_water_check?: any; // 瓶裝水(勾選) 0:未鉤 1:已鉤
  bottled_water_box?: any; // 瓶裝水數(箱單位)
  child_seat_check?: any; // 兒童座椅(勾選) 0：未鉤 1:已鉤
  child_seat_seller?: any; // 店家提供數
  child_seat_yourself?: any; // 自備數
  remark?: any;
}
const SpecialInfoView = ({
  pickup_sign_check,
  driver_guide_check,
  bus_age_check,
  special_luggage_check,
  bring_pets_check,
  bring_pets_radio,
  mineral_water_check,
  bottled_water_check,
  bottled_water_box,
  child_seat_check,
  child_seat_seller,
  child_seat_yourself,
  remark
}: I_Porps) => {
  const listArray = [];
  if (pickup_sign_check) {
    listArray.push({
      title: "舉牌：Andy Welcome",
      value: ""
    });
  }
  if (driver_guide_check) {
    listArray.push({
      title: "司導",
      value: ""
    });
  }
  if (bus_age_check) {
    listArray.push({
      title: "指定車齡 3年",
      value: ""
    });
  }

  if (special_luggage_check) {
    listArray.push({
      title: "攜帶特大/特殊行李",
      value: ""
    });
  }

  if (bring_pets_check) {
    listArray.push({
      title: "攜帶寵物",
      value: bring_pets_radio == "1" ? "攜帶小型寵物" : "寵物無法裝籠"
    });
  }

  if (mineral_water_check) {
    listArray.push({
      title: "杯水",
      value: ""
    });
  }

  if (bottled_water_check) {
    listArray.push({
      title: "瓶裝水",
      value: bottled_water_box + "箱"
    });
  }
  if (child_seat_check) {
    if (child_seat_seller && child_seat_seller > 0) {
      listArray.push({
        title: "兒童座椅",
        value: "店家提供" + child_seat_seller + "張"
      });
    }
    if (child_seat_yourself && child_seat_yourself > 0) {
      listArray.push({
        title: "兒童座椅",
        value: "自備數" + child_seat_seller + "張"
      });
    }
  }
  return (
    <BodySTY>
      <Pane className="special_content" style={{ padding: "20px" }}>
        <DetailList listArray={listArray} />
      </Pane>
    </BodySTY>
  );
};
export default SpecialInfoView;
