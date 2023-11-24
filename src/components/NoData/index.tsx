import React from "react";
import { NoDataSTY } from "./style";
import { DocumentIcon } from "evergreen-ui";

export default function NoData() {
  return (
    <NoDataSTY>
      <div className="search">
        <DocumentIcon size={40} color="muted" />
      </div>
      <div className="msg">尚無建立資料</div>
    </NoDataSTY>
  );
}
