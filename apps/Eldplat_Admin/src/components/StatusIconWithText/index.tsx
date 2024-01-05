import { StyleIdIcon } from "./style";
import React from "react";
function StatusIcon({
  status,
  children
}: {
  status: string;
  children: React.ReactNode;
}) {
  return (
    <StyleIdIcon status={status}>
      <div className="icon-dot" />
      {children}
    </StyleIdIcon>
  );
}
export default StatusIcon;
