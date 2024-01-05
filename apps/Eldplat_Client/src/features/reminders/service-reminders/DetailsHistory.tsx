import React from "react";

import { TextInputField, Checkbox, Select, SelectField } from "evergreen-ui";

import { DetailsHistorySTY } from "./style";

function DetailsHistory() {
  const [checked, setChecked] = React.useState<{ [key: number]: boolean }>({});

  return (
    <DetailsHistorySTY>
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
    </DetailsHistorySTY>
  );
}

export default DetailsHistory;
