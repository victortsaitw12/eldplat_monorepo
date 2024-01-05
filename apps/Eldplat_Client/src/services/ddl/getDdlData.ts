import { I_DDL_Type } from "@typings/ddl_type";
import API_Path from "./apiPath";

// 取ddl下拉式資料
export const getDdlData = async (ddlData: I_DDL_Type): Promise<any> => {
  const res = await fetch(`${API_Path["getOneDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(ddlData)
  });
  return res.json();
};
