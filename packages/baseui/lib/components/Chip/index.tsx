import React, { BaseHTMLAttributes, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface ChipProps extends BaseHTMLAttributes<HTMLBaseElement> {
  variant: string;
  styleName: string;
  children: ReactNode;
}

export default function Chip({
  variant,
  styleName,
  children,
  ...props
}: ChipProps) {
  const variantObject = {
    default: "primary",
    outline: "outline",
    text: "text",
    link: "link",
    transparent: "transparent",
  };
  const cx = classNames.bind(styles);

  return (
    <span
      {...props}
      className={cx("chip", styleName?.split(" "), {
        [`${variantObject[variant as keyof typeof variantObject]}`]:
          variantObject[variant as keyof typeof variantObject],
      })}
    >
      {children}
    </span>
  );
}
