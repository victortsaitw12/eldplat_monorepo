import API_Path from "./apiPath";

// 檢視所有駕駛當月排休
export const getAllDriverScheduleList = async (date: string) => {
  const res = await fetch(
    `${API_Path["getAllDriverScheduleList"]}?schd_date=${date}`,
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
