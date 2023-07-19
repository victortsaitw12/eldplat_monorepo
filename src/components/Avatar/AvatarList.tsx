import React from "react";
import { Avatar } from "evergreen-ui";
import { v4 as uuid } from "uuid";
//
import { BodySTY } from "./style";
//
function AvatarList({ userList }: { userList: string[] }) {
  return (
    <BodySTY>
      {userList.reduce((acc: any, item: string, index) => {
        if (index < 4) {
          acc.push(
            <Avatar
              className="avatar"
              key={uuid()}
              name={item}
              size={32}
              marginLeft={-12}
            />
          );
        } else if (index === userList.length - 1) {
          const remainUserCount = userList.length - 3;
          acc[3] = (
            <Avatar
              className="avatar"
              key={uuid()}
              name={`+ ${remainUserCount}`}
              size={32}
              marginLeft={-12}
            />
          );
        }
        return acc;
      }, [])}
    </BodySTY>
  );
}
export default AvatarList;
