import React from "react";
import { NoResultSTY } from "./style";
import { SearchIcon } from "evergreen-ui";

export default function NoResult() {
  return (
    <NoResultSTY>
      <div className="search">
        <SearchIcon size={40} color="muted" />
      </div>
      <div className="msg">無搜尋結果</div>
    </NoResultSTY>
  );
}
