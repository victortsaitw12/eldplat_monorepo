import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

// 檢視所有駕駛當月排休

export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 10,
  orderby: "driver_no", // 準備刪除
  arrangement: "desc", // 準備刪除
  total: 0, // 準備刪除
  last_Page: 0 // 準備刪除
};
export const getAllDriverScheduleListFiltered = async (
  dateStr: string,
  filter: { [key: string]: any } = {},
  pageInfo = defaultPageInfo
) => {
  const shiftFilter = [
    {
      field_Name: "Short_Schd_Date",
      arrayConditions: "equal",
      value: dateStr,
      dataType: "string"
    }
  ];
  for (const key in filter) {
    if (filter[key].value !== "") {
      shiftFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  const res = await fetch(`${API_Path["getAllDriverScheduleList"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    // body: JSON.stringify(data),
    body: JSON.stringify({
      schedule_Filter: shiftFilter,
      filter_Needed: true, // 準備刪除
      pageInfo: pageInfo,
      default_Needed: true // 準備刪除
    })
  });
  return await res.json();
};
