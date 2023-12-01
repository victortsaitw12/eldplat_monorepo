import { PatternType } from "@utils/mappingQueryData";
import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

import { createElement } from "react";
// 取得員工資料
export const getAllEmployees = async (
  pageInfo: I_PageInfo,
  filter: { [key: string]: any } = {},
  user_status = "1"
) => {
  console.log("filter", filter);
  const employeeFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      employeeFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }

  const url = new URL(API_Path["GetAllEmployees"]);
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      user_status,
      filters: employeeFilter,
      filter_Needed: true,
      pageInfo: pageInfo
    })
  });
  console.log("res", res);
  const data = await res.json();
  console.log("data", data);
  return data;
};

export const getEmployeeTitle = () => {
  const DUMMY_TITLES = [
    "姓名",
    "E-MAIL",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};

export const employeePattern: PatternType = {
  id: true,
  user_name: true,
  user_email: true,
  user_group: true,
  login_count: true,
  join_time: true,
  user_status: true
};

export function employeeParser(data: any, key: string) {
  if (key === "id") {
    return {
      label: data["user_no"],
      value: data["user_no"]
    };
  }
  if (key === "user_name") {
    return {
      label: data["user_first_name"] + data["user_name"],
      value: data["user_first_name"] + data["user_name"]
    };
  }
  if (key === "user_group") {
    return {
      label: data["group_name"],
      value: data["group_name"]
    };
  }
  if (key === "login_count") {
    return {
      label: data["logincount"], // no data yet, give fake
      value: data["logincount"]
    };
  }
  if (key === "join_time") {
    return {
      label: data["first_login"], // no data yet, give fake
      value: data["first_login"] // no data yet, give fake
    };
  }
  if (key === "user_status") {
    return {
      label: data["invt_status"],
      value: data["invt_status"]
    };
  }
  return {
    label: data[key] || "--",
    value: data[key] || null
  };
}
