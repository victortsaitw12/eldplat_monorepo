import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createDriver: createUrlPath("ATR", "InsertFilterUserToDriver"), // 新增駕駛編號 (未填寫資料)  InsertFilterUserToDriver
  deleteDriver: createUrlPath("CAR", "DeleteDriver"), // 停用駕駛
  getAllDrivers: createUrlPath("ATR", "QueryDriverList"), // 取得所有駕駛資料 QueryDriverList
  getAllNonDriverUser: createUrlPath("ATR", "FilterUser"), // 取得(非駕駛)使用者資料
  getDriverById: createUrlPath("ATR", "QueryDriverInfo"), // 取得單一駕駛資料
  updateDriver: createUrlPath("ATR", "UpdateDriver"), // 更新駕駛資料
  updateDriverInfo: createUrlPath("ATR", "InsertDriver") // 更新駕駛資料 updateDriverInfo (疑似作廢，待確認)
};

export default API_Path;