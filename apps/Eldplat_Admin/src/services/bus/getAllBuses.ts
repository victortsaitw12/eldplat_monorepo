import API_Path from "./apiPath";
import { PatternType } from "@utils/mappingQueryData";
import { I_PageInfo } from "@components/PaginationField";

export const getAllBuses = async (
  pageInfo: I_PageInfo,
  filter: { [key: string]: any } = {},
  bus_status = "1"
) => {
  return DUMMY_DATA;
  const busFilter = [];
  for (const key in filter) {
    if (filter[key].value !== "") {
      busFilter.push({
        field_Name: key,
        arrayConditions: "like",
        value: filter[key].value,
        dataType: filter[key].dataType
      });
    }
  }

  const url = new URL(API_Path["getAllBuses"]);

  const res = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify({
      bus_status,
      bus_Filter: busFilter,
      filter_Needed: true,
      page_Info: pageInfo
    })
  });
  const data = await res.json();
  return data;
};

export const getBusTitle = () => {
  const DUMMY_TITLES = [
    "名稱",
    "車牌",
    "車種",
    "座位數",
    "車齡",
    "派駐地",
    "車隊",
    "目前派遣",
    "主要駕駛",
    "狀態",
    "更多"
  ];
  return DUMMY_TITLES;
};

export const busPattern: PatternType = {
  id: true,
  bus_name: true,
  type: true,
  make: true,
  model: true,
  license_plate: true,
  age: true,
  bus_group: true,
  driver_name: true,
  status: true,
  ownership: true
};
export interface I_BusData {
  id: string;
  bus_name: string;
  license_plate: string;
  type: string;
  available_seats: number;
  age: number;
  depot: string;
  team: string;
  current_dep: string;
  main_driver: string;
  status: string;
}

const DUMMY_DATA = {
  statusCode: "200",
  message: "OK",
  resultList: [
    {
      id: "123456",
      bus_name: "雄獅奶油1號",
      license_plate: "KKA-001",
      type: "大巴",
      available_seats: 43,
      age: 5,
      depot: "內湖停車場",
      team: "第一組",
      current_dep: "內湖停車場",
      main_driver: "簡中華",
      status: "1"
    },
    {
      id: "234567",
      bus_name: "雄獅奶油2號",
      license_plate: "KKA-002",
      type: "中巴",
      available_seats: 30,
      age: 3,
      depot: "信義停車場",
      team: "第二組",
      current_dep: "信義停車場",
      main_driver: "張小明",
      status: "2"
    },
    {
      id: "345678",
      bus_name: "雄獅奶油3號",
      license_plate: "KKA-003",
      type: "小巴",
      available_seats: 20,
      age: 2,
      depot: "大安停車場",
      team: "第三組",
      current_dep: "大安停車場",
      main_driver: "王大力",
      status: "3"
    },
    {
      id: "456789",
      bus_name: "雄獅奶油4號",
      license_plate: "KKA-004",
      type: "遊覽車",
      available_seats: 50,
      age: 4,
      depot: "中山停車場",
      team: "第四組",
      current_dep: "中山停車場",
      main_driver: "李小龍",
      status: "4"
    },
    {
      id: "567890",
      bus_name: "雄獅奶油5號",
      license_plate: "KKA-005",
      type: "迷你巴士",
      available_seats: 15,
      age: 1,
      depot: "士林停車場",
      team: "第五組",
      current_dep: "士林停車場",
      main_driver: "陳小美",
      status: "5"
    }
  ],
  conditionList: [
    {
      field_Name: "User_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "使用者-名"
    },
    {
      field_Name: "User_First_Name",
      arrayConditions: ["like", "equal"],
      displayType: "search",
      dataType: "string",
      label: "使用者-姓"
    },
    {
      field_Name: "Driver_No",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "駕駛編號"
    },
    {
      field_Name: "User_Email",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "信箱"
    },
    {
      field_Name: "Group_Status",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "權限狀態"
    },
    {
      field_Name: "Carteam",
      arrayConditions: ["like", "equal"],
      displayType: "fix",
      dataType: "string",
      label: "車輛團隊"
    },
    {
      field_Name: "Car",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "指定車輛"
    },
    {
      field_Name: "Group_Name",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "群組"
    },
    {
      field_Name: "Logincount",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "登入次數"
    },
    {
      field_Name: "First_Login",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "加入時間"
    },
    {
      field_Name: "Invt_Status",
      arrayConditions: ["like", "equal"],
      displayType: "hide",
      dataType: "string",
      label: "邀請狀態"
    }
  ],
  pageInfo: {
    page_Index: 1,
    page_Size: 10,
    orderby: null,
    arrangement: "desc",
    total: 89,
    last_Page: 9
  },
  resultString: null
};
