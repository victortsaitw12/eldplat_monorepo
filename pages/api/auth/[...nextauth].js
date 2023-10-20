import NextAuth from "next-auth";

//All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    EldplatProvider({
      clientId: process.env.ELDPLAT_ID,
      clientSecret: process.env.ELDPLAT_SECRET
    })
    // ...add more providers here
  ],
  session: {
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    }
  }
  //   jwt: {
  // The maximum age of the NextAuth.js issued JWT in seconds.
  // Defaults to `session.maxAge`.
  // maxAge: 60 * 60 * 24 * 30
  // You can define your own encode/decode functions for signing and encryption
  // async encode() {},
  // async decode() {}
  //   }
};

export default NextAuth(authOptions);
