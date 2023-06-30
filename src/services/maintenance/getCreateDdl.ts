import API_Path from "./apiPath";

// 取ddl下拉式資料
export const getCreateDdl = async (): Promise<any> => {
  const res = await fetch(API_Path["GetCreateDDL"], {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
