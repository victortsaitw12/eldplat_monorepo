import React from "react";
import { TickCircleIcon, WarningSignIcon, BanCircleIcon } from "evergreen-ui";
import { DivSTY } from "./style";

const InvitSatus = ({ value }: { value: string }) => {
  const item = component.get(value);
  return (
    <DivSTY className="invt">
      <span className="invt__icon">{item?.icon || ""}</span>
      <span className="invt__text">{item?.text || "--"}</span>
    </DivSTY>
  );
};

export default InvitSatus;

// ====== Map ====== //
const component = new Map([
  ["01", { icon: <BanCircleIcon color="danger" />, text: "未驗證" }],
  ["02", { icon: <WarningSignIcon color="warning" />, text: "驗證中" }],
  ["03", { icon: <TickCircleIcon color="success" />, text: "已驗證" }]
]);
