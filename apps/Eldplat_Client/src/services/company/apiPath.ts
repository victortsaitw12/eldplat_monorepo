import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  GetSingleCompany: createUrlPath("ATR", "GetCompanyByID"), //取得單一公司資料
  GetCompanyOptions: createUrlPath("ATR", "GetCompanyOptions"), //取得公司下拉式選單DDL
  UpdateCompany: createUrlPath("ATR", "UpdateCompany") //更新公司資料
};

export default API_Path;
