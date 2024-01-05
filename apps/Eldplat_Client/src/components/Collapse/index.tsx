import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";
import { ChevronDownIcon, ChevronUpIcon, Text } from "evergreen-ui";
interface I_Props {
  opened?: boolean;
  color?: string;
  title?: string | React.ReactNode;
  titleChildren?: React.ReactNode;
  viewOnly?: boolean;
  children: React.ReactNode | React.JSX.Element;
  OnToggle?: (isOpen: boolean) => void;
  iconPosition?: string;
}

const Collapse = ({
  opened = false,
  color = "#E2ECF7",
  title = "打開收合",
  titleChildren,
  viewOnly = false,
  children = <p>內容</p>,
  OnToggle = (isOpen) => {
    return isOpen;
  },
  iconPosition = "icon_end"
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState(opened);
  const titleOnClick = () => {
    if (viewOnly) {
      return false;
    }
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    OnToggle && OnToggle(isOpen);
  }, [isOpen]);
  return (
    <BodySTY color={color} className="collapse">
      <div
        onClick={(e) => {
          e.stopPropagation();
          const target = e.currentTarget as unknown as HTMLTextAreaElement;

          if (
            typeof target.className == "string" &&
            (target.className?.indexOf("collapse_title") >= 0 ||
              target.className?.indexOf("title_text") >= 0)
          ) {
            titleOnClick();
          }
        }}
        className={cx("collapse_title", iconPosition)}
      >
        <>
          {titleChildren ? (
            titleChildren
          ) : (
            <Text className="title_text">{title}</Text>
          )}
          {!viewOnly ? (
            isOpen ? (
              <ChevronUpIcon onClick={titleOnClick} />
            ) : (
              <ChevronDownIcon onClick={titleOnClick} />
            )
          ) : (
            <></>
          )}
        </>
      </div>
      <div className={cx("collapse_content", { show: isOpen })}>{children}</div>
    </BodySTY>
  );
};

export default Collapse;
