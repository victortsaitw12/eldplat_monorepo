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
  authFunc: []
};

// ------- TYPING ------- //
export interface I_RoleDetail {
  roleDetail: I_RoleItem;
  authFunc: any[];
}
