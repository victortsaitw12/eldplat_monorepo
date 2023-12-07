export const createOrg = async (userID: string, data: I_CreateOrgReq) => {
  const apiName = "createOrg";
  const reqMethod = "POST";
  const reqHeaders = { UK: userID };
  const requestBody = data;

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

const DUMMY_RES = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};

const DUMMY_REQ = {
  porg_no: "o-0002010201",
  org_name: "前端測試新增組織",
  org_tp: "D",
  org_lvl: 4
};

const DUMMY_NEW_ORG = {
  org_no: "o-000204",
  org_name: "前端測試新增組織",
  org_tp: "G",
  org_lvl: 2,
  org_enb: true,
  sublayer: []
};

// ------- DUMMY ------- //
