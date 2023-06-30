import API_Path from "./apiPath";

// 新增排休
export const createSchedule = async (data: any) => {
  const res = await fetch(`${API_Path["createSchedule"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    },
    body: JSON.stringify(data)
  });
  return await res.json();
};
