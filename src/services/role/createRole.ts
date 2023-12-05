export const createRole = async (userID: string, data: I_CreateRoleReq) => {
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

export const DUMMY_CREATE_ROLE = {
  role_name: "前端測試更新角色",
  role_enb: true,
  role_desc: "前端測試更新角色職責敘述: 角色擁有除客戶管理外的所有權限",
  module_no: "sys",
  module_name: "平台管理",
  func_auth: [
    {
      fg_no: "bus",
      func_no: "bus",
      func_name: "車輛管理設定",
      module_no: "bus",
      func_element: [
        {
          element_no: "btnAdd",
          element_name: "新增車輛",
          element_default: "1"
        },
        {
          element_no: "btnEdit",
          element_name: "編輯車輛",
          element_default: "1"
        },
        {
          element_no: "btnView",
          element_name: "檢視車輛",
          element_default: "1"
        }
      ]
    },
    {
      fg_no: "customer",
      func_no: "customer",
      func_name: "客戶管理設定",
      module_no: "bus",
      func_element: [
        {
          element_no: "btnAdd",
          element_name: "新增客戶",
          element_default: "3"
        },
        {
          element_no: "btnEdit",
          element_name: "編輯客戶",
          element_default: "3"
        },
        {
          element_no: "btnView",
          element_name: "檢視客戶",
          element_default: "3"
        }
      ]
    },
    {
      fg_no: "driver",
      func_no: "driver",
      func_name: "駕駛管理設定",
      module_no: "bus",
      func_element: [
        {
          element_no: "btnAdd",
          element_name: "新增駕駛",
          element_default: "1"
        },
        {
          element_no: "btnEdit",
          element_name: "編輯駕駛",
          element_default: "1"
        }
      ]
    },
    {
      fg_no: "drover",
      func_no: "driver",
      func_name: "車輛設定",
      module_no: "bus",
      func_element: [
        {
          element_no: "btnView",
          element_name: "檢視駕駛",
          element_default: "1"
        }
      ]
    },
    {
      fg_no: "account",
      func_no: "org",
      func_name: "組織設定",
      module_no: "sys",
      func_element: [
        {
          element_no: "btnAdd",
          element_name: "新增組織",
          element_default: "1"
        },
        {
          element_no: "btnEdit",
          element_name: "編輯組織",
          element_default: "1"
        },
        {
          element_no: "btnView",
          element_name: "檢視組織",
          element_default: "1"
        }
      ]
    },
    {
      fg_no: "account",
      func_no: "role",
      func_name: "角色設定",
      module_no: "sys",
      func_element: [
        {
          element_no: "btnAdd",
          element_name: "新增帳號",
          element_default: "1"
        },
        {
          element_no: "btnEdit",
          element_name: "編輯角色",
          element_default: "1"
        },
        {
          element_no: "btnView",
          element_name: "檢視角色",
          element_default: "1"
        }
      ]
    }
  ]
};
