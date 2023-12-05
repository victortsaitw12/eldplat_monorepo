export const getOneRole = async (uk: string, data: I_RoleReq) => {
  // return DUMMY_DATA;
  const apiName = "getOneRole";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = data;
  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- MOCK DATA ------- //
export const DUMMY_ONE_ROLE_CREATE = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ResultList: [
    {
      role_no: "",
      role_name: "",
      role_enb: true,
      role_desc: "",
      module_no: "sys",
      module_name: "車輛管理",
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯車輛",
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視車輛",
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯駕駛",
              element_default: "3"
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
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯組織",
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視組織",
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視角色",
              element_default: "3"
            }
          ]
        }
      ]
    }
  ],
  Result: true,
  ResultString: "DoBase",
  ResultInt: 1
};

export const DUMMY_ONE_ROLE = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ResultList: [
    {
      role_no: "r-0002sys01",
      role_name: "權限管理員",
      role_enb: true,
      role_desc: "雄獅集團權限管理員",
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯車輛",
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視車輛",
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯駕駛",
              element_default: "3"
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
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯組織",
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視組織",
              element_default: "3"
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
              element_default: "3"
            },
            {
              element_no: "btnView",
              element_name: "檢視角色",
              element_default: "3"
            }
          ]
        }
      ]
    }
  ],
  Result: true,
  ResultString: "DoBase",
  ResultInt: 1
};

// ------- TYPING ------- //
export interface I_RoleReq {
  role_no: string;
  creorgno?: string;
}
export interface I_RoleRes {
  StatusCode: string;
  Message: string;
  ResultList: I_RoleDetail[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_RoleDetail {
  role_no: string;
  role_name: string;
  role_enb: boolean;
  role_desc: string;
  module_no: string;
  module_name: string;
  func_auth: I_AuthFuncItem[];
}

export interface I_AuthFuncItem {
  fg_no: string;
  func_no: string;
  func_name: string;
  module_no: string;
  func_element: I_AuthFuncElement[];
}

export interface I_AuthFuncElement {
  element_no: string;
  element_name: string;
  element_default: string;
}
