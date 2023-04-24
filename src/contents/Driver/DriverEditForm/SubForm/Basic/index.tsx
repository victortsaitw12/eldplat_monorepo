import { EyeOpenIcon, Heading, Icon, Pane, Text } from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";

function Basic({ currentUserInfo }) {
  return (
    <BodySTY>
      <Heading is="h4">
        基本資料
        <Icon icon={EyeOpenIcon} size={12} marginLeft="6px" />
      </Heading>

      <form>
        <Pane className="input-line">
          <Text>姓名</Text>
          <Text>{currentUserInfo ? currentUserInfo.user_Name : ""}</Text>
        </Pane>
        <Pane className="input-line">
          <Text>E-mail</Text>
          <Text>{currentUserInfo ? currentUserInfo.user_Email : ""}</Text>
        </Pane>
        <Pane className="input-line">
          <Text>手機</Text>
          <Text>
            {currentUserInfo && currentUserInfo.user_phone
              ? currentUserInfo.user_phone
              : "---"}
          </Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
