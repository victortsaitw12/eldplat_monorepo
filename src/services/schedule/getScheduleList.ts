import API_Path from "./apiPath";
// 檢視個別駕駛所有排休
export const getScheduleList = async (id: any) => {
  const res = await fetch(`${API_Path["getScheduleList"]}?driver_no=${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  return await res.json();
};
