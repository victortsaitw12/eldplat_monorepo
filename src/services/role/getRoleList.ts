import { StringMappingType } from "typescript";
import API_Path from "./apiPath";

export const getRoleList = async () => {
  return DUMMY_DATA;
  const requestBody = {
    x: "",
    role_name: "平台管理員",
    creorgno: "o-0001",
    filter: [
      {
        field_Name: "role_no",
        arrayConditions: "like",
        value: "r",
        dataType: "string"
      }
    ],
    filter_needed: true,
    page_info: {
      page_Index: 1,
      page_Size: 10,
      orderby: "role_no",
      arrangement: "ASC",
      total: 0,
      last_Page: 0
    }
  };

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
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      module_no: "sys",
      module_name: "平台管理",
      role_no: "r-0001auth01",
      role_name: "權限模組-平台管理員",
      role_desc: "權限模組-平台管理員"
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-0001bus01",
      role_name: "車管模組-平台管理員",
      role_desc: "車管模組-平台管理員"
    }
  ],
  ConditionList: [],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 2,
    Last_Page: 1
  }
};

// [
//   {
//     id: "1",
//     module_name: "車輛管理與營運模組",
//     role_name: "車管",
//     description: ["管理車輛狀況", "日常維護", "維修審核"]
//   }
// ];

// ------- TYPING ------- //
export interface I_RoleListRes {
  StatusCode: string;
  Message: string;
  ContentList: I_RoleListItem[];
  ConditionList: [];
  PageInfo: {
    Page_Index: number;
    Page_Size: number;
    Arrangement: string;
    Total: number;
    Last_Page: number;
  };
}

export interface I_RoleListItem {
  module_no: string;
  module_name: string;
  role_no: string;
  role_name: string;
  role_desc: string;
  // id: string;
  // module_name: string;
  // role_name: string;
  // description: string[];
}

export interface I_GetRoleListReq {
  x: string;
  role_name: string;
  creorgno: string;
  filter: [
    {
      field_Name: string;
      arrayConditions: string;
      value: string;
      dataType: string;
    }
  ];
  filter_needed: boolean;
  page_info: {
    page_Index: number;
    page_Size: number;
    orderby: string;
    arrangement: string;
    total: number;
    last_Page: number;
  };
}

export interface I_GetRoleListRes {
  StatusCode: string;
  Message: string;
  ContentList: [
    {
      account_name: string;
      role_name_o: string;
      org_name: string;
      content_phone_tel1: string;
      content_phone_tel2: string;
      role_name_m: string;
      invt_sts: string;
    },
    {
      account_name: string;
      role_name_o: string;
      org_name: string;
      content_phone_tel1: string;
      content_phone_tel2: string;
      role_name_m: string;
      invt_sts: string;
    }
  ];
  ConditionList: [];
  PageInfo: {
    Page_Index: number;
    Page_Size: number;
    Arrangement: string;
    Total: number;
    Last_Page: number;
  };
}
