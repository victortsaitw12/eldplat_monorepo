import Link from "next/link";
import { EyeOpenIcon, Heading, Icon, Pane, Text, Spinner } from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";

import { I_driverInfo } from "@contents/driver/driver.typing";

function Basic({
  currentUserInfo,
  isLoading
}: {
  currentUserInfo: I_driverInfo;
  isLoading: boolean;
}) {
  const formatEmail = (email: string) => {
    return (
      <Link className="email" href={`mailto:${email}`}>
        {email}
      </Link>
    );
  };
  const formatPhoneNum = (phoneNumber: string) =>
    phoneNumber.slice(0, 4) + " - " + phoneNumber.slice(4);

  return (
    <BodySTY>
      <Heading is="h4">
        基本資料
        <Icon icon={EyeOpenIcon} size={12} marginLeft="6px" />
      </Heading>
      {!currentUserInfo && isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <div className="form">
        <Pane className="input-line">
          <Text>姓名</Text>
          <Text>{currentUserInfo?.user_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text>E-mail</Text>

          <Text>
            {currentUserInfo && formatEmail(currentUserInfo.user_email)}
          </Text>
        </Pane>
        <Pane className="input-line">
          <Text>手機</Text>
          <Text>
            {currentUserInfo && currentUserInfo.user_phone
              ? formatPhoneNum(currentUserInfo.user_phone)
              : ""}
          </Text>
        </Pane>
      </div>
    </BodySTY>
  );
}

export default Basic;
