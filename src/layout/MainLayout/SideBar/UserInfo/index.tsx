import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  Avatar,
  LogOutIcon,
  LogInIcon,
  Popover,
  Pane,
  PersonIcon,
  LockIcon,
  Menu
} from "evergreen-ui";
//
import { BodySTY } from "./style";

import IconButton from "@components/Button/Secondary/IconLeft";
import { useRouter } from "next/router";

function Index(props: any) {
  const { data: session } = useSession();
  const [isCardShow, setIsCardShow] = React.useState(false);
  const router = useRouter();

  const toggleCardShow = () => setIsCardShow((prev) => !prev);
  const handleSignout = () => signOut();
  const handleChangePassword = () => router.push("/setting/password");

  React.useEffect(() => {
    return () => setIsCardShow(false);
  }, [router]);

  return (
    <BodySTY {...props} className="user" onClick={toggleCardShow}>
      {session && (
        <Popover
          isShown={isCardShow}
          content={
            <Pane
              width={200}
              height={120}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              className="user__popover"
            >
              <Menu>
                <Menu.Item className="item" icon={PersonIcon}>
                  個人設定
                </Menu.Item>
                <Menu.Item
                  className="item"
                  icon={LockIcon}
                  onSelect={handleChangePassword}
                >
                  修改密碼
                </Menu.Item>
                <Menu.Item
                  className="item"
                  icon={LogOutIcon}
                  onSelect={handleSignout}
                >
                  登出
                </Menu.Item>
              </Menu>
            </Pane>
          }
        >
          <button type="button" className="user__info">
            <Avatar src="/image/avatar1.jpg" name="portrait" size={40} />
            <div className="user__info-desp text">
              <h4 className=" text">{session.user?.account_name}</h4>
              <p className=" text">{session.user?.role}</p>
            </div>
          </button>
        </Popover>
      )}
      {!session && (
        <IconButton text="登入" onClick={() => signIn()}>
          <LogInIcon />
        </IconButton>
      )}
    </BodySTY>
  );
}
export default Index;
