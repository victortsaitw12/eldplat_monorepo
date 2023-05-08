import React, { useCallback, useContext, useState } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { handleCountrySwitch } from "@pages/company";

function Contact() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const company_contact_data = C_data.companyData.company_Dt;

  return (
    <BodySTY>
      <Heading is="h4">公司聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">公司電話</Text>
          <Text>{company_contact_data.tel}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司傳真</Text>
          <Text>{company_contact_data.com_Fax}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司地址</Text>
          <Pane className="address">
            <Text>{company_contact_data.user_Address1}</Text>
            <Text>{company_contact_data.user_Address2}</Text>
            <Pane display="flex">
              <Text>{company_contact_data.city}</Text>
              <Text>{company_contact_data.district}</Text>
            </Pane>
            <Pane display="flex">
              <Text>{company_contact_data.zip_Code}</Text>
              <Text>
                {handleCountrySwitch(company_contact_data.country_Code)}
              </Text>
            </Pane>
          </Pane>
        </Pane>

        <Pane className="input-line">
          <Text className="">公司E-Mail</Text>
          <Text>{company_contact_data.com_Email}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">聯絡人姓名</Text>
          <Text>{company_contact_data.contact_Name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">聯絡人電話</Text>
          <Text>{company_contact_data.contact_Tel}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">聯絡人手機</Text>
          <Text>{company_contact_data.contact_Phone}</Text>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Contact;
