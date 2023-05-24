import { token } from "./token";

// 刪除特定排休
export const deleteSchedule = async (drv_schedule_no: string) => {
  const res = await fetch(
    `https://localhost:7088/ATR/DeleteDriverSchedule?drv_schedule_no=${drv_schedule_no}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  return await res.json();
};
