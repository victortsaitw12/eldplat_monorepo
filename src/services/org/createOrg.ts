import API_Path from "./apiPath";

export const createOrg = async (userID: string, data: I_CreateOrgReq) => {
  const apiName = "createOrg";
  const reqMethod = "POST";
  const reqHeaders = { UK: userID };
  const requestBody = {};

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data || result.cause.resBody;
};

// ------- typing ------- //
export interface I_CreateOrgReq {
  org_no: string;
  org_name: string;
  org_tp: string;
  org_lvl: number;
}

const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};
