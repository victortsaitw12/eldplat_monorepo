import React, {
  SelectHTMLAttributes,
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant: string;
  children: ReactNode[];
  label?: string;
}

export default function Select({
  variant,
  children,
  label = "noValue",
  ...props
}: SelectProps) {
  const variantObject = {
    default: "default",
    disabled: "disabled",
    readOnly: "read-only",
    error: "error",
  };
  const cx = classNames.bind(styles);
  // 選中選項
  const [selectedOption, setSelectedOption] = useState<ReactNode | null>(null);

  // 展開選項
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = useCallback((option: ReactNode) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  // 點擊選擇框
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
  };
  const selectRef = useRef<HTMLDivElement | null>(null);
  const handleGlobalClick = (event: MouseEvent) => {
    // 檢查點擊的元素是否在下拉框內
    if (
      selectRef.current &&
      !(selectRef.current as any).contains(event.target)
    ) {
      if (!selectedOption) {
        setIsSelected(false);
      }
      setIsOpen(false);
    }
  };

  // 搜尋文字
  const [searchValue, setSearchValue] = useState("");
  const filteredChildren = children.filter(
    (child) =>
      child &&
      child.toString().toLowerCase().includes(searchValue.toLowerCase())
  );
  const [placeholder, setPlaceholder] = useState("Search to Select");

  useEffect(() => {
    // 添加 mousedown 事件監聽器
    document.addEventListener("mousedown", handleGlobalClick);
    setSelectedOption(null);

    // 清理函數，在元件卸載時移除事件監聽器
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    setPlaceholder("Search to Select");
    if (variant === "reset-option" || variant === "disabled" || variant === "reset-option") {
      setIsSelected(false);
      setSelectedOption(null);
      setSearchValue("");
    }
  }, [variant]);

  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick);
    setSearchValue("");
    return () => {
      document.removeEventListener("mousedown", handleGlobalClick);
    };
  }, [selectedOption]);

  useEffect(() => {
    if (selectRef.current) {
      const selectLength = selectRef.current?.clientWidth;
      if (selectLength) {
        document.documentElement.style.setProperty(
          "--select-width",
          `${selectLength}px`
        );
      }
    }
  }, [label]);

  return (
    <div className={cx("container")}>
      <div className={cx("select", { selected: isSelected })} ref={selectRef}>
        <div
          className={cx(
            "selected-option",
            {
              [`${variantObject[variant as keyof typeof variantObject]}`]: `${
                variantObject[variant as keyof typeof variantObject]
              }`,
            },
            { selected: isSelected }
          )}
          onClick={() => {
            if (variant !== "disabled") {
              if (variant !== "readOnly") {
                setIsOpen(!isOpen);
              }
              handleClick();
            }
          }}
        >
          {variant !== "search" ? (
            <>
              {selectedOption ? (
                <>
                  <div className={cx("selectedOption")}>{selectedOption}</div>
                  {label !== "noValue" && label !== "" && (
                    <>
                      <div className={cx("label")}>{label}</div>
                    </>
                  )}
                </>
              ) : label !== "noValue" && label !== "" ? (
                <div className={cx("label")}>{label}</div>
              ) : (
                <div className={cx("selectedOption")}>請選擇......</div>
              )}
              {isSelected && (
                <div style={{ visibility: "hidden", paddingRight: "20px " }}>
                  {label}
                </div>
              )}
            </>
          ) : (
            <>
              {selectedOption ? (
                <>
                  <div
                    onClick={() => {
                      if (typeof selectedOption === "string") {
                        setPlaceholder(selectedOption);
                      }
                      setSelectedOption(null);
                    }}
                  >
                    {label !== "noValue" && label !== "" && (
                      <div className={cx("label")}>{label}</div>
                    )}
                    <input
                      type="text"
                      className={cx("input","search-input", "selectedOption")}
                      placeholder={placeholder}
                      value={selectedOption.toString()}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {label !== "noValue" && label !== "" && (
                    <div className={cx("label")}>{label}</div>
                  )}
                  <input
                    type="text"
                    className={cx("search-input")}
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </>
              )}
            </>
          )}
          <div className={cx("icon")}>
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="-1 0 18 18"
              data-testid="ArrowDropDownIcon"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className={cx("options")}>
            {filteredChildren.map((child, index) => (
              <div
                key={index + 1}
                id={"option_" + (index + 1)}
                className={cx("option")}
                onClick={async () => await handleSelect(child)}
              >
                <span>{child}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
