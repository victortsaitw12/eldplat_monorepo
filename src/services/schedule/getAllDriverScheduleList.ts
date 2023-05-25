import { token } from "./token";

// 檢視所有駕駛當月排休
export const getAllDriverScheduleList = async (date: string) => {
  const res = await fetch(
    `https://localhost:7088/ATR/GetAllDriverScheduleList?schd_date=${date}`,
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
