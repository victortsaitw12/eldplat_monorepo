import React from "react";
import { BodySTY } from "./style";
import cx from "classnames";
import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";
interface I_Props {
    color?: string;
    title: string;
    viewOnly?: boolean;
    children: React.ReactNode;
    OnToggle?: (isOpen: boolean) => void;
}

const Collapse = ({
    color = "#E2ECF7",
    title = "打開收合",
    viewOnly = false,
    children = <p>內容</p>,
    OnToggle = (isOpen) => { console.log("isOpen", isOpen) },
}: I_Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const titleOnClick = () => {
        if (viewOnly) {
            return false;
        }
        setIsOpen(!isOpen);
    }
    React.useEffect(() => {
        OnToggle && OnToggle(isOpen)
    }, [isOpen])
    return (
        <BodySTY color={color} className="collapse">
            <div
                className="collapse_title"
                onClick={titleOnClick}
            >
                {title}
                {!viewOnly ?
                    isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />
                    : <></>}
            </div>
            <div className={cx("collapse_content", { show: isOpen })}>
                {children}
            </div>
        </BodySTY>
    )
}
export default Collapse;