import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createDriver: createUrlPath("ATR", "InsertFilterUserToDriver"), // 新增駕駛編號 (未填寫資料)  InsertFilterUserToDriver
  deleteDriver: createUrlPath("ATR", "DeleteDriver"), // 停用駕駛
  getAllDrivers: createUrlPath("ATR", "QueryDriverList"), // 取得所有駕駛資料 QueryDriverList
  getAllNonDriverUser: createUrlPath("ATR", "FilterUser"), // 取得(非駕駛)使用者資料
  getDriverById: createUrlPath("ATR", "QueryDriverInfo"), // 取得單一駕駛資料
  updateDriver: createUrlPath("ATR", "UpdateDriver"), // 更新駕駛資料
  // updateDriverInfo: createUrlPath("ATR", "InsertDriver"), // 更新駕駛資料 updateDriverInfo (疑似作廢，待確認)
  updateDriverLicense: createUrlPath("ATR", "UpdateDriverLicense"), // 更新駕駛證照
  updateDriverStatus: createUrlPath("ATR", "UpdateDriverStatus"), // 更新駕駛狀態（啟用/停用）
  getLicenseById: createUrlPath("ATR", "GetLicensesByID"), // 取得單一駕駛證照資料
  getHealthById: createUrlPath("ATR", "GetHealthsListByID"), // 取得單一駕駛健康資料
  getAreaDDL: createUrlPath("COM", "GetAreaDDL"), // 取駕駛國家 執照地區下拉式資料
  getOneDDL: createUrlPath("COM", "GetOneDDL") // 取駕駛國家 執照地區下拉式資料
};

export default API_Path;
