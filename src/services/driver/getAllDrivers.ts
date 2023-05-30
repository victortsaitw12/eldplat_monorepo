// 取得所有駕駛資料 QueryDriverList
export const getAllDriver = async (
  filter: { [key: string]: any } = {},
  driverStatus = "1"
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
  const res = await fetch("https://localhost:7088/ATR/QueryDriverList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    // body: JSON.stringify(data),
    body: JSON.stringify({
      filters: driverFilter,
      filter_Needed: true,
      pageInfo: {
        page_Index: 1,
        page_Size: 10,
        orderby: "driver_no",
        arrangement: "asc"
      },
      driver_status: driverStatus //1: 啟用 2:停用
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
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
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
    "指定車輛",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};
