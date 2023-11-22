import React from "react";
import { SessionProvider } from "next-auth/react";

const defaultModal: any = null;
export const AuthContext = React.createContext(defaultModal);

export function AuthProvider({ children }: { children: any }) {
  // TODO 把session寫進去 _app
  // ref: https://next-auth.js.org/getting-started/example
  //------ functions ------//

  const authStore = {};

  // ------- useEffect ------- //
  return (
    <SessionProvider session={session}>
      <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
    </SessionProvider>
  );
}
