import { token } from "./token";

// 檢視個別排休詳情
export const getScheduleUpdateList = async (drv_schedule_no: string) => {
  const res = await fetch(
    `https://localhost:7088/ATR/QueryScheduleUpdateList?drv_schedule_no=${drv_schedule_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  return await res.json();
};
