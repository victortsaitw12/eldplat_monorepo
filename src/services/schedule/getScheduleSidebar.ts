// 檢視個別駕駛單日所有排休
export const getScheduleSidebar = async (
  schd_date: string,
  driver_no: string
) => {
  const res = await fetch(
    `https://localhost:7088/ATR/QueryScheduleSidebar?schd_date=${schd_date}&driver_no=${driver_no}`,
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
