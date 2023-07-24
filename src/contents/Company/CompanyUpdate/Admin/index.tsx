import React, { useContext } from "react";
import { Avatar, Heading, Pane, Text, Button, RefreshIcon } from "evergreen-ui";

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
        <Pane className="input-line admin">
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
            name="Alan Turing"
            size={40}
          />
          <Text>{companyData.company_owner}(你)</Text>
          <Button
            marginY={8}
            marginRight={12}
            iconBefore={RefreshIcon}
            onClick={(e: any) => {
              e.preventDefault();
            }}
            disabled
          >
            變更
          </Button>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
