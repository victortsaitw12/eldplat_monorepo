import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};

export interface I_GetDriverListRes {
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

export interface I_DriverItem {
  driver_no: string;
  driver_name: string;
  english_name: string;
  team_name: string;
  region: string;
}

// ------- MOCK DATA ------- //
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [
    {
      driver_no: "1",
      driver_name: "鍾俊儀",
      english_name: "JUN-YI  ZHONG",
      team_name: "第一車隊",
      region: "北北基"
    },
    {
      driver_no: "2",
      driver_name: "梁哲青",
      english_name: "ZHE-QING  LIANG",
      team_name: "第一車隊",
      region: "北北基"
    },
    {
      driver_no: "3",
      driver_name: "謝榮瑤",
      english_name: "JUNG-YAO  HSIEH",
      team_name: "第二車隊",
      region: "桃園"
    }
  ],
  ConditionList: [
    {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "駕駛-名"
    },
    {
      field_Name: "User_First_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "駕駛-姓"
    },
    {
      field_Name: "Short_Schd_Date",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "月份"
    },
    {
      field_Name: "Dsph_Area",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "區域"
    },
    {
      field_Name: "Dsph_City",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "都市"
    }
  ],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 1000,
    Arrangement: "desc",
    Total: 3,
    Last_Page: 1
  }
};

// 取得所有駕駛資料 QueryDriverList
export const getAllDriver = async (
  filter: { [key: string]: any } = {},
  pageQuery = defaultPageInfo
) => {
  return DUMMY_DATA;

  const driverFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      driverFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }
  // const res = await fetch(`${API_Path["getAllDrivers"]}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //   },
  //   // body: JSON.stringify(data),
  //   body: JSON.stringify({
  //     filters: driverFilter,
  //     filter_Needed: true,
  //     pageInfo: pageQuery
  //   })
  // });
  // return res.json();
};

export const getDriverTitle = () => {
  const DUMMY_TITLES = ["駕駛姓名", "英文姓名", "車隊", "派駐區域"];
  return DUMMY_TITLES;
};
