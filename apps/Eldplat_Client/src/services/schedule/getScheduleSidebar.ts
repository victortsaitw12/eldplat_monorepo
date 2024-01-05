import API_Path from "./apiPath";
// 檢視個別駕駛單日所有排休
export const getScheduleSidebar = async (
  schd_date: string,
  driver_no: string
) => {
  const res = await fetch(
    `${API_Path["getScheduleSidebar"]}?schd_date=${schd_date}&driver_no=${driver_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  return await res.json();
};
