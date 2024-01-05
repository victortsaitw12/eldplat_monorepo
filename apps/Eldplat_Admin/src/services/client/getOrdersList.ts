import API_Path from "./apiPath";
// 訂單管理列表 GetOrderManage
export const getOrdersList = async (status_code: 1 | 2 | 3 | 4) => {
  const url = new URL(API_Path["getOrdersList"]);
  const searchParams = new URLSearchParams({
    statusCode: status_code.toString()
  });
  url.search = searchParams.toString();
  const response = await fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await response.json();
  const data: I_Order[] = result.dataList;
  return data;
};

export interface I_Order {
  quote_total_amount: string; //"2000.00"
  date: string; // "2023/5/5 上午 12:00:00"
  isfullpay: boolean;
  checkdeposit: boolean;
  purpose: string;
  quote_no: string; //"ORD202306050015"
  quote_type: string; //"2"
  status_list: [
    {
      name: string;
      status: string; //"ok"
      date: string; //"2023-06-05 16:58"
    }
  ];
}
