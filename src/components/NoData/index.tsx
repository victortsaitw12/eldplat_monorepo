import React from "react";
import { NoDataSTY } from "./style";
import { DocumentIcon } from "evergreen-ui";

export default function NoData({
  className,
  text = "尚無建立資料"
}: {
  className?: string;
  text?: string;
}) {
  return (
    <NoDataSTY className={className}>
      <div className="search">
        <DocumentIcon size={40} color="muted" />
      </div>
      <div className="msg">{text}</div>
    </NoDataSTY>
  );
}
