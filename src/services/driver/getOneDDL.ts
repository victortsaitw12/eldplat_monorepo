import API_Path from "./apiPath";

// 取得欄位對照資料
export const getOneDDL = async (
  colName: string,
  tableName: string
): Promise<any> => {
  const requestBody = {
    ddl_column: colName, //"language"
    ddl_type: tableName //"account"
  };

  const res = await fetch(`${API_Path["getAreaDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.dataList;
};

export interface I_OneDDL {
  statusCode: string; //"200";
  message: string; //"OK";
  dataList: I_LabelVal[];
  result: boolean;
  resultString: any; //null;
  resultInt: number; //0;
}
export interface I_LabelVal {
  label: string; //"中文";
  value: string; //"01";
  edit: boolean;
}
