import React, { LiHTMLAttributes, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface ListProps extends LiHTMLAttributes<HTMLLIElement> {
  variant: string;
  styleName: string;
  children: ReactNode[];
}

export default function List({
  variant,
  styleName,
  children,
  ...props
}: ListProps) {
  const cx = classNames.bind(styles);
  const listObject = {
    bordered: "list-bordered",
    borderless: "list-borderless",
  };

  return (
    <ul
      className={cx('unorder-list', {
        [`${listObject[variant as keyof typeof listObject]}`]: `list-${
          listObject[variant as keyof typeof listObject]
        }`,
      })}
    >
      {Array.isArray(children) &&
        children?.length > 0 &&
        children.map((child, index) => (
          <li
            id={"listId_" + index}
            className={cx("list-group-item", styleName?.split(" "))}
            {...props}
          >
            {child}
          </li>
        ))}
    </ul>
  );
}
