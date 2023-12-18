import React from "react"
import { BodySTY } from "./style"
import { InfoSignIcon } from "evergreen-ui";

interface I_Props {
    message: string;
  }

const NoticeMessage = ({ message }: I_Props) => {
  return (
    <BodySTY>
        <InfoSignIcon size={14} />
        <div className="message">{message}</div>
    </BodySTY>
  )
}

export default NoticeMessage