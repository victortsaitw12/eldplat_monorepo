import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "password-login",
      name: "Credentials",
      Credentials: {
        username: { label: "Username", type: "text", placeholder: "user name" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "4-digit numbers"
        }
      },
      async authorize(credentials, req) {
        console.log("🍅 authorize is called:", credentials, req);

        const res = await fetch("/api/test/login", {
          method: "POST",
          body: JSON.stringify(credentials)
        });
        const { user } = await res.json();
        console.log("🍅 user:", user);

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      }
    })
  ],
  session: {
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    // strategy: "database",
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
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
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
