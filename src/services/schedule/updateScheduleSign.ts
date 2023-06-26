// 修改簽核
export const updateScheduleSign = async (data: any) => {
  console.log("updateScheduleSign", JSON.stringify(data));
  const res = await fetch("https://localhost:7088/ATR/UpdateScheduleSign", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(data)
  });
  return await res.json();
};
