import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateQuotation: createUrlPath("ORD", "CreateFEQuotation"), // 創建詢價/報價單
  getBusType: createUrlPath("CAR", "GetBusType"), // 獲得車型
  getOrdersList: createUrlPath("ORD", "GetOrderManage"), // 訂單管理列表(前台)
  getQuotation: createUrlPath("ORD", "GetFE_QuotationByID") // 檢視訂單(前台)
};

export default API_Path;
