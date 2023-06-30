import React from "react";
import { Pane } from "evergreen-ui";

import DetailList from "@components/DetailList";
import { BodySTY } from "./style";
interface I_Porps {
  pickup_sign_check?: any; //舉牌需求(勾選) 0:未鉤 1:已鉤
  pickup_sign_remark?: string; //舉牌備註
  driver_guide_check?: any; // 司導(勾選) 0:未鉤 1:已鉤
  driver_guide_charge?: string; //司導價格
  bus_age_check?: any; // 指定車齡(勾選) 0: 未鈎  1: 已鈎
  bus_age?: any; // 指定車齡代號 例: 下拉代號"01"
  bus_age_charge?: string; //指定車齡收費
  special_luggage_check?: any; // 攜帶特大/特殊行李(勾選) 0:未鉤 1:已鉤
  special_luggage_charge?: string; //攜帶特大/特殊行李收費
  bring_pets_check?: any; // 攜帶寵物 0: 未鈎  1: 已鈎
  bring_pets_radio?: any; // 攜帶寵物單選代號 "1:攜帶小型寵物...。 2:寵物無法裝籠...（NT$1,000）
  bring_pets_charge?: string; //攜帶寵物收費
  mineral_water_check?: any; // 杯水(勾選) 0:未鈎 1：已鈎
  mineral_water_charge?: string; //杯水收費
  bottled_water_check?: any; // 瓶裝水(勾選) 0:未鉤 1:已鉤
  bottled_water_box?: any; // 瓶裝水數(箱單位)
  bottled_water_charge?: string; //瓶裝水收費
  child_seat_check?: any; // 兒童座椅(勾選) 0：未鉤 1:已鉤
  child_seat_seller?: any; // 店家提供數
  child_seat_yourself?: any; // 自備數
  child_seat_charge?: string; //兒童座椅收費
  infant_seat_check?: any; // 嬰兒座椅(勾選) 0：未鉤 1:已鉤
  infant_seat_seller?: any; // 店家提供數
  infant_seat_yourself?: any; // 自備數
  infant_seat_charge?: string; //嬰兒座椅收費
  remark?: any;
}
const SpecialInfoView = ({
  pickup_sign_check,
  pickup_sign_remark,
  driver_guide_check,
  driver_guide_charge,
  bus_age_check,
  bus_age_charge,
  special_luggage_check,
  special_luggage_charge,
  bring_pets_check,
  bring_pets_radio,
  bring_pets_charge,
  mineral_water_check,
  mineral_water_charge,
  bottled_water_check,
  bottled_water_box,
  bottled_water_charge,
  child_seat_check,
  child_seat_seller,
  child_seat_yourself,
  child_seat_charge,
  infant_seat_check,
  infant_seat_seller,
  infant_seat_yourself,
  infant_seat_charge,
  remark
}: I_Porps) => {
  const listArray = [];
  if (pickup_sign_check == "1") {
    listArray.push({
      title: "舉牌",
      value: pickup_sign_remark || "-"
    });
  }
  if (driver_guide_check == "1") {
    listArray.push({
      title: "司導",
      value: driver_guide_charge
        ? "NT$" + driver_guide_charge.toLocaleString()
        : "免費"
    });
  }
  if (bus_age_check == "1") {
    listArray.push({
      title: "指定車齡 3年",
      value: bus_age_charge ? "NT$" + bus_age_charge.toLocaleString() : "免費"
    });
  }

  if (special_luggage_check == "1") {
    listArray.push({
      title: "攜帶特大/特殊行李",
      value: special_luggage_charge
        ? "NT$" + special_luggage_charge.toLocaleString()
        : "免費"
    });
  }

  if (bring_pets_check == "1") {
    listArray.push({
      title:
        "攜帶寵物:" + bring_pets_radio == "1" ? "攜帶小型寵物" : "寵物無法裝籠",
      value: bring_pets_charge
        ? "NT$" + bring_pets_charge.toLocaleString()
        : "免費"
    });
  }

  if (mineral_water_check == "1") {
    listArray.push({
      title: "杯水",
      value: mineral_water_charge
        ? "NT$" + mineral_water_charge.toLocaleString()
        : "免費"
    });
  }

  if (bottled_water_check == "1") {
    listArray.push({
      title: "瓶裝水" + bottled_water_box + "箱",
      value: bottled_water_charge
        ? "NT$" + bottled_water_charge.toLocaleString()
        : "免費"
    });
  }
  if (child_seat_check == "1") {
    if (child_seat_seller && child_seat_seller > 0) {
      listArray.push({
        title: "兒童座椅" + "店家提供" + child_seat_seller + "張",
        value: child_seat_charge
          ? "NT$" + child_seat_charge.toLocaleString()
          : "免費"
      });
    }
    if (child_seat_yourself && child_seat_yourself > 0) {
      listArray.push({
        title: "兒童座椅" + "自備數" + child_seat_seller + "張",
        value: child_seat_charge
          ? "NT$" + child_seat_charge.toLocaleString()
          : "免費"
      });
    }
  }
  if (infant_seat_check == "1") {
    if (infant_seat_seller && infant_seat_seller > 0) {
      listArray.push({
        title: "嬰兒座椅" + "店家提供" + infant_seat_seller + "張",
        value: infant_seat_charge
          ? "NT$" + infant_seat_charge.toLocaleString()
          : "免費"
      });
    }
    if (infant_seat_yourself && infant_seat_yourself > 0) {
      listArray.push({
        title: "嬰兒座椅" + "自備數" + infant_seat_seller + "張",
        value: infant_seat_charge
          ? "NT$" + infant_seat_charge.toLocaleString()
          : "免費"
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
