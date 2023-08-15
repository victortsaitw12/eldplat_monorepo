import API_Path from "./apiPath";
import { PatternType } from "@utils/mappingQueryData";
import { PageInfoType } from "../type";

export const getAllBuses = async (
  pageInfo: PageInfoType,
  filter: { [key: string]: any } = {},
  bus_status = "1"
) => {
  const busFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      busFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  //
  const url = new URL(API_Path["getAllBuses"]);
  //
  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      bus_status,
      bus_Filter: busFilter,
      filter_Needed: true,
      page_Info: pageInfo
    })
  });
  const data = await res.json();
  return data;
};

export const getBusTitle = () => {
  const DUMMY_TITLES = [
    "車輛名稱",
    "車種",
    "品牌",
    "車型",
    "車牌",
    "車齡",
    "車隊",
    "主要駕駛",
    "狀態",
    "所有權"
  ];
  return DUMMY_TITLES;
};

export const busPattern: PatternType = {
  id: true,
  bus_name: true,
  type: true,
  make: true,
  model: true,
  license_plate: true,
  age: true,
  bus_group: true,
  driver_name: true,
  status: true,
  ownership: true
};
