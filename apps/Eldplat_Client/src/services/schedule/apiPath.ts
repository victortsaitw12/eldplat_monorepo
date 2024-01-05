import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createSchedule: createUrlPath("ATR", "InsertDriverSchedule"), // 新增排休
  deleteSchedule: createUrlPath("ATR", "DeleteDriverSchedule"), // 刪除特定排休
  getAllDriverScheduleList: createUrlPath("ATR", "GetAllDriverScheduleList"), // 搜尋全部駕駛排假列表
  getScheduleList: createUrlPath("ATR", "GetDriverScheduleList"),
  getScheduleSidebar: createUrlPath("ATR", "QueryScheduleSidebar"), // 檢視個別駕駛單日所有排休
  getScheduleUpdateList: createUrlPath("ATR", "QueryScheduleUpdateList"), // 檢視個別排休詳情
  updateSchedule: createUrlPath("ATR", "UpdateDriverSchedule"),
  updateScheduleSign: createUrlPath("ATR", "UpdateScheduleSign"),
  getLeaveTypeDDL: createUrlPath("ATR", "GetCompanyOptions")
};

export default API_Path;
