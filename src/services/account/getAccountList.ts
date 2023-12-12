import { I_PageInfo } from "@components/PaginationField";

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
  return result.data;
};

// ------- MOCK DATA ------- //
export const DUMMY_ACC_LIST: I_responseBody = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ResultList: [
    {
      account_no: "007217",
      account_name: "張友承",
      org_no: ["o-00101", "o-0010101", "o-001010102"],
      org_name: ["雄獅資訊", "多元發展部", "電商應用整合組"],
      content_phone_tel1: "0911000111",
      content_phone_tel2: "0911000222",
      roles: [
        { role_name_m: "系統管理", role_name: ["使用者"] },
        { role_name_m: "車輛管理", role_name: ["主管", "管理員", "使用者"] }
      ],
      invt_sts: "03"
    },
    {
      account_no: "001234",
      account_name: "王巧茵",
      org_no: ["o-01", "o-0102"],
      org_name: ["雄獅資訊", "資通規畫部"],
      content_phone_tel1: "0922000111",
      content_phone_tel2: "0922000222",
      roles: [
        { role_name_m: "系統管理", role_name: ["主管", "管理員", "使用者"] },
        { role_name_m: "車輛管理", role_name: ["使用者"] },
        { role_name_m: "人事管理", role_name: ["管理員", "使用者"] }
      ],
      invt_sts: "03"
    },
    {
      account_no: "002234",
      account_name: "姜昱光",
      org_no: ["o-01", "o-0101", "o-010101"],
      org_name: ["雄獅資訊", "多元發展部", "通運應用整合組"],
      content_phone_tel1: "0987654321",
      content_phone_tel2: "",
      roles: [
        { role_name_m: "系統管理", role_name: ["管理員", "使用者"] },
        { role_name_m: "車輛管理", role_name: ["使用者"] }
      ],
      invt_sts: "03"
    },
    {
      account_no: "USR202311290001",
      account_name: "王小明",
      org_no: ["o-01", "o-0101", "o-010103"],
      org_name: ["雄獅資訊", "多元發展部", "傳媒整合應用組"],
      content_phone_tel1: "0912341234",
      content_phone_tel2: "",
      roles: [
        { role_name_m: "系統管理", role_name: ["使用者"] },
        { role_name_m: "車輛管理", role_name: ["使用者"] }
      ],
      invt_sts: "02"
    },
    {
      account_no: "USR202311290001",
      account_name: "陳小英",
      org_no: ["o-01", "o-0101"],
      org_name: ["雄獅資訊", "多元發展部"],
      content_phone_tel1: "0912341234",
      content_phone_tel2: "",
      roles: [
        { role_name_m: "系統管理", role_name: ["使用者"] },
        { role_name_m: "車輛管理", role_name: ["使用者"] }
      ],
      invt_sts: "01"
    }
  ],
  ConditionList: [
    {
      field_Name: "account_name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "使用者姓名"
    },
    {
      field_Name: "role_name_m",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "平台角色"
    },
    {
      field_Name: "invt_sts",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "帳號狀態"
    }
  ],
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
  ResultList: I_AccountItem[];
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
  roles: I_RoleName[];
  org_no: string[];
  org_name: string[];
  content_phone_tel1: string;
  content_phone_tel2: string;
  invt_sts: string;
}

export interface I_RoleName {
  role_name_m: string;
  role_name: string[];
}
