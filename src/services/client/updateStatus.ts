// 訂單狀態異動
export const updateStatus = async (
  status_code: string,
  quote_no: string,
  costs_no: string,
  status_type?: string
) => {
  const type = status_type || "FE";
  const response = await fetch(
    `https://localhost:7088/ORD/FEUpdateStatusLog?status_code=${status_code}&quote_no=${quote_no}&costs_no=${costs_no}&status_type=${type}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  const result = await response.json();
  return result.data;
};
