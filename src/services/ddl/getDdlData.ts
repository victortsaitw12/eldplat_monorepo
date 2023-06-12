import { I_DDL_Type } from "@typings/ddl_type";

// 取ddl下拉式資料
export const getDdlData = async (ddlData: I_DDL_Type): Promise<any> => {
  const res = await fetch("https://localhost:7088/COM/GetOneDDL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(ddlData)
  });
  return res.json();
};
