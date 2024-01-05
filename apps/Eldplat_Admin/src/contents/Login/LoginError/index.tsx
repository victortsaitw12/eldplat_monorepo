import React from "react";
import { BodySTY } from "./style";

interface PropsType {
  message: string | null;
  visible: boolean;
}
function LoginError(props: PropsType) {
  const { visible, message } = props;
  return (
    <BodySTY visible={visible}>
      <div className="container">
        <span className="material-icons">warning</span>
        <p className="err-msg">{message}</p>
      </div>
    </BodySTY>
  );
}

export default LoginError;
