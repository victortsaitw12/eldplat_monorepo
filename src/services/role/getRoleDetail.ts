import API_Path from "./apiPath";
import { I_RoleListItem } from "./getRoleList";

export const getRoleDetail = async () => {
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
const DUMMY_DATA = {
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

// ------- TYPING ------- //
export interface I_RoleDetail {
  roleDetail: I_RoleListItem;
  authFunc: any[];
}

export interface I_AuthFuncItem {
  func_no: "account";
  func_name: "使用者列表";
  func_enb: 1;
  elements: any[];
}
