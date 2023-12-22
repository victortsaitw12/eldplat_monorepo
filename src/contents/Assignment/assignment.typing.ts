// -------------------------------------- //
// export interface DriverData {
//   id?: string;
//   driver_No: string;
//   user_Name: string;
//   user_First_Name: string;
//   dsph_Area: string; //"02",
//   dsph_City: string; //"02",
//   short_Schd_Date: string; //"2023-07",
//   total_Leave_Days: string;
//   schedule_List: Array<ScheduleInfoData>;
//   schedule_Approved: boolean;
// }
export interface MissionData {
  mssion_No: string;
  mission_Date: string;
  mission_Type: string;
  mission_Need: string;
  mission_Departure: string;
  mission_Start_Date: string;
  mission_Start_Time: string;
  mission_End_Date: string;
  mission_End_Time: string;
  dispatch_List: DispatchData[];
}

export interface DispatchData {
  dispatch_Start_Date: string;
}

export interface ScheduleInfoData {
  drv_Schedule_No: string;
  driver_No: string;
  schd_Date: string;
  schd_Type: string;
  schd_Start_Time: string;
  schd_End_Time: string;
  leave_Code: string;
  leave_Description: string;
  check_Status: string;
}
