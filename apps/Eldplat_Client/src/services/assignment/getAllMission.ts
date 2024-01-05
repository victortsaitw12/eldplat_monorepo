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
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/01",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-01 (五)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-01 (五)",
    mission_End_Time: "18:00",
    dispatch_List: [
      {
        dispatch_Start_Date: "2023-12-01 (五)",
        dispatch_service: []
      },
      {
        dispatch_Start_Date: "2023-12-02 (六)",
        dispatch_service: []
      }
    ]
  },
  {
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/01",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-01 (五)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-01 (五)",
    mission_End_Time: "16:00",
    dispatch_List: []
  },
  {
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/02",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-02 (六)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-02 (六)",
    mission_End_Time: "16:00",
    dispatch_List: [
      {
        dispatch_Start_Date: "2023-12-02 (六)",
        dispatch_service: []
      }
    ]
  },
  {
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/03",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-03 (日)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-03 (日)",
    mission_End_Time: "16:00",
    dispatch_List: []
  },
  {
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/04",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-04 (一)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-04 (一)",
    mission_End_Time: "16:00",
    dispatch_List: []
  },
  {
    mssion_No: "ORD202312310003",
    mission_Date: "2024/01/05",
    mission_Type: "客制包車",
    mission_Need: "2天2車",
    mission_Departure: "台北車站",
    mission_Start_Date: "2023-12-01 (五)",
    mission_Start_Time: "08:00",
    mission_End_Date: "2023-12-01 (五)",
    mission_End_Time: "18:00",
    dispatch_List: [
      {
        dispatch_Start_Date: "2023-12-01 (五)",
        dispatch_service: []
      },
      {
        dispatch_Start_Date: "2023-12-02 (六)",
        dispatch_service: []
      }
    ]
  }
];
export const getAllMission = async (pageInfo = defaultPageInfo) => {
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
