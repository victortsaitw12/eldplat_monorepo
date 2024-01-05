import API_Path from "./apiPath";

export const getOrderInfo = async (order_no: string) => {
  const res = await fetch(`${API_Path["GetOrderInfo"]}?quote_no=${order_no}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
