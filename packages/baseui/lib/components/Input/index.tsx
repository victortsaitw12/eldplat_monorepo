import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styleName: string;
  value: string;
  handleInput:
    | undefined
    | ((e: ChangeEvent<HTMLInputElement>) => void)
    | (() => void);
  error: boolean;
  hint: string;
  label: string;
  clearable: boolean;
  clearableIcon: string | ReactNode;
  canPreview: boolean;
  previewIcon: string | ReactNode;
  type: string;
}

export default function Input({
  styleName,
  value,
  handleInput = undefined,
  label,
  error,
  hint,
  clearable,
  clearableIcon = "X",
  canPreview, // for type password
  previewIcon = "O",
  type,
  ...props
}: InputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const cx = classNames.bind(styles);

  function clearInput() {
    !value?.length && setInputValue("");
  }
  return (
    <>
      {label && (
        <label className={cx("mb-1", "d-block", "font-bold")}>{label}</label>
      )}
      <div
        className={cx("input-container", "rounded", styleName?.split(" "), {
          "bd-danger": error,
          multiple: canPreview || clearable,
        })}
      >
        <input
          {...props}
          className={cx("input")}
          value={value?.length > 0 ? value : inputValue}
          onChange={handleInput ?? ((e) => setInputValue(e.target.value))}
          type={type === "password" && isPreview ? "text" : type}
        />
        {clearable && (value?.length > 0 || inputValue?.length > 0) && (
          <span
            className={cx("text-sm", "clearable-icon", "flex-all-center")}
            onClick={clearInput}
          >
            {clearableIcon}
          </span>
        )}
        {canPreview && (
          <span
            className={cx("text-sm", "preview-icon", "flex-all-center")}
            onClick={() => setIsPreview((prev) => !prev)}
          >
            {previewIcon}
          </span>
        )}
      </div>
      {hint && (
        <span className={cx("text-sm", "text-gray", { "text-danger": error })}>
          {hint}
        </span>
      )}
    </>
  );
}
