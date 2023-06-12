import API_Path from "./apiPath";
// 創建詢價/報價單
export const getQuotationByFilter = async (data: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  for (const key in data) {
    console.log("key", key);
    if (data[key].data !== 0) {
      filteredNullData[key] = data[key];
    } else if (data[key] !== null && data[key].trim() !== "") {
      filteredNullData[key] = data[key];
    }
  }
  console.log("filteredNullData", filteredNullData);
  //
  const res = await fetch(API_Path["GetQuotationByFilter"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      order_filter: [],
      filter_needed: true,
      page_info: {
        page_Index: 1, //第幾頁
        page_Size: 10, //一頁幾筆
        orderby: "quote_no" //可根據詢價號碼做排序
        // arrangement: "asc", //升序or降序
      }
    })
  });
  return res.json();
};
