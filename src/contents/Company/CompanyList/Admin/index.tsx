import React, { useCallback, useContext, useState } from "react";
import { Avatar, Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function CountrySet() {
  const C_data = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">最高管理員</Heading>
      <form>
        <Pane className="input-line">
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={40}
          />
          <Text>{C_data.companyData.company.owner}(你)</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
