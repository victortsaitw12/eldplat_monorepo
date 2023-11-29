export const getAccountList = async (userID: string, reqBody: I_reqBody) => {
  // return DUMMY_DATA.ContentList;

  const apiName = "getAccountList";
  const reqMethod = "POST";
  const reqHeaders = { UK: userID };
  const requestBody = {
    x: "",
    filter_needed: true,
    // org_no: "o-0002", ??不用帶嗎?
    filter: [
      // {
      //   field_Name: "a.creorgno",
      //   arrayConditions: "equal",
      //   value: "o",
      //   dataType: "string"
      // }
    ],
    page_info: {
      Page_Index: 1,
      Page_Size: 10
      // orderby: "account_no",
      // arrangement: "ASC",
      // total: 0,
      // last_Page: 0
    }
  };

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data.ContentList;
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
  ContentList: I_AccountItem[];
  ConditionList: any[];
  PageInfo: I_PageInfo;
}
export interface I_reqBody {
  x: string;
  filter_needed: boolean;
  filter: any[];
  page_info: {
    Page_Index: number;
    Page_Size: number;
  };
}
export interface I_AccountItem {
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
  Arrangement?: string;
  Total?: number;
  Last_Page?: number;
}
