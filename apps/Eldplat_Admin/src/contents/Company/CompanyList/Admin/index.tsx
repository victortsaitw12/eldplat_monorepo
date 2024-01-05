import React, { useContext } from "react";
import { Avatar, Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function CountrySet() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">最高管理員</Heading>
      <form>
        <Pane className="input-line">
          <Avatar src="/image/avatar1.jpg" name="portrait" size={40} />
          <Text>{companyData?.administrator_name}(你)</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
