import API_Path from "./apiPath";

// 新增駕駛編號 (未填寫資料)  InsertFilterUserToDriver
export const createDriverNO = async (data: any) => {
  const res = await fetch(`${API_Path["createDriver"]}?userNo=${data}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  return res.json();
};
