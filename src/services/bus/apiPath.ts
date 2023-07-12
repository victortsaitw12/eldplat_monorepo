import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createBus: createUrlPath("CAR", "CreateBus"), // 創建車輛
  deleteBus: createUrlPath("CAR", "DeleteBus"), // 刪除車輛
  getAllBuses: createUrlPath("CAR", "GetBusList"), // 取得車輛列表
  getCreateBusOptions: createUrlPath("CAR", "GetCreateBusOptions"), // 取得創建車輛的選項
  getBusById: createUrlPath("CAR", "GetOneBus"), // 取得單一車輛
  updateBus: createUrlPath("CAR", "UpdateBus") // 更新車輛資料
};

export default API_Path;
