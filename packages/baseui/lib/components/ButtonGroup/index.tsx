import React, { BaseHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantObject;
  styleName: string;
  children: ReactNode;
}

const variantObject = {
  default: "horizontal",
  horizontal: "horizontal",
  vertical: "vertical",
};

export default function ButtonGroup({
  variant = "horizontal",
  styleName,
  children,
  ...props
}: ButtonGroupProps) {
  const cx = classNames.bind(styles);

  return (
    <div
      {...props}
      className={cx("btn-group", styleName?.split(" "), {
        [`${variantObject[variant as keyof typeof variantObject]}`]: `btn-${
          variantObject[variant as keyof typeof variantObject]
        }`,
      })}
    >
      {children}
    </div>
  );
}
