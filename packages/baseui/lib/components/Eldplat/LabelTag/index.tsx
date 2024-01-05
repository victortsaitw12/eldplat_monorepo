import React from "react"
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Button from "../../Button";
interface I_Porps {
    text: string,
    style?: React.CSSProperties;
}
const LabelTag = ({ text, style }: I_Porps) => {
    const cx = classNames.bind(styles);

    return (
        <span
            style={style}
            className={cx("vendor-label")}
        >
            <Button>test</Button>
            {text}
        </span>
    )
}
export default LabelTag;