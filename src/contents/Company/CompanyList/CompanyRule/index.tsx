import React, { useContext } from "react";
import { Checkbox, Heading, Pane, Text } from "evergreen-ui";

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
      <Heading is="h4">排班設定</Heading>
      <form>
        <Pane className="input-line">
          {/* <Text className="">工時設定</Text> */}
          <Pane className="hours-checkbox">
            {company_rule_data?.map((item) => {
              return (
                <>
                  <Checkbox
                    label={item.working_hours_name}
                    checked={true}
                    marginY={0}
                    // onChange={e => setChecked(e.target.checked)}
                    disabled
                  />
                </>
                // <Text key={item.working_hours_code}>
                //   {item.working_hours_name}、
                // </Text>
              );
            })}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CompanyRule;
