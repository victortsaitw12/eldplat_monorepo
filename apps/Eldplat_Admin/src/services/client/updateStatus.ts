import API_Path from "./apiPath";

// 詢價單狀態異動
// update: quotation status (not involved in money)
export const updateStatus = async (
  status_code: string,
  quote_no: string,
  // 2: 收到詢價 3: 送出報價 5: 接受報價 6: 已付全額 7: 已付訂金 8: 已付尾款
  //9: 訂金逾期 10: 尾款逾期 11: 繳款逾期 13: 預約派車 14: 預約完成 15: 結案
  status_type: string //FE: 前台 BE: 後台
) => {
  const url = new URL(API_Path["updateStatus"]);
  const searchParams = new URLSearchParams({
    quote_no: quote_no,
    status_code: status_code,
    status_type: status_type
  });
  url.search = searchParams.toString();
  const response = await fetch(url.href, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await response.json();
  return result;
};
