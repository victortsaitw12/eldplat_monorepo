const domain = {
  dev: "https://localhost:7088",
  prod: "https://localhost:7088"
};
const path = {
  dev: {
    CreateQuotation: domain["dev"] + "/ORD/CreateQuotation", // 創建詢價/報價單
    GetQuotationByID: domain["dev"] + "/ORD/GetQuotationByID?quote_no=", // 查詢單筆報價/報價/訂單
    GetQuotationByFilter: domain["dev"] + "/ORD/GetQuotationByFilter", // 篩選詢價/報價/訂單列表
    UpdateQuotation: domain["dev"] + "/ORD/UpdateQuotation", // 編輯詢價/報價/訂單列表
    CancelQuotation: domain["dev"] + "/ORD/CancelQuotation", // 取消報價（成立訂單並產生新的訂單號）
    GetQuotationByStatus: domain["dev"] + "/ORD/GetQuotationByStatus", //查詢tab詢價/報價/訂單列表
    UpdateStatusLog: domain["dev"] + "/ORD/UpdateStatusLog" //更改詢價/報價/訂單狀態
  },
  prod: {
    CreateQuotation: domain["prod"] + "/ORD/CreateQuotation", // 創建詢價/報價單
    GetQuotationByID: domain["prod"] + "/ORD/GetQuotationByID?quote_no=", // 查詢單筆報價/報價/訂單
    GetQuotationByFilter: domain["prod"] + "/ORD/GetQuotationByFilter", // 篩選詢價/報價/訂單列表
    UpdateQuotation: domain["prod"] + "/ORD/UpdateQuotation", // 編輯詢價/報價/訂單列表
    CancelQuotation: domain["prod"] + "/ORD/CancelQuotation", // 取消報價（成立訂單並產生新的訂單號）
    GetQuotationByStatus: domain["prod"] + "/ORD/GetQuotationByStatus", //查詢tab詢價/報價/訂單列表
    UpdateStatusLog: domain["prod"] + "/ORD/UpdateStatusLog" //更改詢價/報價/訂單狀態
  }
};

const API_Path = path["dev"];
export default API_Path;
