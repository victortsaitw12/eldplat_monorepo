import API_Path from "./apiPath";
// 修改排休
export const updateSchedule = async (data: any) => {
  console.log("updateSchedule:", JSON.stringify(data));
  const res = await fetch(`${API_Path["updateSchedule"]}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(data)
  });
  return await res.json();
};
