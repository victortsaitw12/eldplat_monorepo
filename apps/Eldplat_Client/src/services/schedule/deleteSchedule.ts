import API_Path from "./apiPath";

// 刪除特定排休
export const deleteSchedule = async (drv_schedule_no: string) => {
  const res = await fetch(
    `${API_Path["deleteSchedule"]}?drv_schedule_no=${drv_schedule_no}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  return await res.json();
};
