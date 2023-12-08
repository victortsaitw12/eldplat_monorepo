export const getRoleList = async (uk: string) => {
  // return DUMMY_DATA;
  const apiName = "getRoleList";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };

  const requestBody = {
    x: "",
    role_name: "平台管理員", //TODO ask backend if this is really needed
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
      Page_Index: 1,
      Page_Size: 10,
      Orderby: "role_no",
      Arrangement: "ASC",
      Total: 0,
      Last_Page: 0
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
export const DUMMY_RoleList = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ResultList: [
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus01",
      role_name: "車管模組-管理員",
      role_desc: "車管模組-管理員",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus01",
      role_name: "車管模組-管理員",
      role_desc: "超過一行的呈現方式，超過一行的呈現方式，超過一行的呈現方式",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus02",
      role_name: "車管模組-駕駛",
      role_desc: "車管模組-駕駛",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus02",
      role_name: "車管模組-駕駛",
      role_desc: "車管模組-駕駛",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus03",
      role_name: "車管模組-車管",
      role_desc: "車管模組-車管",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus03",
      role_name: "車管模組-車管",
      role_desc: "車管模組-車管",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus04",
      role_name: "車管模組-調度",
      role_desc: "車管模組-調度",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus04",
      role_name: "車管模組-調度",
      role_desc: "車管模組-調度",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus05",
      role_name: "車管模組-業務",
      role_desc: "車管模組-業務",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus05",
      role_name: "車管模組-業務",
      role_desc: "車管模組-業務",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus06",
      role_name: "車管模組-行銷",
      role_desc: "車管模組-行銷",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus06",
      role_name: "車管模組-行銷",
      role_desc: "車管模組-行銷",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus07",
      role_name: "車管模組-小客車駕駛",
      role_desc: "車管模組-小客車駕駛",
      role_enb: true
    },
    {
      module_no: "bus",
      module_name: "車管系統",
      role_no: "r-bus07",
      role_name: "車管模組-小客車駕駛",
      role_desc: "車管模組-小客車駕駛",
      role_enb: true
    },
    {
      module_no: "sys",
      module_name: "平台管理",
      role_no: "r-sys01",
      role_name: "權限模組-管理員",
      role_desc: "權限模組-管理員",
      role_enb: true
    },
    {
      module_no: "sys",
      module_name: "平台管理",
      role_no: "r-sys01",
      role_name: "權限模組-管理員",
      role_desc: "權限模組-管理員",
      role_enb: true
    }
  ],
  ConditionList: [
    {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "角色名稱、職責描述..."
    },
    {
      field_Name: "Short_Schd_Date",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "模組"
    },
    {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "狀態"
    }
  ],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 16,
    Last_Page: 1
  }
};

// ------- TYPING ------- //
export interface I_RoleListRes {
  StatusCode: string;
  Message: string;
  ResultList: I_RoleListItem[];
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
  role_enb: boolean;
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
    Page_Index: number;
    Page_Size: number;
    Orderby: string;
    Arrangement: string;
    Total: number;
    Last_Page: number;
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
