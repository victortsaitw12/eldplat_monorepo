import { token } from "./token";

// 新增排休
export const createSchedule = async (data: any) => {
  const res = await fetch(
    "https://localhost:7188/Gateway_AccountDriver/InsertDriverSchedule",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  );
  return await res.json();
};
