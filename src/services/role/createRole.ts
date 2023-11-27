export const createRole = async (userID: string, data: I_CreateOrgReq) => {
  const apiName = "createRole";
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
export interface I_CreateRoleReq {
  role_name: string;
  role_desc: string;
  role_tp: string;
  module_no: string;
  creorgno: string;
  func_element: I_FuncAuthElemReq[];
}

export interface I_FuncAuthElemReq {
  fg_no: string;
  func_no: string;
  module_no: string;
  element_no: string;
  element_default: string;
}

// ------- MOCK DATA ------- //
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};

export const defaultCreatValues = {
  role_name: "",
  role_desc: "",
  role_tp: "O", //???
  module_no: "bus", //???
  creorgno: "",
  func_auth: [
    {
      fg_no: "org", // 組織
      func_no: "org",
      module_no: "sys",
      element_no: "btnAdd",
      element_default: "1"
    },
    {
      fg_no: "org", // 組織
      func_no: "org",
      module_no: "sys",
      element_no: "btnEdit",
      element_default: "2"
    },

    {
      fg_no: "role", // 角色
      func_no: "role",
      module_no: "sys",
      element_no: "btnAdd",
      element_default: "1"
    },
    {
      fg_no: "role", // 角色
      func_no: "role",
      module_no: "sys",
      element_no: "btnEdit",
      element_default: "2"
    },
    {
      fg_no: "account", // 使用者
      func_no: "org",
      module_no: "sys",
      element_no: "btnAdd",
      element_default: "1"
    },
    {
      fg_no: "account", // 使用者
      func_no: "org",
      module_no: "sys",
      element_no: "btnEdit",
      element_default: "2"
    },

    {
      fg_no: "bus", // 車輛
      func_no: "bus",
      module_no: "bus",
      element_no: "btnAdd",
      element_default: "1"
    },
    {
      fg_no: "bus", // 車輛
      func_no: "bus",
      module_no: "bus",
      element_no: "btnEdit",
      element_default: "2"
    },

    {
      fg_no: "account", // 車輛
      func_no: "org",
      module_no: "sys",
      element_no: "btnAdd",
      element_default: "1"
    },
    {
      fg_no: "account", // 車輛
      func_no: "org",
      module_no: "sys",
      element_no: "btnEdit",
      element_default: "2"
    }
  ]
};
