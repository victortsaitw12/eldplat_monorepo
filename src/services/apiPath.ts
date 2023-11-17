import { getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  getOrgList: getUrlPath("sys", "Org", "GetOrgList"),
  createOrg: getUrlPath("sys", "Org", "CreateOrg"),
  updateOrg: getUrlPath("sys", "Org", "UpdateOrg")
};

export default API_Path;
