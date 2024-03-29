export const updateOrg = async (userID: string, data: I_EditOrgReq) => {
  const apiName = "updateOrg";
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

export interface I_EditOrgReq {
  org_no: string;
  org_name: string;
  org_enb: boolean;
}

const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};
