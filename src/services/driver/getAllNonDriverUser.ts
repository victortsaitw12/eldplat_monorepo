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

export const getDriverTitle = () => {
  const DUMMY_TITLES = [
    "姓名",
    "E-MAIL",
    "車輛團隊",
    "指定車輛",
    "群組",
    "登入次數",
    "加入時間",
    "加入狀態"
  ];
  return DUMMY_TITLES;
};
