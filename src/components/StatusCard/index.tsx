import React from "react";
import { DivSTY } from "./style";

const StatusCard = ({ children }: { children: React.ReactNode }) => {
  return <DivSTY>{children}</DivSTY>;
};

export default StatusCard;
