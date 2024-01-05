import React from "react"
import { BodySTY } from "./style"
import { InfoSignIcon } from "evergreen-ui";

interface I_Props {
    message: string;
    size?: number;
  }

const NoticeMessage = ({ message, size=14 }: I_Props) => {
  return (
    <BodySTY>
        <InfoSignIcon size={size} />
        <div className="message">{message}</div>
    </BodySTY>
  )
}

export default NoticeMessage