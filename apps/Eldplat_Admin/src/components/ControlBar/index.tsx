import React from "react";
import { DivSTY } from "./style";

interface I_Props {
  hasShadow?: boolean;
  flexEnd?: boolean;
  children?: any;
}

function ControlBar({ hasShadow = false, flexEnd = false, children }: I_Props) {
  return (
    <DivSTY
      className={`
      ${hasShadow ? "shadow margin-bottom" : ""}
      ${flexEnd ? "flex-end" : ""}
      `}
    >
      {children}
    </DivSTY>
  );
}

export default ControlBar;
