import React from "react";
import { BodySTY } from "./style";
interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
  padding?: string;
  gap?: string;
  flexDirection?: "row" | "column";
}

const FlexWrapper = ({
  style,
  children,
  padding = "1rem",
  gap = "10px",
  flexDirection = "row"
}: Props) => {
  return (
    <BodySTY
      style={style}
      padding={padding}
      gap={gap}
      flexDirection={flexDirection}
    >
      {children}
    </BodySTY>
  );
};

export default FlexWrapper;
