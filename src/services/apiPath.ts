import { getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  // Login
  login: getUrlPath("sys", "Account", "Login"),
  getMenu: getUrlPath("sys", "Menu", "GetMenu"),
  // 組織角色管理 org, role
  getOrgList: getUrlPath("sys", "Org", "GetOrgList"),
  createOrg: getUrlPath("sys", "Org", "CreateOrg"),
  updateOrg: getUrlPath("sys", "Org", "UpdateOrg"),
  getRoleList: getUrlPath("sys", "Role", "GetRoleList"),
  getOneRole: getUrlPath("sys", "Role", "GetOneRole"),
  createRole: getUrlPath("sys", "Role", "CreateRole"),
  updateRole: getUrlPath("sys", "Org", "UpdateRole"),
  // 使用者列表 account
  getAccountList: getUrlPath("sys", "Account", "GetAccountList"),
  CreateAccount: getUrlPath("sys", "Account", "CreateAccount"),
  UpdateAccount: getUrlPath("sys", "Account", "UpdateAccount")
};

export default API_Path;
