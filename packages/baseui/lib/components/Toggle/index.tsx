import React, { BaseHTMLAttributes, useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ToggleProps extends BaseHTMLAttributes<HTMLElement> {
  styleName: string;
  children: ReactNode;
  disabled: boolean;
  labelBefore: string;
  labelAfter: string;
  oneSideLabel: Array<string>;
  isOn: boolean;
  onToggle: (newState: boolean) => void;
}

export default function Toggle({
  styleName,
  children,
  disabled = false,
  labelBefore,
  labelAfter,
  oneSideLabel,
  isOn,
  onToggle,
  ...props
}: ToggleProps) {
  const cx = classNames.bind(styles);
  const [toggleIsOn, setToggleIsOn] = useState(false);

  function toggleOnChange() {
    isOn !== undefined ? onToggle(!isOn) : setToggleIsOn((prev) => !prev);
  }

  return (
    <div
      {...props}
      className={cx(
        "toggle-container",
        "flex-all-center",
        styleName?.split(" ")
      )}
    >
      {labelBefore && <span>{labelBefore}</span>}
      <span
        className={cx(
          "toggle",
          { checked: isOn || toggleIsOn },
          { disabled: disabled }
        )}
        onClick={!disabled ? toggleOnChange : undefined}
      >
        {children ?? <span className={cx("toggle-item")} />}
      </span>
      {labelAfter && <span>{labelAfter}</span>}
      {oneSideLabel?.length > 0 && (
        <span>{isOn ?? toggleIsOn ? oneSideLabel[1] : oneSideLabel[0]}</span>
      )}
    </div>
  );
}
