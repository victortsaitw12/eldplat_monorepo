import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateEmployee: createUrlPath("ATR", "CreateAccount"), //新增員工
  CreateBriefEmployee: createUrlPath("ATR", "CreateAccountInfo"), //快速新增員工
  DeleteEmployee: createUrlPath("ATR", "DeleteAccount/api/DeleteAccount"), //刪除員工
  GetAllEmployees: createUrlPath("ATR", "GetAccountList"), //取得所有員工資料(列表)
  GetEmployeeById: createUrlPath("ATR", "GetUpdateList"), //取得某位員工資料(單筆)
  UpdateEmployee: createUrlPath("ATR", "UpdateAccount") //更新員工資料
};

export default API_Path;
