import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import cx from "classnames";
//
import { BodySTY } from "./style";

export enum MessageStatus {
  SUCCESS,
  FAIL
}

interface NotificationProps {
  status: MessageStatus;
  onConfirm: (event: any) => void;
}
function Notification(props: NotificationProps) {
  console.log("MessageStatus", props.status);
  return (
    <BodySTY isSuccess={props.status === MessageStatus.SUCCESS}>
      <div className="position-ref">
        <div className="container">
          <div className="icon-background">
            {props.status === MessageStatus.SUCCESS ? (
              <span className={cx("material-icons", "icon-picture")}>done</span>
            ) : (
              <span className={cx("material-icons", "icon-picture")}>
                close
              </span>
            )}
          </div>
          <div className="notification-message">
            {props.status === MessageStatus.SUCCESS ? "新增成功" : "新增失敗"}
          </div>
          <button className="close-button" onClick={props.onConfirm}>
            <span>X</span>
          </button>
        </div>
      </div>
    </BodySTY>
  );
}

function NotificationModal(props: NotificationProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#notification-root");
    setMounted(true);
  }, []);
  return mounted && ref.current
    ? createPortal(
        <Notification status={props.status} onConfirm={props.onConfirm} />,
        ref.current
      )
    : null;
}

export default NotificationModal;
