import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 10
};

// 取得詢價單&報價單列表
export const getQuotationByFilter = async (
  filter: { [key: string]: any } = {},
  tab_code?: any,
  pageQuery = defaultPageInfo
) => {
  const orderFilter = [];
  const filteredNullData: { [key: string]: any } = {};
  for (const key in filter) {
    if (filter[key].data !== 0) {
      filteredNullData[key] = filter[key];
    } else if (filter[key] !== null && filter[key].trim() !== "") {
      filteredNullData[key] = filter[key];
    }
  }

  for (const key in filteredNullData) {
    if (filteredNullData[key].value !== "") {
      orderFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }

  //
  const res = await fetch(API_Path["GetQuotationByFilter"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      tab_code: tab_code,
      order_filter: orderFilter,
      filter_needed: true,
      page_info: pageQuery
    })
  });
  return res.json();
};
