import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 10,
  orderby: null,
  arrangement: "desc",
  total: 0,
  last_Page: 0
};

// 取得所有駕駛資料 QueryDriverList
export const getAllDriver = async (
  filter: { [key: string]: any } = {},
  driverStatus = "1",
  pageQuery = defaultPageInfo
) => {
  const driverFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      driverFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(`${API_Path["getAllDrivers"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    // body: JSON.stringify(data),
    body: JSON.stringify({
      filters: driverFilter,
      filter_Needed: true,
      pageInfo: pageQuery,
      driver_status: driverStatus //1: 啟用 2:停用
    })
  });
  return res.json();
};

export const getDriverTitle = () => {
  const DUMMY_TITLES = [
    "姓名",
    "E-MAIL",
    "車隊",
    "指定車輛",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};
