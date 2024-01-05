import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantObject;
  styleName?: string;
  children: ReactNode;
  tooltip?: string;
  tooltipDirect?: string;
}

const variantObject = {
  default: "btn-primary",
  outline: "btn-outline",
  outlineHover: "btn-outline-hover",
  text: "btn-text",
  link: "btn-link",
  ghost: "btn-ghost",
};

export default function Button({
  variant = "default",
  styleName = "",
  children,
  tooltip = "",
  tooltipDirect = "",
  ...props
}: ButtonProps) {
  const cx = classNames.bind(styles);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    console.log(children)
    if (buttonRef.current) {
      const buttonLength = buttonRef.current?.clientWidth;
      if (buttonLength) {
        console.log(buttonLength);
        document.documentElement.style.setProperty(
          "--button-width",
          `${buttonLength}px`
        );
      }
    }
  }, [children]);

  return (
    <button
      {...props}
      button-title={tooltip && tooltip.trim() !== "" ? tooltip : null}
      className={cx(
        "btn",
        styleName?.split(" "),
        {
          [`${variantObject[variant as keyof typeof variantObject]}`]: `${
            variantObject[variant as keyof typeof variantObject]
          }`,
        },
        {
          tooltipDirect,
        },
        { tooltip: tooltipDirect ? true : false }
      )}
      ref={buttonRef}
    >
      {children}
    </button>
  );
}
