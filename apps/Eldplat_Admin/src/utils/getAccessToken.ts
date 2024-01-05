import { isTokenExpired } from "@utils/isTokenExpired";
export const getAccessToken = async (): Promise<string> => {
  let accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return "";
  }
  if (isTokenExpired(accessToken)) {
    accessToken = await refreshAccessToken();
    return accessToken;
  }
  return accessToken;
};

const refreshAccessToken = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 200);
  });
};
