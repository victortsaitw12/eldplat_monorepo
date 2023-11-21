export const getOneRole = async (userID: string) => {
  const apiName = "getOneRole";
  const reqMethod = "POST";
  const reqHeaders = { UK: userID };
  const requestBody = {
    role_no: "r-000201bus08",
    creorgno: "o-0001"
  };

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return DUMMY_DATA;
  // return result.data;
};

// ------- MOCK DATA ------- //
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [
    {
      role_no: "r-000201bus08",
      role_name: "組織角色1",
      role_enb: true,
      role_desc: "這是敘述",
      module_name: "車管系統",
      func_auth: [
        {
          fg_no: "org",
          func_no: "org",
          func_name: "組織設定",
          module_no: "org",
          func_element: [
            {
              element_no: "btnAdd",
              element_name: "新增下級",
              element_default: "1"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯組織",
              element_default: "2"
            }
          ]
        },
        {
          fg_no: "role",
          func_no: "role",
          func_name: "角色權限",
          module_no: "role",
          func_element: [
            {
              element_no: "btnAdd",
              element_name: "新增角色",
              element_default: "1"
            },
            {
              element_no: "btnEdit",
              element_name: "編輯角色",
              element_default: "2"
            }
          ]
        },
        {
          fg_no: "bus",
          func_no: "bus",
          func_name: "車輛列表",
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
              element_default: "2"
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
          func_name: "客戶列表",
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
        }
      ]
    }
  ],
  Result: true,
  ResultString: "DoBase",
  ResultInt: 1
};

// ------- TYPING ------- //
export interface I_RoleRes {
  StatusCode: string;
  Message: string;
  DataList: I_RoleDetail[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_RoleDetail {
  role_no: string;
  role_name: string;
  role_enb: boolean;
  role_desc: string;
  module_name: string;
  func_auth: I_AuthFuncItem[];
}

export interface I_AuthFuncItem {
  fg_no: string;
  func_no: string;
  func_name: string;
  module_no: string;
  func_element: I_AuthFuncItem[];
}

export interface I_AuthFuncElement {
  element_no: string;
  element_name: string;
  element_default: string;
}
