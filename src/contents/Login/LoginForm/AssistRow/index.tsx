import React from "react";
import { AssistRowSTY } from "./style";

import Checkbox from "@components/CheckBox";

function AssistRow() {
  return (
    <AssistRowSTY className="asstRow">
      <div className="asstRow__storeAcct">
        <Checkbox />
        記住帳號
      </div>
      <div className="asstRow__forgetPw">
        <a href="/forgot-password">忘記密碼</a>
      </div>
    </AssistRowSTY>
  );
}

export default AssistRow;
