export const updateRole = async (userID: string, data: I_UpdateRoleReq) => {
  const apiName = "updateRole";
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
export interface I_UpdateRoleRes {
  StatusCode: string;
  Message: string;
  DataList: any[];
  Result: true;
  ResultString: string;
  ResultInt: number;
}
export interface I_UpdateRoleReq {
  role_name: string;
  role_desc: string;
  role_tp: string;
  module_no: string;
  creorgno: string;
  func_auth: I_FuncAuthReq[];
}

export interface I_FuncAuthReq {
  fg_no: string;
  func_no: string;
  module_no: string;
  element_no: string;
  element_default: string;
}

const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};
