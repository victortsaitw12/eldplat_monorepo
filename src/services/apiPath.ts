import { getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  // 使用者管理 org, role, account
  getOrgList: getUrlPath("sys", "Org", "GetOrgList"),
  createOrg: getUrlPath("sys", "Org", "CreateOrg"),
  updateOrg: getUrlPath("sys", "Org", "UpdateOrg"),
  getRoleList: getUrlPath("sys", "Role", "GetRoleList")
};

export default API_Path;
