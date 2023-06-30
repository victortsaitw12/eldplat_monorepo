import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createSchedule: createUrlPath("ATR", "InsertDriverSchedule"), // 新增排休
  deleteSchedule: createUrlPath("ATR", "DeleteDriverSchedule"), // 刪除特定排休
  getAllDriverScheduleList: createUrlPath("ATR", "GetAllDriverScheduleList"), //
  getAllDriverScheduleListFiltered: createUrlPath(
    "ATR",
    "GetFilterScheduleList"
  ), //
  getScheduleList: createUrlPath("ATR", "GetDriverScheduleList"),
  getScheduleSidebar: createUrlPath("ATR", "QueryScheduleSidebar"),
  getScheduleUpdateList: createUrlPath("ATR", "QueryScheduleUpdateList"),
  updateSchedule: createUrlPath("ATR", "UpdateDriverSchedule"),
  updateScheduleSign: createUrlPath("ATR", "UpdateScheduleSign")
};

export default API_Path;
