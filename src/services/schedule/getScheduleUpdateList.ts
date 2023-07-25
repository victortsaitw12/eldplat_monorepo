import API_Path from "./apiPath";
// 檢視個別排休詳情
export const getScheduleUpdateList = async (
  drv_schedule_no: string,
  driver_no: string
) => {
  const res = await fetch(
    `${API_Path["getScheduleUpdateList"]}?drv_schedule_no=${drv_schedule_no}&driver_no=${driver_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  return await res.json();
};
