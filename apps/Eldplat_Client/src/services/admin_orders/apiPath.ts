import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateQuotation: createUrlPath("ORD", "CreateQuotation"), // 創建詢價/報價單
  GetQuotationByID: createUrlPath("ORD", "GetQuotationByID"), // 查詢單筆報價/報價/訂單
  GetQuotationByFilter: createUrlPath("ORD", "GetQuotationByFilter"), // 篩選詢價/報價/訂單列表
  UpdateQuotation: createUrlPath("ORD", "UpdateQuotation"), // 編輯詢價/報價/訂單列表
  CancelQuotation: createUrlPath("ORD", "CancelQuotation"), // 取消報價（成立訂單並產生新的訂單號）
  UpdateStatusLog: createUrlPath("ORD", "UpdateStatusLog"), //更改詢價/報價/訂單狀態
  AssignmentClosed: createUrlPath(
    "ANV",
    "Assignment_Closed/maintenance_quote_no"
  ) //編輯派車單/派工單狀態(結案)
};

export default API_Path;
