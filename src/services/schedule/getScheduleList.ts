import API_Path from "./apiPath";
// 檢視個別駕駛所有排休
const DUMMY_DATA = [
  {
    drv_Schedule_No: "DSD202311220360",
    driver_No: "DRV202311220001",
    schd_Date: "2023/12/26",
    schd_Start_Time: "2023-12-26 00:00",
    schd_End_Time: "2023-12-26 23:59",
    schd_Type: "03",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 4
  },
  {
    drv_Schedule_No: "DSD202311220241",
    driver_No: "DRV202311220001",
    schd_Date: "2023/12/18",
    schd_Start_Time: "2023-08-29 00:00",
    schd_End_Time: "2023-08-29 23:59",
    schd_Type: "040",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  },
  {
    drv_Schedule_No: "DSD202311220234",
    driver_No: "DRV202311220001",
    schd_Date: "2023/12/01",
    schd_Start_Time: "2023-08-22 00:00",
    schd_End_Time: "2023-08-22 23:59",
    schd_Type: "02",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  },
  {
    drv_Schedule_No: "DSD202311220227",
    driver_No: "DRV202311220001",
    schd_Date: "2023/12/08",
    schd_Start_Time: "2023-08-15 00:00",
    schd_End_Time: "2023-08-15 23:59",
    schd_Type: "02",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  },
  {
    drv_Schedule_No: "DSD202311220360",
    driver_No: "DRV202311220001",
    schd_Date: "2024/01/26",
    schd_Start_Time: "2023-12-26 00:00",
    schd_End_Time: "2023-12-26 23:59",
    schd_Type: "03",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 4
  },
  {
    drv_Schedule_No: "DSD202311220241",
    driver_No: "DRV202311220001",
    schd_Date: "2024/01/18",
    schd_Start_Time: "2023-08-29 00:00",
    schd_End_Time: "2023-08-29 23:59",
    schd_Type: "040",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  },
  {
    drv_Schedule_No: "DSD202311220234",
    driver_No: "DRV202311220001",
    schd_Date: "2024/01/01",
    schd_Start_Time: "2023-08-22 00:00",
    schd_End_Time: "2023-08-22 23:59",
    schd_Type: "02",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  },
  {
    drv_Schedule_No: "DSD202311220227",
    driver_No: "DRV202311220001",
    schd_Date: "2024/01/08",
    schd_Start_Time: "2023-08-15 00:00",
    schd_End_Time: "2023-08-15 23:59",
    schd_Type: "02",
    leave_Code: null,
    leave_Description: null,
    check_Status: null,
    user_Name: "零七",
    user_First_Name: "林",
    total_Leave_Days: 5
  }
];
export const getScheduleList = async (id: any) => {
  // const res = await fetch(`${API_Path["getScheduleList"]}?driver_no=${id}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //   }
  // });
  return DUMMY_DATA;
  // return await res.json();
};
