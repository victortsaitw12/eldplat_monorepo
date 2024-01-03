import API_Path from "./apiPath";
import { createElement } from "react";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import { PatternType } from "@utils/mappingQueryData";
import { I_PageInfo } from "@components/PaginationField";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};
const DUMMY_DATA = [
  {
    bus_No: "KAA-001",
    bus_Name: "奶油雄獅號",
    bus_Driver: "楊俊儀",
    mission_List: [
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/02",
        mission_Name: "定期保養",
        mission_Type: "2"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2024/01/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2024/01/02",
        mission_Name: "定期保養",
        mission_Type: "2"
      }
    ]
  },
  {
    bus_No: "KAA-002",
    bus_Name: "雄獅號",
    bus_Driver: "吳中華",
    mission_List: [
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2024/01/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2024/01/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      }
    ]
  },
  {
    bus_No: "KAA-002",
    bus_Name: "雄獅號",
    bus_Driver: "吳中華",
    mission_List: [
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2024/01/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      }
    ]
  },
  {
    bus_No: "KAA-002",
    bus_Name: "雄獅號",
    bus_Driver: "吳中華",
    mission_List: [
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      }
    ]
  },
  {
    bus_No: "KAA-002",
    bus_Name: "雄獅號",
    bus_Driver: "吳中華",
    mission_List: [
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/01",
        mission_Name: "客製包車 一天一車",
        mission_Type: "1"
      },
      {
        mission_No: "DSD202311220339",
        mission_Date: "2023/12/02",
        mission_Name: "需求變更 一天一車",
        mission_Type: "3"
      }
    ]
  }
];
export const getAllAssignments = async (pageInfo = defaultPageInfo) => {
  // const res = await fetch(API_Path["GetAllAssignments"], {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
  //   },
  //   body: JSON.stringify(pageInfo)
  // });
  // console.log("res for getting the list of assignment : ", res);
  return DUMMY_DATA;
  // return res.json();
};
