import withSession from "../lib/session";
import Layout from "@layout/Layout";

export const getServerSideProps = withSession(async function ({ req, res }) {
  const { user } = req.session;

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }
  //If there's a session, return user as a prop to the Profile component in the page.
  return {
    props: { user } // Next.js will pre-render this page on each request using the data returned by getServerSideProps
  };
});
//CAVEAT:
// Fetching user data in getServerSideProps will block rendering until the request to your <authentication provider> resolves.
// Ensure your authentication lookup is fast

const Profile = ({ user }) => {
  // Show the user. No loading state is required
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
};

export default Profile;

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
