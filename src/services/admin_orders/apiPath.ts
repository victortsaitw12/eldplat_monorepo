const domain = {
    dev: "https://localhost:7088",
    prod: "https://localhost:7088",
}
const path = {
    dev: {
        CreateQuotation: domain["dev"] + "/ORD/CreateQuotation",// 創建詢價/報價單
        GetQuotationByID: domain["dev"] + "/ORD/GetQuotationByID",// 查詢報價/報價/訂單
        GetQuotationByFilter: domain["dev"] + "/ORD/GetQuotationByFilter",// 篩選詢價/報價/訂單列表
        UpdateQuotation: domain["dev"] + "/ORD/UpdateQuotation",// 篩選詢價/報價/訂單列表
        CompleteQuotation: domain["dev"] + "/ORD/CompleteQuotation",// 完成報價（成立訂單並產生新的訂單號）
        DeleteQuotation: domain["dev"] + "/ORD/DeleteQuotation",// 完成報價（成立訂單並產生新的訂單號）
    },
    prod: {
        CreateQuotation: domain["prod"] + "/ORD/CreateQuotation",// 創建詢價/報價單
        GetQuotationByID: domain["prod"] + "/ORD/GetQuotationByID",// 查詢報價/報價/訂單
        GetQuotationByFilter: domain["prod"] + "/ORD/GetQuotationByFilter",// 篩選詢價/報價/訂單列表
        UpdateQuotation: domain["prod"] + "/ORD/UpdateQuotation",// 篩選詢價/報價/訂單列表
        CompleteQuotation: domain["prod"] + "/ORD/CompleteQuotation",// 完成報價（成立訂單並產生新的訂單號）
        DeleteQuotation: domain["prod"] + "/ORD/DeleteQuotation",// 完成報價（成立訂單並產生新的訂單號）
    }
}

const API_Path = path["dev"];
export default API_Path;