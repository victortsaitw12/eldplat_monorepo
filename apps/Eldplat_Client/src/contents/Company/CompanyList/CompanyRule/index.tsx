import React, { useContext } from "react";
import { Checkbox, Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

function CompanyRule() {
  const { companyData, companyDDL } =
    useContext<I_Company_Context>(CompanyContext);
  const companyRuleDDL = companyDDL?.working_hours_options;
  const checkedHours = companyData?.company_working_hours;
  console.log("checkedHours", checkedHours);

  return (
    <BodySTY>
      <Heading is="h4">排班設定</Heading>
      <form>
        <Pane className="input-line">
          {/* <Text className="">工時設定</Text> */}
          <Pane className="hours-checkbox">
            {companyRuleDDL?.map(
              (item: { option_name: string; option_code: string }) => {
                const checked = checkedHours.some(
                  (v) => v.working_hours_code === item.option_code
                );
                return (
                  <>
                    <Checkbox
                      label={item.option_name}
                      checked={checked}
                      marginY={0}
                      // onChange={e => setChecked(e.target.checked)}
                      disabled
                    />
                  </>
                  // <Text key={item.working_hours_code}>
                  //   {item.working_hours_name}、
                  // </Text>
                );
              }
            )}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default CompanyRule;
