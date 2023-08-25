import React, { useContext, useEffect, useState } from "react";
import { Heading, Pane, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

function Contact() {
  const { companyData } = useContext<I_Company_Context>(CompanyContext);
  // const { handleCountrySwitch, handleStateSwitch, handleCitySwitch } =
  //   useContext<I_Region_Context>(RegionContext);
  const { getRegionsData } = useContext<I_Region_Context>(RegionContext);
  const [ddlData, setDdlData] = useState<any>(null);
  console.log("🈶companyData", companyData);
  return (
    <BodySTY>
      <Heading is="h4">公司聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">公司電話</Text>
          <Text>{companyData?.company_tel}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司傳真</Text>
          <Text>{companyData?.company_fax}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司地址</Text>

          <Pane className="address">
            <Pane className="address__value">
              <Text>{companyData?.company_district_code}</Text>{" "}
              <Text>{companyData?.country_name}</Text>
            </Pane>
            <Pane className="address__value">
              <Text className="address__value">{companyData?.city_name}</Text>
            </Pane>
            <Text className="address__value">
              {companyData?.address1.concat(companyData?.address2)}
            </Text>
          </Pane>
        </Pane>

        <Pane className="input-line">
          <Text className="">公司E-Mail</Text>
          <Text>{companyData?.company_email}</Text>
        </Pane>
        {companyData?.company_contact?.map((v, idx) => {
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
                  <Text className="">主要聯絡人信箱</Text>
                  <Text>{v.contact_email}</Text>
                </Pane>
              </>
            );
          } else {
            return (
              <>
                <Pane key={v.contact_name} className="input-line">
                  <Text className="">聯絡人{`${idx + 1}`}</Text>
                  <Text>{v.contact_name}</Text>
                </Pane>
                <Pane className="input-line">
                  <Text className="">聯絡人{`${idx + 1}`}電話</Text>
                  <Pane className="contact-phone-detail">
                    <Text>市話 {v.contact_tel}</Text>
                    <Text>手機 {v.contact_phone}</Text>
                  </Pane>
                </Pane>
                <Pane className="input-line">
                  <Text className="">聯絡人{`${idx + 1}`}信箱</Text>
                  <Text>{v.contact_email}</Text>
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
