import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createSchedule: createUrlPath("ATR", "InsertDriverSchedule"), // 新增排休
  deleteSchedule: createUrlPath("ATR", "DeleteDriverSchedule"), // 刪除特定排休
  getAllDriverScheduleList: createUrlPath("ATR", "QueryDriverList"), //
  getAllNonDriverUser: createUrlPath("ATR", "FilterUser"), //
  getDriverById: createUrlPath("ATR", "QueryDriverInfo"), //
  updateDriver: createUrlPath("ATR", "UpdateDriver"), //
  updateDriverInfo: createUrlPath("ATR", "InsertDriver") //
};

export default API_Path;
