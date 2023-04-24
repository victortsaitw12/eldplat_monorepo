import { parseJWT } from "./parseJWT";

export const isTokenExpired = (token: string | null) => {
  if (!token) {
    console.log("No token!");
    return false;
  }

  try {
    const { exp } = parseJWT(token);
    if (Date.now() >= exp * 1000) {
      console.log("Token expired!");
      return true;
    }
    console.log("Token still valid!");
    return false;
  } catch {
    return false;
  }
};
