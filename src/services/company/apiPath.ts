import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  GetSingleCompany: createUrlPath("ATR", "QueryCompany"), //取得單一公司資料
  UpdateCompany: createUrlPath("ATR", "UpdateCompany") //更新公司資料
};

export default API_Path;
