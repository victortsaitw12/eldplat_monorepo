// 取ddl下拉式資料
export const getCreateDdl = async (): Promise<any> => {
  const res = await fetch("https://localhost:7088/CAR/GetMaintenanceDDL", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
