import React from "react"
import { BodySTY } from "./style";

interface I_Porps {
    text: string,
    style?: React.CSSProperties;
}
const LabelTag = ({ text, style }: I_Porps) => {
    return (
        <BodySTY
            style={style}
            className="vendor-label"
        >
            {text}
        </BodySTY>
    )
}
export default LabelTag;