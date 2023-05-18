import { token } from "./token";

// 修改簽核
export const updateScheduleSign = async (data: any) => {
  console.log(JSON.stringify(data));
  const res = await fetch("https://localhost:7088/ATR/UpdateScheduleSign", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return await res.json();
};
