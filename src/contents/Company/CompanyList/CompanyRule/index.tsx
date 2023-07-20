import React, { useContext } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function CompanyRule() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  const company_rule_data = companyData?.company_working_hours;

  return (
    <BodySTY>
      <Heading is="h4">公司制度</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">工時設定</Text>
          <Pane>
            {company_rule_data?.map((item) => {
              return (
                <Text key={item.working_hours_code}>
                  {item.working_hours_name}、
                </Text>
              );
            })}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CompanyRule;
