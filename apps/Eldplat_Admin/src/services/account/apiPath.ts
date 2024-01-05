import { createUrlPath, getUrlPath } from "@utils/createUrlPath";

const API_Path = {
  getUserList: getUrlPath("SYS", "Org", "GetUserList") // read
};

export default API_Path;
