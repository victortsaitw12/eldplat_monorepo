import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";
import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";
interface I_Props {
  opened?: boolean;
  color?: string;
  title?: string;
  titleChildren?: React.ReactNode;
  viewOnly?: boolean;
  children: React.ReactNode;
  OnToggle?: (isOpen: boolean) => void;
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
  }
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
      <div className="collapse_title">
        <>
          {titleChildren ? titleChildren : title}
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
