import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateMaintenance: createUrlPath("CAR", "CreateMaintenance"), //新增維保任務(側邊快速新增資料)
  CreateMaintenanceAssignment: createUrlPath(
    "CAR",
    "CreateMaintenanceAssignment"
  ), //按下派單按鈕
  GetCreateDDL: createUrlPath("CAR", "GetMaintenanceDDL"), //查詢下拉式資料
  GetMaintenanceById: createUrlPath("CAR", "GetOneMaintenance"), //查詢單筆維保資料
  GetMaintenanceListForMissionAndRecord: createUrlPath(
    "CAR",
    "GetMaintenanceList"
  ), //查詢所有維保任務和紀錄列表
  UpdateMaintenanceStatus: createUrlPath("CAR", "UpdateMaintenanceStatus"), //更新結案狀態(維保任務頁)
  GetAllMaintenanceNotices: createUrlPath("CAR", "ReminderMaintenance_GetAll"), //查詢所有維保通知列表
  CancelMaintenanceById: createUrlPath("CAR", "ReminderMaintenance_Cancel"), //停用單筆維保通知
  UpdateMaintenance: createUrlPath("CAR", "UpdateMaintenance") //更新某筆維保資料
};

export default API_Path;
