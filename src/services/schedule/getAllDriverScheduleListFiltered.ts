import API_Path from "./apiPath";
import { I_PageInfo } from "@components/PaginationField";

// 檢視所有駕駛當月排休
export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: "driver_no", // 準備刪除
  Arrangement: "desc", // 準備刪除
  Total: 0, // 準備刪除
  Last_Page: 0 // 準備刪除
};
const DUMMY_DATA = [
  {
      "driver_No": "DRV202311220001",
      "user_Name": "俊儀",
      "user_First_Name": "鍾",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "4",
      "schedule_Approved": false,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202311220339",
              "driver_No": "DRV202311220001",
              "schd_Date": "2023-12-05",
              "schd_Type": "02",
              "schd_Start_Time": "12/05/2023 00:00:00",
              "schd_End_Time": "12/05/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311220346",
              "driver_No": "DRV202311220001",
              "schd_Date": "2023-12-12",
              "schd_Type": "02",
              "schd_Start_Time": "12/12/2023 00:00:00",
              "schd_End_Time": "12/12/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311220353",
              "driver_No": "DRV202311220001",
              "schd_Date": "2023-12-19",
              "schd_Type": "02",
              "schd_Start_Time": "12/19/2023 00:00:00",
              "schd_End_Time": "12/19/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311220360",
              "driver_No": "DRV202311220001",
              "schd_Date": "2023-12-26",
              "schd_Type": "02",
              "schd_Start_Time": "12/26/2023 00:00:00",
              "schd_End_Time": "12/26/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  },
  {
      "driver_No": "DRV202311210001",
      "user_Name": "杰倫",
      "user_First_Name": "陳",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "4",
      "schedule_Approved": true,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202311210339",
              "driver_No": "DRV202311210001",
              "schd_Date": "2023-12-05",
              "schd_Type": "02",
              "schd_Start_Time": "12/05/2023 00:00:00",
              "schd_End_Time": "12/05/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311210346",
              "driver_No": "DRV202311210001",
              "schd_Date": "2023-12-12",
              "schd_Type": "02",
              "schd_Start_Time": "12/12/2023 00:00:00",
              "schd_End_Time": "12/12/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311210353",
              "driver_No": "DRV202311210001",
              "schd_Date": "2023-12-19",
              "schd_Type": "02",
              "schd_Start_Time": "12/19/2023 00:00:00",
              "schd_End_Time": "12/19/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202311210360",
              "driver_No": "DRV202311210001",
              "schd_Date": "2023-12-26",
              "schd_Type": "02",
              "schd_Start_Time": "12/26/2023 00:00:00",
              "schd_End_Time": "12/26/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  },
  {
      "driver_No": "DRV202309180001",
      "user_Name": "文哲",
      "user_First_Name": "柯",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "5",
      "schedule_Approved": true,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202309180336",
              "driver_No": "DRV202309180001",
              "schd_Date": "2023-12-02",
              "schd_Type": "02",
              "schd_Start_Time": "12/02/2023 00:00:00",
              "schd_End_Time": "12/02/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309180343",
              "driver_No": "DRV202309180001",
              "schd_Date": "2023-12-09",
              "schd_Type": "02",
              "schd_Start_Time": "12/09/2023 00:00:00",
              "schd_End_Time": "12/09/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309180350",
              "driver_No": "DRV202309180001",
              "schd_Date": "2023-12-16",
              "schd_Type": "02",
              "schd_Start_Time": "12/16/2023 00:00:00",
              "schd_End_Time": "12/16/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309180357",
              "driver_No": "DRV202309180001",
              "schd_Date": "2023-12-23",
              "schd_Type": "02",
              "schd_Start_Time": "12/23/2023 00:00:00",
              "schd_End_Time": "12/23/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309180364",
              "driver_No": "DRV202309180001",
              "schd_Date": "2023-12-30",
              "schd_Type": "02",
              "schd_Start_Time": "12/30/2023 00:00:00",
              "schd_End_Time": "12/30/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  },
  {
      "driver_No": "DRV202309080001",
      "user_Name": "依林",
      "user_First_Name": "陳",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "5",
      "schedule_Approved": true,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202309080335",
              "driver_No": "DRV202309080001",
              "schd_Date": "2023-12-01",
              "schd_Type": "02",
              "schd_Start_Time": "12/01/2023 00:00:00",
              "schd_End_Time": "12/01/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309080342",
              "driver_No": "DRV202309080001",
              "schd_Date": "2023-12-08",
              "schd_Type": "02",
              "schd_Start_Time": "12/08/2023 00:00:00",
              "schd_End_Time": "12/08/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309080349",
              "driver_No": "DRV202309080001",
              "schd_Date": "2023-12-16",
              "schd_Type": "02",
              "schd_Start_Time": "12/16/2023 00:00:00",
              "schd_End_Time": "12/16/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309080356",
              "driver_No": "DRV202309080001",
              "schd_Date": "2023-12-22",
              "schd_Type": "02",
              "schd_Start_Time": "12/22/2023 00:00:00",
              "schd_End_Time": "12/22/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309080363",
              "driver_No": "DRV202309080001",
              "schd_Date": "2023-12-29",
              "schd_Type": "02",
              "schd_Start_Time": "12/29/2023 00:00:00",
              "schd_End_Time": "12/29/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  },
  {
      "driver_No": "DRV202309070006",
      "user_Name": "聰明",
      "user_First_Name": "張",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "5",
      "schedule_Approved": true,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202309072162",
              "driver_No": "DRV202309070006",
              "schd_Date": "2023-12-02",
              "schd_Type": "02",
              "schd_Start_Time": "12/02/2023 00:00:00",
              "schd_End_Time": "12/02/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309072169",
              "driver_No": "DRV202309070006",
              "schd_Date": "2023-12-09",
              "schd_Type": "02",
              "schd_Start_Time": "12/09/2023 00:00:00",
              "schd_End_Time": "12/09/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309072176",
              "driver_No": "DRV202309070006",
              "schd_Date": "2023-12-16",
              "schd_Type": "02",
              "schd_Start_Time": "12/16/2023 00:00:00",
              "schd_End_Time": "12/16/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309072183",
              "driver_No": "DRV202309070006",
              "schd_Date": "2023-12-23",
              "schd_Type": "02",
              "schd_Start_Time": "12/23/2023 00:00:00",
              "schd_End_Time": "12/23/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309072190",
              "driver_No": "DRV202309070006",
              "schd_Date": "2023-12-30",
              "schd_Type": "02",
              "schd_Start_Time": "12/30/2023 00:00:00",
              "schd_End_Time": "12/30/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  },
  {
      "driver_No": "DRV202309070005",
      "user_Name": "尼亞",
      "user_First_Name": "安",
      "short_Schd_Date": "2023-12",
      "dsph_Area": null,
      "dsph_City": null,
      "total_Leave_Days": "5",
      "schedule_Approved": true,
      "schedule_List": [
          {
              "drv_Schedule_No": "DSD202309071796",
              "driver_No": "DRV202309070005",
              "schd_Date": "2023-12-01",
              "schd_Type": "02",
              "schd_Start_Time": "12/01/2023 00:00:00",
              "schd_End_Time": "12/01/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309071803",
              "driver_No": "DRV202309070005",
              "schd_Date": "2023-12-08",
              "schd_Type": "02",
              "schd_Start_Time": "12/08/2023 00:00:00",
              "schd_End_Time": "12/08/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309071810",
              "driver_No": "DRV202309070005",
              "schd_Date": "2023-12-16",
              "schd_Type": "02",
              "schd_Start_Time": "12/16/2023 00:00:00",
              "schd_End_Time": "12/16/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309071817",
              "driver_No": "DRV202309070005",
              "schd_Date": "2023-12-22",
              "schd_Type": "02",
              "schd_Start_Time": "12/22/2023 00:00:00",
              "schd_End_Time": "12/22/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          },
          {
              "drv_Schedule_No": "DSD202309071824",
              "driver_No": "DRV202309070005",
              "schd_Date": "2023-12-29",
              "schd_Type": "02",
              "schd_Start_Time": "12/29/2023 00:00:00",
              "schd_End_Time": "12/29/2023 23:59:00",
              "leave_Code": null,
              "leave_Description": null,
              "check_Status": null
          }
      ]
  }
]
export const getAllDriverScheduleListFiltered = async (
  dateStr: string,
  filter: { [key: string]: any } = {},
  pageInfo = defaultPageInfo
) => {

  // const shiftFilter = [
  //   {
  //     field_Name: "Short_Schd_Date",
  //     arrayConditions: "equal",
  //     value: dateStr,
  //     dataType: "string"
  //   }
  // ];
  // for (const key in filter) {
  //   if (filter[key].value !== "") {
  //     shiftFilter.push({
  //       field_Name: key,
  //       arrayConditions: "like",
  //       value: filter[key].value,
  //       dataType: filter[key].dataType
  //     });
  //   }
  // }
  // const res = await fetch(`${API_Path["getAllDriverScheduleList"]}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //   },
  //   // body: JSON.stringify(data),
  //   body: JSON.stringify({
  //     schedule_Filter: shiftFilter,
  //     filter_Needed: true, // 準備刪除
  //     pageInfo: pageInfo,
  //     default_Needed: true // 準備刪除
  //   })
  // });
  return DUMMY_DATA;
  // return await res.json();
};
