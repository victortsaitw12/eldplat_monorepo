import { token } from "./token";

// 取得所有駕駛資料 QueryDriverList
export const getAllDriver = async (filter: { [key: string]: any } = {}) => {
  // console.log("getAllDriver filter:", filter);
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
  const res = await fetch("https://localhost:7088/ATR/QueryDriverList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    // body: JSON.stringify(data),
    body: JSON.stringify({
      filters: driverFilter,
      filter_Needed: true,
      pageInfo: {
        page_Index: 1,
        page_Size: 10,
        orderby: "user_No",
        arrangement: "asc",
        total: 0,
        last_page: 0
      }
    })
  });
  return res.json();
};
// SWAGGER: "https://localhost:7077/api/Driver/QueryDriverList/api/QueryDriverList/1"
// 測試: "https://jsonplaceholder.typicode.com/todos/"

// 取得所有員工(filter: 非駕駛)資料
export const getAllNonDriverEmployee = async () => {
  const res = await fetch("https://localhost:7088/ATR/FilterUser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};
// "https://localhost:7188/Gateway_AccountDriver/Driver/FilterUser/api/FilterUser/1",
// 測試: "https://jsonplaceholder.typicode.com/todos/"

export const getDriverTitle = () => {
  const DUMMY_TITLES = [
    "姓名",
    "E-MAIL",
    "車輛團隊",
    "主要車輛",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};

// export const driverPattern = {
//   id: { label: "", value: "" },
//   user_Name: { label: "", value: "" },
//   user_Email: { label: "", value: "" },
//   carteam: { label: "", value: "" },
//   car: { label: "", value: "" },
//   group_Name: { label: "", value: "" },
//   loginCount: { label: "", value: "" },
//   first_Login: { label: "", value: "" },
//   invt_Status: { label: "", value: "" }
// };
// export const driverParser = (
//   data: any,
//   key: string
// ): { label: any; value: any } => {
//   if (key === "id") {
//     return {
//       label: data["user_No"] || null,
//       value: data["user_No"] || null
//     };
//   }
//   return {
//     label: data[key] || null,
//     value: data[key] || null
//   };
// };
