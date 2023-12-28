/* eslint-disable react/display-name */
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

//
import Header from "./Header";
import SideBar from "./SideBar";
import { BodySTY, ContainerSTY } from "./style";
//

//
const MainLayout: FC<{
  children: ReactNode;
  layoutProps: any;
}> = ({ children, layoutProps }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  React.useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  return (
    <BodySTY showMenu={showMenu}>
      <Head>
        <title>管理者頁</title>
        <meta property="og:title" content="管理者頁" />
      </Head>
      <SideBar isLoading={loading} onToggleMenu={handleToggleMenu} />
      <ContainerSTY>
        <Header layoutProps={{ ...layoutProps }} />
        <div className="content">{children}</div>
      </ContainerSTY>
    </BodySTY>
  );
};

export const getLayout = (page: ReactNode, layoutProps: any) => (
  <MainLayout layoutProps={layoutProps}>{page}</MainLayout>
);
