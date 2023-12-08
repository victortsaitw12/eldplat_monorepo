import { EditIcon } from "evergreen-ui";
import React from "react";
import { DivSTY } from "./style";
import ButtonSet from "@components/ButtonSet";

interface I_Props {
  hasShadow?: boolean;
  children?: any;
}

function ControlBar({ hasShadow = false, children }: I_Props) {
  return (
    <DivSTY className={hasShadow ? "shadow" : undefined}>
      {children ? children : <ButtonSet />}
    </DivSTY>
  );
}

export default ControlBar;
