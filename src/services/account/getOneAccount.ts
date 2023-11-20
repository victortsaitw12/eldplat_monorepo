import API_Path from "./apiPath";
import { I_UserItem } from "./getUserList";

export const getOneAccount = async () => {
  return DUMMY_DATA.DataList[0];

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
const DUMMY_DATA: I_responseBody = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [
    {
      account_no: "admin",
      account_pw: "12345",
      account_enb: true,
      account_del: false,
      account_fname: "Admin",
      account_lname: "System",
      account_sex: "1",
      account_country: "TW",
      org_no: "o",
      company_no: "company_no",
      staff_no: "admin",
      leave_fg: false,
      invt_dt: "2023-08-11T09:24:53",
      invt_send_count: 1,
      invt_sts: "03",
      join_dt: "2023-08-11T09:24:53",
      creorgno: "o",
      creid: "admin",
      credt: "2023-08-11T09:24:53",
      account_role: [
        {
          org_no: "o-0002", //id
          org_name: "車產模組", //label
          org_enb: true,
          sublayer: [
            {
              org_no: "o-000201",
              org_name: "最高管理員",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "主管",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "調度",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "一般使用者",
              org_enb: true
            }
          ]
        },
        {
          org_no: "o-0002", //id
          org_name: "人事模組", //label
          org_enb: true,
          sublayer: [
            {
              org_no: "o-000201",
              org_name: "最高管理員",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "主管",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "調度",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "一般使用者",
              org_enb: true
            }
          ]
        },
        {
          org_no: "o-0002", //id
          org_name: "訂單模組", //label
          org_enb: true,
          sublayer: [
            {
              org_no: "o-000201",
              org_name: "最高管理員",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "主管",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "調度",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "一般使用者",
              org_enb: true
            }
          ]
        },
        {
          org_no: "o-0002", //id
          org_name: "傳媒模組", //label
          org_enb: true,
          sublayer: [
            {
              org_no: "o-000201",
              org_name: "最高管理員",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "主管",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "調度",
              org_enb: true
            },
            {
              org_no: "o-000201",
              org_name: "一般使用者",
              org_enb: true
            }
          ]
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};

// ------- TYPING ------- //
export interface I_responseBody {
  StatusCode: string;
  Message: string;
  DataList: I_UserDetailItem[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_UserDetailItem {
  image?: string;
  account_no: string;
  account_pw: string;
  account_enb: boolean;
  account_del: boolean;
  account_fname: string;
  account_lname: string;
  account_sex: string;
  account_country: string;
  org_no: string;
  company_no: string;
  staff_no: string;
  leave_fg: boolean;
  invt_dt: string;
  invt_send_count: number;
  invt_sts: string;
  join_dt: string;
  creorgno: string;
  creid: string;
  credt: string;
  account_role: I_AccountRole[];
}

export interface I_AccountRole {
  module_no: string;
  module_name: string;
  // role_no: string;
  // role_name: string;
  // role_desc: string;
  roles: I_RoleItem[];
}

export interface I_RoleItem {
  role_no: string;
  role_name: string;
  is_select: boolean;
}

// TODO 統一引用 import {I_PageInfo} from "@components/PaginationField"
export interface I_PageInfo {
  Page_Index: number;
  Page_Size: number;
  Arrangement: string;
  Total: number;
  Last_Page: number;
}
