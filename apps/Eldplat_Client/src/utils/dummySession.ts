import { DUMMY_USER } from "@services/account/login";

export const useSession = () => {
  return {
    data: {
      user: DUMMY_USER
    },
    status: "authenticated"
  };
};

export const signIn = async (category: string, data: any) => {
  if (data.email === "user@gmail.com" && data.password === "12345") {
    return { message: "success", error: undefined };
  } else {
    return { message: "fail", error: "fail" };
  }
};

export const signOut = async () => {
  location.assign("/login");
};
