import API_Path from "./apiPath";
// 取得詢價單&報價單列表
export const getQuotationByFilter = async (
  filter: { [key: string]: any } = {}
) => {
  const orderFilter = [];
  const filteredNullData: { [key: string]: any } = {};
  for (const key in filter) {
    console.log("key", key);
    if (filter[key].data !== 0) {
      filteredNullData[key] = filter[key];
    } else if (filter[key] !== null && filter[key].trim() !== "") {
      filteredNullData[key] = filter[key];
    }
  }
  console.log("filteredNullData", filteredNullData);
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
  console.log("🕯️🕯️🕯️🕯️🕯️orderFilter", orderFilter);
  //
  const res = await fetch(API_Path["GetQuotationByFilter"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      order_filter: orderFilter,
      filter_needed: true,
      page_info: {
        page_Index: 1, //第幾頁
        page_Size: 10, //一頁幾筆
        orderby: "quote_no", //可根據詢價號碼做排序
        arrangement: "asc" //升序or降序
      }
    })
  });
  return res.json();
};
