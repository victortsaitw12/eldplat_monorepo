import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  GetVendor: createUrlPath("VNR", "GetVendorList"), //查詢供應商（多筆資料）
  CreateVendor: createUrlPath("VNR", "CreateVendor"), //新增供應商
  GetOneVendor: createUrlPath("VNR", "GetVendorUpdateInfo"), //查詢供應商（單筆）
  UpdateVendor: createUrlPath("VNR", "UpdateVendor"), //修改供應商
  DeleteVendor: createUrlPath("VNR", "DeleteVendor"), //刪除供應商

  // 多國語系
  GetLanguages: createUrlPath("VNR", "ProduceVendorLanguage")
};

export default API_Path;
