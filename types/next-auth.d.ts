import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      account_no: string;
      account_name: string;
      role: string;
      email: string;
      menuData: {
        userdefine: any[];
        defaultMenu: any[];
      };
    };
  }
}
