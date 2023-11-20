// import { I_PageInfo } from "@components/PaginationField";
import API_Path from "./apiPath";

export const getUserList = async () => {
  return DUMMY_DATA.ContentList;

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
  ContentList: [
    {
      account_no: "123",
      account_name: "AdminSystem",
      role_name_o: "車公司管理員",
      org_name: "平台",
      content_phone_tel1: "0924128699",
      content_phone_tel2: "",
      role_name_m: "車管模組-系統管理員",
      invt_sts: "03"
    },
    {
      account_no: "123",
      account_name: "王鈞樺",
      role_name_o: "車公司管理員",
      org_name: "交通事業處",
      content_phone_tel1: "0911234567",
      content_phone_tel2: "0911234567",
      role_name_m: "車管模組-系統管理員",
      invt_sts: "01"
    },
    {
      account_no: "123",
      account_name: "張友承",
      role_name_o: "權限模組-平台管理員",
      org_name: "商業互動設計組",
      content_phone_tel1: "",
      content_phone_tel2: "",
      role_name_m: "權限模組-系統管理員",
      invt_sts: "03"
    },
    {
      account_no: "123",
      account_name: "黃學承",
      role_name_o: "車管模組-平台管理員",
      org_name: "多元發展部",
      content_phone_tel1: "",
      content_phone_tel2: "",
      role_name_m: "車管模組-系統管理員",
      invt_sts: "02"
    }
  ],
  ConditionList: [],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 10,
    Arrangement: "desc",
    Total: 5,
    Last_Page: 1
  }
};

// ------- TYPING ------- //
export interface I_responseBody {
  StatusCode: string;
  Message: string;
  ContentList: I_UserItem[];
  ConditionList: any[];
  PageInfo: I_PageInfo;
}
export interface I_UserItem {
  account_no: string;
  account_name: string;
  role_name_o: string;
  org_name: string;
  content_phone_tel1: string;
  content_phone_tel2: string;
  role_name_m: string;
  invt_sts: string;
}

// TODO 統一引用 import {I_PageInfo} from "@components/PaginationField"
export interface I_PageInfo {
  Page_Index: number;
  Page_Size: number;
  Arrangement: string;
  Total: number;
  Last_Page: number;
}
