import API_Path from "./apiPath";

// 更新-單筆駕駛狀態
export const updateDriverStatus = async (driver_no: any, status: string) => {
  const res = await fetch(
    `${API_Path["updateDriverStatus"]}?driverNo=${driver_no}&status=${status}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  return res.json();
};
