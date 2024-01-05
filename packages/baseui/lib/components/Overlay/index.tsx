import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import React, { BaseHTMLAttributes, ReactNode, useState } from "react";

interface OverlayProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: ReactNode | null;
  closeable: boolean;
  show: boolean;
  handleShow: (newState: boolean) => void;
}

export default function Overlay({
  children,
  closeable = true,
  show,
  handleShow,
  ...props
}: OverlayProps) {
  const cx = classNames.bind(styles);
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    if (closeable) {
      handleShow !== undefined ? handleShow(false) : setIsShow(false);
    }
  }

  return (
    <>
      <div
        className={cx("overlay", "flex-all-center", {
          show: show !== undefined ? show : isShow,
        })}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    </>
  );
}
