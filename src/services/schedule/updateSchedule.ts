import { token } from "./token";

// 修改排休
export const updateSchedule = async (data: any) => {
  console.log("updateSchedule:", JSON.stringify(data));
  const res = await fetch("https://localhost:7088/ATR/UpdateDriverSchedule", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return await res.json();
};
