import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, LogOutIcon, LogInIcon } from "evergreen-ui";
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
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  console.log("🍅 session", session);
  return (
    <BodySTY {...props}>
      {session && (
        <div className="user-container">
          <div className="user-info">
            <Avatar src="/image/avatar1.jpg" name="portrait" size={44} />
            <div className="desp">
              <h4>{session.user.username}</h4>
              <p>{session.user.role}</p>
            </div>
          </div>
        </div>
      )}
      {session ? (
        <IconButton text="登出" onClick={signOut}>
          <LogOutIcon />
        </IconButton>
      ) : (
        <IconButton text="登入" onClick={signIn}>
          <LogInIcon />
        </IconButton>
      )}
    </BodySTY>
  );
}
export default Index;
