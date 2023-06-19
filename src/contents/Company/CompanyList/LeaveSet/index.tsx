import React, { useContext } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function CountrySet() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const company_leave_data = companyData.company_leave;

  return (
    <BodySTY>
      <Heading is="h4">假別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">排休種類</Text>
          <Pane>
            {company_leave_data?.map((item) => {
              return <Text key={item.leave_code}>{item.leave_name}、</Text>;
            })}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CountrySet;
