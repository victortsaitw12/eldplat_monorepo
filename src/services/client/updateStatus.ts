// 訂單狀態異動
export const updateStatus = async (
  status_code: string,
  status_type: string,
  quote_no: string
) => {
  const response = await fetch(
    `https://localhost:7088/ORD/UpdateStatusLog?quote_no=${quote_no}&status_type=${status_type}&status_code=${status_code}`,
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
