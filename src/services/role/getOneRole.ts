import API_Path from "./apiPath";
import { I_RoleListItem } from "./getRoleList";

export const getOneRole = async () => {
  return DUMMY_DATA;

  //   const res = await fetch(`${API_Path["getOrg"]}?driver_no=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     }
  //   });
  //   return await res.json();
};

// ------- MOCK DATA ------- //
const DUMMY_DATA_old = {
  roleDetail: {
    role_no: "1",
    module_name: "車輛管理與營運模組",
    role_name: "車管",
    description: "管理車輛狀況"
  },
  func_auth: [
    {
      func_no: "org",
      func_name: "組織設定",
      func_enb: 1,
      elements: [
        { func_no: "org_create", func_name: "新增下級", func_enb: 1 },
        { func_no: "org_edit", func_name: "編輯組織", func_enb: 1 }
      ]
    },
    {
      func_no: "role",
      func_name: "角色設定",
      func_enb: 0,
      elements: [
        { func_no: "role_create", func_name: "新增角色", func_enb: 0 },
        { func_no: "role_edit", func_name: "編輯角色", func_enb: 0 }
      ]
    },
    {
      func_no: "account",
      func_name: "使用者列表",
      func_enb: 1,
      elements: [
        { func_no: "account_create", func_name: "新增使用者", func_enb: 0 },
        { func_no: "account_edit", func_name: "編輯使用者", func_enb: 1 }
      ]
    }
  ]
};
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
          fg_no: "bus",
          func_no: "bus",
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
          module_no: "sys",
          func_element: [
            {
              element_no: "btnAdd",
              element_name: "新增帳號",
              element_default: "3"
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
  module_no: string;
  func_element: [
    {
      element_no: string;
      element_name: string;
      element_default: string;
    }
  ];

  // func_no: "account";
  // func_name: "使用者列表";
  // func_enb: 1;
  // elements: any[];
}
