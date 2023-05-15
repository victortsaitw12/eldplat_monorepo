import React, { useContext } from "react";
import { Heading, Pane, Paragraph, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { handleCountrySwitch } from "@pages/company";

function Contact() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);

  return (
    <BodySTY>
      <Heading is="h4">公司聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">公司電話</Text>
          <Text>{companyData.company_tel}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司傳真</Text>
          <Text>{companyData.company_fax}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司地址</Text>
          <Pane className="address">
            <Text>{companyData.address1}</Text>
            <Text>{companyData.address2}</Text>
            <Pane display="flex">
              <Text>{companyData.company_city}</Text>
              <Text>{companyData.company_area}</Text>
            </Pane>
            <Pane display="flex">
              <Text>{companyData.company_district_code}</Text>
              <Text>{handleCountrySwitch(companyData.company_country)}</Text>
            </Pane>
          </Pane>
        </Pane>

        <Pane className="input-line">
          <Text className="">公司E-Mail</Text>
          <Text>{companyData.company_email}</Text>
        </Pane>
        {companyData?.company_contact?.map((v) => {
          if (v.contact_sort === "1") {
            return (
              <>
                <Pane key={v.contact_name} className="input-line">
                  <Text className="">主要聯絡人</Text>
                  <Text>{v.contact_name}</Text>
                </Pane>
                <Pane className="input-line">
                  <Text className="">主要聯絡人電話</Text>
                  <Pane className="contact-phone-detail">
                    <Text>市話 {v.contact_tel}</Text>
                    <Text>手機 {v.contact_phone}</Text>
                  </Pane>
                </Pane>
                <Pane className="input-line">
                  <Text className="">主要聯絡人手機</Text>
                  <Text>{v.contact_phone}</Text>
                </Pane>
              </>
            );
          }
        })}
      </form>
    </BodySTY>
  );
}

export default Contact;
