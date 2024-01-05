import React from "react";
import Link from "next/link";
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
        <Link href="/forget-password">忘記密碼</Link>
      </div>
    </AssistRowSTY>
  );
}

export default AssistRow;
