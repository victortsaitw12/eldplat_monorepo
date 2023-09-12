// -------------------------------------- //
export interface DriverData {
  id?: string;
  driver_No: string;
  user_Name: string;
  user_First_Name: string;
  dsph_Area: string; //"02",
  dsph_City: string; //"02",
  short_Schd_Date: string; //"2023-07",
  total_Leave_Days: string;
  schedule_List: Array<ScheduleInfoData>;
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

export interface InsertData {
  driver_No: string;
  schd_Date: string;
  schd_Type: string; //預設排休
  schd_Start_Time: string;
  schd_End_Time: string;
  leave_Code: string;
  leave_Description: string;
  leave_File_Url: string;
  check_Status: string;
}

export interface MonthlyData {
  drv_Schedule_No: string;
  driver_No: string;
  schd_Date: string;
  schd_Type: string;
  schd_Start_Time: string;
  schd_End_Time: string;
  leave_Code: string;
  leave_Description: string;
  check_Status: string;
  user_Name: string;
  user_First_Name: string;
  total_Leave_Days: number;
}

export interface EventData {
  check_Status: string;
  driver_No: string;
  drv_Schedule_No: string;
  leave_Code: string;
  leave_Description: string;
  schd_Date: string;
  schd_End_Time: string;
  schd_Start_Time: string;
  schd_Type: string;
}

// DailyView
export interface TimeItem {
  hh: string;
  mm: string;
  aa: string;
}

// DailyView
export interface DateItem {
  date: number;
  day: {
    label: string;
    weekend: boolean;
  };
  timestamp: number;
}
export interface DateArrItem {
  date: number;
  day: number;
  timestamp: number;
  disabled: boolean;
}

export interface DateLabel {
  date: number;
  day: string;
  timestamp: number;
}

// -------------------------------------- //
export interface DrawerType {
  type: string;
  title: string;
  timestamp: number | null;
}

export interface LeaveCodeLabel {
  label: string;
  value: string;
  icon: JSX.Element;
  color: string;
}

// -------------------------------------- //
// UIProvider
export interface UItyping {
  id: string;
  setId: (id: string) => void;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  monthCount: number;
  setMonthCount: React.Dispatch<React.SetStateAction<number>>;
  isSelect: boolean;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  viewEventList: any[]; // <-- Replace `any[]` with the actual type
  setViewEventList: React.Dispatch<React.SetStateAction<any[]>>;
  drawerType: DrawerType;
  setDrawerType: React.Dispatch<React.SetStateAction<DrawerType>>;
  insertData: InsertData;
  setInsertData: React.Dispatch<React.SetStateAction<InsertData>>;
  // flag: boolean;
  // setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  timeframe: number;
  setTimeframe: React.Dispatch<React.SetStateAction<number>>;
  mousePosition: any;
  setMousePosition: React.Dispatch<React.SetStateAction<any>>;
  isMouseMenuBtn: boolean;
  setIsMouseMenuBtn: React.Dispatch<React.SetStateAction<boolean>>;
  resetState: () => void;
}
