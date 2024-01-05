import API_Path from "./apiPath";
import { PatternType } from "@utils/mappingQueryData";
import { I_PageInfo } from "@components/PaginationField";

export const getBusData = async (
  pageInfo: I_PageInfo,
  filter: { [key: string]: any } = {},
  bus_status = "1"
) => {
  return DUMMY_DATA;
};

export const getBusTitle = () => {
  const DUMMY_TITLES = [
    "",
    "車輛",
    "車種",
    "主要駕駛",
    "前一任務訖點",
    "下一任務起點",
  ];
  return DUMMY_TITLES;
};


export interface I_BusData {
  id: string;
  bus_name: string;
  type: string;
  main_driver: string;
  prev_end_location: string;
  next_begin_location: string
}

const DUMMY_DATA = {
  statusCode: "200",
  message: "OK",
  resultList: [
    {
      id: "123456",
      bus_name: "KKA-7885 雄獅號",
      type: "大巴",
      main_driver: "簡中華",
      prev_end_dt: "2024-01-02 (二) 18:00",
      prev_end_location: "桃園機場",
      prev_begin_dt: "2024-01-02 (二) 18:00",
      prev_begin_location: "內湖教室",
    },
    {
      id: "234567",
      bus_name: "KKA-7885 雄獅號",
      type: "大巴",
      main_driver: "簡中華",
      prev_end_dt: "2024-01-02 (二) 18:00",
      prev_end_location: "桃園機場",
      prev_begin_dt: "2024-01-02 (二) 18:00",
      prev_begin_location: "內湖教室",
    },
    {
      id: "345678",
      bus_name: "KKA-7885 雄獅號",
      type: "大巴",
      main_driver: "簡中華",
      prev_end_dt: "2024-01-02 (二) 18:00",
      prev_end_location: "桃園機場",
      prev_begin_dt: "2024-01-02 (二) 18:00",
      prev_begin_location: "內湖教室",
    },
    {
      id: "456789",
      bus_name: "KKA-7885 雄獅號",
      type: "大巴",
      main_driver: "簡中華",
      prev_end_dt: "2024-01-02 (二) 18:00",
      prev_end_location: "桃園機場",
      prev_begin_dt: "2024-01-02 (二) 18:00",
      prev_begin_location: "內湖教室",
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
