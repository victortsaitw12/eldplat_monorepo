import React, { BaseHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface DividerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantObject;
  styleName: string;
  width: string;
  height: string;
}

const variantObject = {
  default: "horizontal",
  horizontal: "horizontal",
  vertical: "vertical",
};

export default function Divider({
  variant = "default",
  styleName,
  width,
  height,
  ...props
}: DividerProps) {
  const cx = classNames.bind(styles);

  return (
    <hr
      {...props}
      className={cx("divider", styleName?.split(" "), {
        [`${variantObject[variant as keyof typeof variantObject]}`]: `${
          variantObject[variant as keyof typeof variantObject]
        }`,
      })}
      style={{ width: width, height: height }}
    ></hr>
  );
}
