import React from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import { TextInput } from "evergreen-ui";
import styled from "styled-components";

import { getLayout } from "@layout/QuoteLayout";
import ButtonPrimaryRadius from "@components/Button/PrimaryRadius";

const Page: NextPageWithLayout<never> = () => {
  const { data: session } = useSession();
  const [inputData, setInputData] = React.useState({
    username: "",
    password: ""
  });

  console.log("🍅 session:", session);

  const handleInputChange = (name: "username" | "password", value: string) => {
    const updateInputData = { ...inputData };
    inputData[name] = value;
    setInputData(updateInputData);
  };

  return (
    <ContainerSTY>
      <LoginStatus />
      {!session && <LoginForm onInputChange={handleInputChange} />}
      <LoginBtn />
    </ContainerSTY>
  );
};

// --- components --- //
const LoginStatus = () => {
  const { data: session } = useSession();

  return (
    <ContainerSTY style={{ maxHeight: "100px", fontSize: "2rem" }}>
      {session
        ? `You are Signed in as ${session.user?.name}`
        : "You are NOT signed in"}
    </ContainerSTY>
  );
};

interface I_UserInput {
  username: string;
  password: string;
}
const LoginForm = ({
  onInputChange
}: {
  onInputChange: (name: "username" | "password", value: string) => void;
}) => {
  const { data: session } = useSession();

  return (
    <ContainerSTY style={{ maxWidth: "280px", maxHeight: "100px" }}>
      <TextInput
        onChange={(e: any) =>
          onInputChange.call(null, "username", e.target.value)
        }
        name="username"
        placeholder="User Name"
      />
      <TextInput
        onChange={(e: any) =>
          onInputChange.call(null, "password", e.target.value)
        }
        name="password"
        type="password"
        placeholder="Password"
      />
    </ContainerSTY>
  );
};
const LoginBtn = () => {
  const { data: session } = useSession();

  return (
    <ContainerSTY style={{ maxWidth: "280px", maxHeight: "100px" }}>
      <ButtonPrimaryRadius onClick={() => (session ? signOut() : signIn())}>
        {session ? "Sign out" : "Sign in"}
      </ButtonPrimaryRadius>
    </ContainerSTY>
  );
};

// --- style --- //
const ContainerSTY = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// export const getServerSideProps: GetServerSideProps<Params> = async (
//   context
// ) => {
//   const url = "/api/auth/signin.js";
//   const res = await fetch(url);
//   const data = await res.json();
//   const { query, req } = context;
//   const { user } = req.session;

// if (!user) {
//   return {
//     redirect: {
//       destination: "/login",
//       permanent: false
//     }
//   };
// }
//   return {
//     props: { user }
//   };
// };

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "使用者驗證管理", ...layoutProps });

export default Page;

// =================================================== Next demo Server side fetching data
// export const getServerSidePropsDemo = withSession(async function ({
//   req,
//   res
// }) {
//   const { user } = req.session;

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false
//       }
//     };
//   }
//   //If there's a session, return user as a prop to the Profile component in the page.
//   return {
//     props: { user } // Next.js will pre-render this page on each request using the data returned by getServerSideProps
//   };
// });
// //CAVEAT:
// // Fetching user data in getServerSideProps will block rendering until the request to your <authentication provider> resolves.
// // Ensure your authentication lookup is fast

// =================================================== Next demo Static generation + client side fetching data
// const Profile = () => {
//   // Fetch the user client-side
//   const { user } = useSWR(url)

//   // Server-render loading state
//   if (!user || user.isLoggedIn === false) {
//     return <Layout>Loading...</Layout>
//   }

//   // Once the user request finishes, show the user
//   return (
//     <Layout>
//       <h1>Your Profile</h1>
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </Layout>
//   )
// }

// export default Profile
