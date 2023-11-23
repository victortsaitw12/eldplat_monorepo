export const getOneAccount = async (uk: string, reqBody) => {
  // return DUMMY_DATA;

  const apiName = "getOneAccount";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = reqBody;

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- MOCK DATA ------- //
const DUMMY_DATA: I_responseBody = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  Result: true,
  ResultInt: 0,
  ResultString: "BaseDomain",
  DataList: [
    {
      account_no: "USR202311090009",
      account_fname: "ttt",
      account_lname: "est",
      org_no: "o-00020101",
      org_name: "交通事業處",
      staff_no: "",
      job_title: "",
      contact_no: "d7bee654-191a-4882-bbb3-d91831285558",
      content_phone_tel_country_code1: "+886",
      content_phone_tel1: "0987654321",
      content_priv_email: "test123@gmail.com",
      account_role: [
        {
          module_no: "sys",
          module_name: "平台管理",
          roles: [
            {
              role_no: "r-0001auth01",
              role_name: "權限模組-平台管理員",
              is_select: false
            },
            {
              role_no: "r-auth01",
              role_name: "權限模組-系統管理員",
              is_select: true
            }
          ]
        },
        {
          module_no: "bus",
          module_name: "車管系統",
          roles: [
            {
              role_no: "r-0001bus01",
              role_name: "車管模組-平台管理員",
              is_select: false
            },
            {
              role_no: "r-000201bus01",
              role_name: "車公司管理員",
              is_select: false
            },
            {
              role_no: "r-000201bus02",
              role_name: "駕駛",
              is_select: false
            },
            {
              role_no: "r-000201bus03",
              role_name: "車管",
              is_select: false
            },
            {
              role_no: "r-000201bus04",
              role_name: "調度",
              is_select: false
            },
            {
              role_no: "r-000201bus05",
              role_name: "業務",
              is_select: false
            },
            {
              role_no: "r-000201bus06",
              role_name: "行銷",
              is_select: false
            },
            {
              role_no: "r-000201bus07",
              role_name: "小客車駕駛",
              is_select: false
            },
            {
              role_no: "r-bus01",
              role_name: "車管模組-系統管理員",
              is_select: true
            },
            {
              role_no: "r-bus02",
              role_name: "車管模組-駕駛",
              is_select: true
            },
            {
              role_no: "r-bus03",
              role_name: "車管模組-車管",
              is_select: false
            },
            {
              role_no: "r-bus04",
              role_name: "車管模組-調度",
              is_select: false
            },
            {
              role_no: "r-bus05",
              role_name: "車管模組-業務",
              is_select: false
            },
            {
              role_no: "r-bus06",
              role_name: "車管模組-行銷",
              is_select: false
            },
            {
              role_no: "r-bus07",
              role_name: "車管模組-小客車駕駛",
              is_select: false
            }
          ]
        }
      ]
    }
  ]
};

export const DUMMY_DATA_CREATE = {
  account_no: "USR202302020002",
  account_fname: "王",
  account_lname: "鈞樺",
  org_no: "o-00020101",
  org_name: "交通事業處",
  staff_no: "USR202302020002",
  job_title: "",
  invt_sts: "01",
  contact_no: "4948111e-71dd-4a99-8a14-ee9c74e666a7",
  content_phone_tel_country_code1: "+886",
  content_phone_tel1: "0912345678",
  content_priv_email: "user@gamil.com",
  account_role: [
    {
      module_no: "bus",
      module_name: "車產模組",
      roles: [
        {
          role_no: "r-0001bus01",
          role_name: "最高管理員",
          is_select: false
        },
        {
          role_no: "r-0001bus01",
          role_name: "主管",
          is_select: false
        },
        {
          role_no: "r-bus01",
          role_name: "調度",
          is_select: false
        },
        {
          role_no: "r-bus01",
          role_name: "一般使用者",
          is_select: false
        }
      ]
    },
    {
      module_no: "bus",
      module_name: "人事模組",
      roles: [
        {
          role_no: "r-0001bus01",
          role_name: "最高管理員",
          is_select: false
        },
        {
          role_no: "r-0001bus01",
          role_name: "主管",
          is_select: false
        },
        {
          role_no: "r-bus01",
          role_name: "調度",
          is_select: false
        },
        {
          role_no: "r-bus01",
          role_name: "一般使用者",
          is_select: false
        }
      ]
    }
  ]
};

// ------- TYPING ------- //
export interface I_responseBody {
  StatusCode: string;
  Message: string;
  DataList: I_AccountDetailItem[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_requestBody {
  account_no: string;
  creorgno: string;
}

export interface I_AccountDetailItem {
  account_no: string;
  account_fname: string;
  account_lname: string;
  org_no: string;
  org_name: string;
  staff_no: string;
  job_title: string;
  contact_no: string;
  content_phone_tel_country_code1: string;
  content_phone_tel1: string;
  content_priv_email: string;
  account_role: I_AccountRole[];
  image?: string;
}

export interface I_AccountRole {
  module_no: string;
  module_name: string;
  roles: I_RoleItem[];
}

export interface I_RoleItem {
  role_no: string;
  role_name: string;
  is_select: boolean;
}
