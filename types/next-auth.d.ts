import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      username: string;
      role: string;
      menuData: {
        userdefine: any[];
        defaultMenu: any[];
      };
    };
  }
}
