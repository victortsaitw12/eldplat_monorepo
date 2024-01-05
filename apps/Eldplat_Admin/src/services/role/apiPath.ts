import { createUrlPath, getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  getRoleList: getUrlPath("SYS", "Role", "GetRoleList") // read
};

export default API_Path;
