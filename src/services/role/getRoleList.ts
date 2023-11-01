import API_Path from "./apiPath";

export const getRoleList = async () => {
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
const DUMMY_DATA: I_RoleItem[] = [
  {
    id: "1",
    module_name: "車輛管理與營運模組",
    role_name: "車管",
    description: ["管理車輛狀況", "日常維護", "維修審核"]
  },
  {
    id: "2",
    module_name: "車輛管理與營運模組",
    role_name: "調度",
    description: []
  },
  {
    id: "3",
    module_name: "車輛管理與營運模組",
    role_name: "駕駛",
    description: []
  },
  {
    id: "4",
    module_name: "車輛管理與營運模組",
    role_name: "業務",
    description: []
  },
  {
    id: "5",
    module_name: "車輛管理與營運模組",
    role_name: "管理員",
    description: []
  }
];

// ------- TYPING ------- //
export interface I_RoleItem {
  id: string;
  module_name: string;
  role_name: string;
  description: string[];
}
