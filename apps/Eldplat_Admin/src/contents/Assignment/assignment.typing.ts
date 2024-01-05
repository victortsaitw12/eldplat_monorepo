// -------------------------------------- //
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

export interface BusScheduleData {
  bus_No: string;
  bus_Name: string;
  bus_Driver: string;
  short_Schd_Date: string;
  mission_List: BusMissionData[];
}

export interface BusMissionData {
  mission_No: string;
  mission_Date: string;
  mission_Name: string;
  mission_Type: string;
}
