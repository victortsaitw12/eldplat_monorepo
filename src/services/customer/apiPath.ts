import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  createCustomer: createUrlPath("CTR", "CreateCustomer"), // 創建客戶
  deleteCustomer: createUrlPath("CTR", "DeleteCustomer"), // 刪除客戶
  getAllCustomers: createUrlPath("CTR", "GetCustomer"), // 取得客戶列表
  getCustomerById: createUrlPath("CTR", "GetOneCustomer"), // 取得單一客戶
  updateCustomer: createUrlPath("CTR", "UpdateCustomer") // 更新客戶資料
};

export default API_Path;
