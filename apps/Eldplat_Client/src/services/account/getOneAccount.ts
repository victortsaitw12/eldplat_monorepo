export const getOneAccount = async (uk: string, reqBody: I_ReqBody) => {
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

// ------- TYPING ------- //
export interface I_ResBody {
  StatusCode: string;
  Message: string;
  DataList: I_AccountDetailItem[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_ReqBody {
  account_no: string;
  creorgno: string;
}

export interface I_AccountDetailItem {
  account_no: string;
  account_fname: string;
  account_lname: string;
  org_no: string[];
  org_name: string[];
  porg_name: string;
  staff_no: string;
  job_title: string;
  invt_sts: string;
  contact_no: string;
  content_phone_tel_country_code1: string;
  content_phone_tel1: string;
  content_priv_email: string;
  account_role: I_AccountRole[];
}

export interface I_KeyValue {
  value: string;
  label: string;
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

// ------- MOCK DATA ------- //
export const DUMMY_ONE_ACCOUNT = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  Result: true,
  ResultInt: 0,
  ResultString: "BaseDomain",
  ResultList: [
    {
      account_no: "007217",
      account_fname: "鍾",
      account_lname: "俊儀",
      org_no: ["o-00101", "o-0010101", "o-001010102"],
      org_name: ["雄獅資訊", "多元發展部", "電商應用整合組"],
      porg_no: "o-001",
      porg_name: "雄獅集團",
      staff_no: "007217",
      job_title: "專案管理師",
      invt_sts: "03",
      contact_no: "4948531e-71dd-4a99-8a14-ee9c74e99988",
      content_phone_tel_country_code1: "+886",
      content_phone_tel1: "0924680000",
      content_priv_email: "7217@gmail.com",
      account_role: [
        {
          module_no: "role",
          module_name: "角色管理",
          roles: [
            {
              role_no: "r-role01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-role02",
              role_name: "主管",
              is_select: true
            },
            {
              role_no: "r-role03",
              role_name: "調度",
              is_select: true
            },
            {
              role_no: "r-role04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        },
        {
          module_no: "bus",
          module_name: "車輛管理",
          roles: [
            {
              role_no: "r-bus01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-bus02",
              role_name: "主管",
              is_select: true
            },
            {
              role_no: "r-bus03",
              role_name: "調度",
              is_select: true
            },
            {
              role_no: "r-bus04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        },
        {
          module_no: "driver",
          module_name: "駕駛管理",
          roles: [
            {
              role_no: "r-driver01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-driver02",
              role_name: "主管",
              is_select: false
            },
            {
              role_no: "r-driver03",
              role_name: "調度",
              is_select: false
            },
            {
              role_no: "r-driver04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        }
      ]
    }
  ]
};

export const DUMMY_DATA_CREATE = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  Result: true,
  ResultInt: 0,
  ResultString: "BaseDomain",
  ResultList: [
    {
      account_no: "USR202302020002",
      account_fname: "",
      account_lname: "",
      org_no: [],
      org_name: [],
      porg_name: "",
      staff_no: "",
      job_title: "",
      invt_sts: "",
      contact_no: "",
      content_phone_tel_country_code1: "",
      content_phone_tel1: "",
      content_priv_email: "",
      account_role: [
        {
          module_no: "role",
          module_name: "角色管理",
          roles: [
            {
              role_no: "r-role01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-role02",
              role_name: "主管",
              is_select: false
            },
            {
              role_no: "r-role03",
              role_name: "調度",
              is_select: false
            },
            {
              role_no: "r-role04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        },
        {
          module_no: "bus",
          module_name: "車輛管理",
          roles: [
            {
              role_no: "r-bus01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-bus02",
              role_name: "主管",
              is_select: false
            },
            {
              role_no: "r-bus03",
              role_name: "調度",
              is_select: false
            },
            {
              role_no: "r-bus04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        },
        {
          module_no: "driver",
          module_name: "駕駛管理",
          roles: [
            {
              role_no: "r-driver01",
              role_name: "最高管理員",
              is_select: false
            },
            {
              role_no: "r-driver02",
              role_name: "主管",
              is_select: false
            },
            {
              role_no: "r-driver03",
              role_name: "調度",
              is_select: false
            },
            {
              role_no: "r-driver04",
              role_name: "一般使用者",
              is_select: true
            }
          ]
        }
      ]
    }
  ]
};

export const DUMMY_ROLE_NAME_MOUDULE_MAP = new Map([
  ["r-role", "角色管理"],
  ["r-bus", "車輛管理"],
  ["r-driver", "駕駛管理"]
]);

export const DUMMY_ROLE_NAME_MAP = new Map([
  ["01", "最高管理員"],
  ["02", "主管"],
  ["03", "調度"],
  ["04", "一般使用者"]
]);

export const DUMMY_ORG_LIST = new Map([
  ["o-001", "雄獅集團"],
  ["o-00101", "雄獅資訊"],
  ["o-0010101", "多元發展部"],
  ["o-0010102", "創新發展部"],
  ["o-0010103", "資通部"],
  ["o-0010104", "營運部"],
  ["o-001010101", "應用專案管理組"],
  ["o-001010102", "電商應用整合組"],
  ["o-001010103", "商業互動設計組"],
  ["o-001010104", "通運應用整合組"],
  ["o-001010105", "車管組"],
  ["o-001010106", "調度組"],
  ["o-001010107", "業務組"]
]);
