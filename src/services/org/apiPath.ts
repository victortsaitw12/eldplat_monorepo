import { createUrlPath, getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  getOrgList: getUrlPath("SYS", "Org", "GetOrgList") // read
};

export default API_Path;
