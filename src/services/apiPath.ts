import { getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  // 使用者管理 org, role, account
  getOrgList: getUrlPath("sys", "Org", "GetOrgList"),
  createOrg: getUrlPath("sys", "Org", "CreateOrg"),
  updateOrg: getUrlPath("sys", "Org", "UpdateOrg"),
  getRoleList: getUrlPath("sys", "Role", "GetRoleList"),
  getOneRole: getUrlPath("sys", "Role", "GetOneRole"),
  createRole: getUrlPath("sys", "Role", "CreateRole"),
  updateRole: getUrlPath("sys", "Org", "UpdateRole")
};

export default API_Path;
