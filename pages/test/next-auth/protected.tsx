import React from "react";
import { NextPageWithLayout } from "next";
import { useSession, signIn, signOut, redirect } from "next-auth/react";
import styled from "styled-components";

import { getLayout } from "@layout/QuoteLayout";
import ButtonPrimaryRadius from "@components/Button/PrimaryRadius";

// --- page --- //
const Page: NextPageWithLayout<never> = () => {
  const { data: session, status } = useSession();
  const countdownDuration = 3;

  React.useEffect(() => {
    if (session) return;
    const timeoutID = setTimeout(() => signIn(), 3000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [session]);

  return (
    <ContainerSTY>
      <div style={{ maxHeight: "100px", fontSize: "2rem" }}>Hello</div>
      <LoginStatus />
      {!session ? (
        <>
          <Divider />
          <div> redirect to login in 3 seconds</div>
          <Countdown sec={countdownDuration} />
        </>
      ) : (
        <ButtonPrimaryRadius type="button" onClick={signOut}>
          sign out
        </ButtonPrimaryRadius>
      )}
    </ContainerSTY>
  );
};

// --- components --- //
const LoginStatus = () => {
  const { data: session } = useSession();

  return (
    <ContainerSTY style={{ maxHeight: "100px", fontSize: "2rem" }}>
      <div>{`You are ${session ? "" : "NOT"} signed in`}</div>
      {session ? (
        <>
          <div>
            <small>session.user.name : </small>
            {session?.user?.name || ""}
          </div>
          <div>
            <small>session.user.email : </small>
            {session?.user?.email || ""}
          </div>
        </>
      ) : (
        <></>
      )}
    </ContainerSTY>
  );
};

const Divider = () => {
  return <div style={{ width: "280px", borderBottom: "1px solid gray" }}></div>;
};

const Countdown = ({ sec }: { sec: number }) => {
  const [count, setCount] = React.useState(sec);
  React.useEffect(() => {
    const interval = setInterval(() => {
      count > 0 ? setCount(count - 1) : clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div style={{ maxHeight: "100px", fontSize: "2rem" }}>{count}</div>;
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

Page.getLayout = (page, layoutProps) =>
  getLayout(page, {
    title: "前端開發用: 頁面測試 next-auth 存 session",
    ...layoutProps
  });

export default Page;
