import { getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  // 組織 org
  getOrgList: getUrlPath("sys", "Org", "GetOrgList"),
  createOrg: getUrlPath("sys", "Org", "CreateOrg"),
  updateOrg: getUrlPath("sys", "Org", "UpdateOrg"),
  // 角色 role
  getRoleList: getUrlPath("sys", "Role", "GetRoleList"),
  getOneRole: getUrlPath("sys", "Role", "GetOneRole"),
  createRole: getUrlPath("sys", "Role", "CreateRole"),
  updateRole: getUrlPath("sys", "Role", "UpdateRole"),
  // 使用者 account
  getAccountList: getUrlPath("sys", "Account", "GetAccountList"),
  getOneAccount: getUrlPath("sys", "Account", "GetOneAccount"),
  CreateAccount: getUrlPath("sys", "Account", "CreateAccount"),
  UpdateAccount: getUrlPath("sys", "Account", "UpdateAccount"),
  // Login
  login: getUrlPath("sys", "Account", "Login"),
  getMenu: getUrlPath("sys", "Menu", "GetMenu")
};

export default API_Path;
