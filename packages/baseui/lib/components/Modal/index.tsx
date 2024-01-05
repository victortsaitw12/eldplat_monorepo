import React, { BaseHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { ReactNode } from "react";
import Button from "../Button";

interface ModalProps extends BaseHTMLAttributes<HTMLDivElement> {
  styleName: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  styleName,
  children,
  onClose,
  ...props
}: ModalProps) {
  const cx = classNames.bind(styles);

  return (
    <div
      {...props}
      className={cx("modal", "bd-radius-10", styleName?.split(" "))}
    >
      <div className={cx("close-btn-wrapper")}>
        <Button
          variant="text"
          styleName="close-btn  btn-secondary"
          onClick={onClose}
        >
          X
        </Button>
      </div>
      {children}
    </div>
  );
}
