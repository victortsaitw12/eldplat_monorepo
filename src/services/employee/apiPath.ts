import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  CreateAccountInfo: createUrlPath("ATR", "CreateAccountInfo"),
  DeleteAccount: createUrlPath("ATR", "DeleteAccount/api/DeleteAccount/1"),
  GetAccountList: createUrlPath("ATR", "GetAccountList"),
  GetUpdateList: createUrlPath("ATR", "GetUpdateList"),
  UpdateAccount: createUrlPath("ATR", "UpdateAccount")
};

export default API_Path;
