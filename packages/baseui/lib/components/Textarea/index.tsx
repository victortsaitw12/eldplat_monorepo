import React, {
  ChangeEvent,
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
} from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { useState, useRef } from "react";

interface TextareaProp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  styleName: string;
  value: string;
  error: boolean;
  hint: string;
  label: string;
  clearable: boolean;
  clearableIcon: string | ReactNode;
  description: string;
  handleInput?:
    | undefined
    | (() => void)
    | ((e: ChangeEvent<HTMLTextAreaElement>) => void);
  resizable: boolean;
  showCount: boolean;
  maxLength: number;
  ref?: Ref<HTMLTextAreaElement>;
}

export default function Textarea({
  styleName,
  value,
  error,
  hint,
  label,
  clearable,
  clearableIcon = "X",
  description,
  handleInput = undefined,
  resizable = true,
  showCount,
  maxLength,
  ...props
}: TextareaProp) {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState<number>(0);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const cx = classNames.bind(styles);

  function clearInput() {
    !value?.length && setInputValue("");
  }

  function countData() {
    const count = contentRef.current?.value;
    setCount(count ? count.length : 0);
  }

  function onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    handleInput ? handleInput(e) : setInputValue(e?.target?.value);
    countData();
  }

  return (
    <div className={cx("textarea-wrapper")}>
      {label && (
        <label className={cx("mb-1", "d-block", "font-bold")}>{label}</label>
      )}
      {description && <span className={cx("text-sm")}>{description}</span>}
      <textarea
        className={cx("textarea", "bd-radius-3", styleName?.split(" "), {
          "bd-danger": error,
          "resize-disabled": !resizable,
          clearable: clearable,
        })}
        value={value?.length > 0 ? value : inputValue}
        onChange={onInputChange}
        maxLength={maxLength}
        ref={contentRef}
        {...props}
      />
      {hint && (
        <span className={cx("text-sm", "text-gray", { "text-danger": error })}>
          {hint}
        </span>
      )}
      {clearable && (value?.length > 0 || inputValue?.length > 0) && (
        <span className={cx("text-sm", "clearable-icon")} onClick={clearInput}>
          {clearableIcon}
        </span>
      )}
      {showCount && (
        <span className={cx("data-count")}>
          {count}
          {maxLength !== Infinity && maxLength > 0 && `/${maxLength}`}
        </span>
      )}
    </div>
  );
}
