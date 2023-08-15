import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateBriefEmployee: createUrlPath("ATR", "CreateAccountInfo"), //快速新增員工
  CreateEmployee: createUrlPath("ATR", "CreateAccount"), //新增員工

  GetAllEmployees: createUrlPath("ATR", "GetAccountList"), //取得所有員工資料(列表)
  GetEmployeeById: createUrlPath("ATR", "GetUpdateList"), //取得某位員工資料(單筆)
  GetHealthsListByID: createUrlPath("ATR", "GetHealthsListByID"), // 取得單一駕駛健康資料列表
  GetHealthByID: createUrlPath("ATR", "GetHealthByID"), // 取得單一駕駛健康資料列表

  UpdateEmployee: createUrlPath("ATR", "UpdateAccount"), //更新員工資料
  UpdateAccountHealth: createUrlPath("ATR", "UpdateAccountHealth"), // 更新健康資料

  DeleteEmployee: createUrlPath("ATR", "DeleteAccount/api/DeleteAccount") //刪除員工
};

export default API_Path;
