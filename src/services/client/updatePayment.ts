import API_Path from "./apiPath";

// 支付狀態異動
export const updatePayment = async (status_code: string, quote_no: string) => {
  const url = new URL(API_Path["updatePayment"]);
  const searchParams = new URLSearchParams({
    quote_no: quote_no,
    status_code: status_code
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
