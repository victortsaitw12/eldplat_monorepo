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

// 取得員工資料
export const getAllEmployees = async (
  filter: { [key: string]: any } = {},
  pageQuery = defaultPageInfo
) => {
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
  // console.log("employeeFilter", employeeFilter);

  const res = await fetch(API_Path["GetAllEmployees"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      filters: employeeFilter,
      filter_Needed: false,
      pageInfo: pageQuery,
      user_status: "1"
    })
  });
  return res.json();
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
