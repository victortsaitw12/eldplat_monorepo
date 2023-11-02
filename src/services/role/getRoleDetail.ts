import API_Path from "./apiPath";
import { I_RoleItem } from "./getRoleList";

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
    id: "1",
    module_name: "車輛管理與營運模組",
    role_name: "車管",
    description: ["管理車輛狀況", "日常維護", "維修審核"]
  },
  authFunc: [
    {
      id: "user_auth",
      label: "使用者管理3322",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "車輛管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "維保管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "駕駛管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "任務管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "訂單管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "客戶管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "供應商管理",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    },
    {
      id: "user_auth",
      label: "設定",
      dataAuth: [{ view: 1, create: 1, edit: 1, archive: 1 }]
    }
  ]
};

// ------- TYPING ------- //
export interface I_RoleDetail {
  roleDetail: I_RoleItem;
  authFunc: any[];
}

export interface I_AuthFuncItem {
  id: string;
  label: string;
  dataAuth: [{ view: 0 | 1; create: 0 | 1; edit: 0 | 1; archive: 0 | 1 }];
}
