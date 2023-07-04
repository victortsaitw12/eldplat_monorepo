import { createUrlPath } from "@utils/createUrlPath";

const API_Path = {
  GetSideMenuBackend: createUrlPath("COM", "GetSideMenuBackend"),
  GetSideMenuPersonal: createUrlPath("COM", "GetSideMenuPersonal")
};

export default API_Path;
