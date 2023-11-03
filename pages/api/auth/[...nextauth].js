import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { getUser } from "@services/sys/getUser";
//CATCH-ALL ROUTE

//All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET
    // }),
    CredentialsProvider({
      id: "credentials",
      // TODO: name and credentials are related to gen the default form
      name: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "4-digit numbers"
        }
      },
      async authorize(credentials, req) {
        // always return user from frontend for now
        if (!req.body.email || !req.body.password) return null;
        console.log("🍅 authorize");
        // TODO:　authenticate user: fetch API response
        const user = await getUser();

        console.log("🍅 user");

        if (!user) return null;
        return user;
      }
    })
  ],
  session: {
    strategy: "jwt",
    // DO NOT CHANGE THIS
    // The Credentials provider can only be used if JSON Web Tokens are enabled for sessions.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return "123";
      // return randomUUID?.() ?? randomBytes(32).toString("hex");
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    // asynchronous functions
    // use to control what happens when an next-auth built-in action is performed
    async signIn({ user, account, profile, email, credentials }) {
      // on Credentials Provider
      // the user object is the response returned from the authorize callback
      // the profile object is the raw body of the HTTP POST submission.
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   // Redirects returned by this callback cancel the authentication flow
    //   return `${baseUrl}/`;
    // },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.user.userID = token.userID;
      session.user.authData = token.authData;
      return session;
      // The session object is not persisted server side
      // only the session token, the user, and the expiry time is stored in the session table.
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token to the token right after signin
      // request to /api/auth/signin
      // request to /api/auth/session
      // get

      if (account) {
        token.accessToken = account.access_token;
        token.userID = user.userID;
        token.authData = user.authData;
      }
      // returned value will be encrypted, and it is stored in a cookie
      return token;
    }
  },
  pages: {
    // signIn: "/login"
    // signOut: "/auth/signout",
    // error: "/auth/error",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user"
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
// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
