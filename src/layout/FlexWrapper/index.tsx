import React from "react";
import { BodySTY } from "./style";
import { Pane } from "evergreen-ui";
interface Props {
    // column: number,
    style: any;
    children: React.ReactNode;
    padding?: string;
    gap?: string;
    flexDirection?: string;
}

const FlexWrapper = ({
    style,
    children,
    padding = "1rem",
    gap = "10px",
    flexDirection = "row"
}: Props) => {
    // console.log("🎶🎶🎶🎶🎶🎶children number:", children)
    // console.log(style)
    return (
        <BodySTY padding={padding} gap={gap} flexDirection={flexDirection}>
            {children}
        </BodySTY>
    );
}

export default FlexWrapper;
