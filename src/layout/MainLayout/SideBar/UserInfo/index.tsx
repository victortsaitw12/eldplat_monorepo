import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Avatar,
  LogOutIcon,
  LogInIcon,
  Popover,
  Pane,
  Group,
  Button,
  PersonIcon,
  LockIcon,
  Menu
} from "evergreen-ui";
//
import { BodySTY } from "./style";

import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import LabelButton from "@components/Button/Primary/Label";
import IconButton from "@components/Button/Secondary/IconLeft";

function Index(props: any) {
  const { data: session } = useSession();
  const [isCardShow, setIsCardShow] = React.useState(false);
  // const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const toggleCardShow = () => {
    setIsCardShow((prev) => !prev);
  };
  const handleSignout = () => {
    signOut();
  };

  return (
    <BodySTY {...props} className="user" onClick={toggleCardShow}>
      {session && (
        <Popover
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
                <Menu.Item className="item" icon={LockIcon}>
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
              <h4 className=" text">{session.user?.username}</h4>
              <p className=" text">{session.user?.role}</p>
            </div>
          </button>
        </Popover>
      )}

      {/*
      // TODO to be removed after feat: Log in/ Log out
       {session ? (
        <IconButton text="登出" onClick={signOut}>
          <LogOutIcon />
        </IconButton>
      ) : (
        <IconButton text="登入" onClick={signIn}>
          <LogInIcon />
        </IconButton>
      )} */}
    </BodySTY>
  );
}
export default Index;
