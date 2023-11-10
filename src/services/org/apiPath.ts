import { createUrlPath, getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  getOrgList: getUrlPath("sys", "Org", "GetOrgList") // read
};

export default API_Path;
