import { GetServerSideProps, NextPageWithLayout } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

import { getLayout } from "@layout/QuoteLayout";
import ButtonPrimaryRadius from "@components/Button/PrimaryRadius";

const ProfilePage: NextPageWithLayout<never> = ({ user }) => {
  const { data: session } = useSession();

  // Show the user. No loading state is required
  return <LoginBtn />;
};

const LoginBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          Signed in as {session.user?.name}
        </div>
        <ButtonPrimaryRadius onClick={() => signOut()}>
          Sign out
        </ButtonPrimaryRadius>
      </>
    );
  }
  return (
    <>
      <div style={{ marginBottom: "20px" }}>Not signed in</div>
      <ButtonPrimaryRadius onClick={() => signIn()}>
        Sign in
      </ButtonPrimaryRadius>
    </>
  );
};
// TODO: 10/20 stops here....
export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query, req } = context;
  const { user } = req.session;

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }
  return {
    props: { user }
  };
};

ProfilePage.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理", ...layoutProps });

export default ProfilePage;

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
