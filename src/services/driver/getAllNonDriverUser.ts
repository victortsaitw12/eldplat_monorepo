import API_Path from "./apiPath";

// 取得(非駕駛)使用者資料
export const getAllNonDriverUser = async () => {
  const res = await fetch(`${API_Path["getAllNonDriverUser"]}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  return res.json();
};
