import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  Heading,
  Pane,
  Paragraph,
  Text,
  TextInput,
  SelectField,
  Button,
  PlusIcon
} from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { convertCountryNum } from "@utils/convertValueToText";

function Contact() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const [countryNum, setCountryNum] = useState<string | undefined>("");

  // 可變動的國碼欄位
  const handleCountryNum = (e: any) => {
    const newData = { ...C_data.countryNumInput };
    if (e.target.name === "country_num_Tel") {
      newData["contactTel"] = e.target.value;
    } else if (e.target.name === "country_num_Phone") {
      newData["contactPhone"] = e.target.value;
    }
    C_data.setCountryNumInput(newData);
  };

  // 不可變動的國碼欄位
  const countryCode = C_data.companyData.company.com_Country;
  useEffect(() => {
    setCountryNum(convertCountryNum(countryCode));
  }, [countryCode]);

  // 新增聯絡人按鈕
  const handleAddContact = (e: any) => {
    e.preventDefault();
  };

  return (
    <BodySTY>
      <Heading is="h4">公司聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">公司電話</Text>
          <Pane className="phone-input">
            <TextInput
              className="country-number"
              name=""
              value={countryNum}
              required
              disabled
            />
            <TextInput
              className="tel"
              name="tel"
              value={C_data.companyData.company_Dt.tel}
              onChange={C_data.handleCompanyContactChange}
              required
            />
            {C_data.errMsg["errField"] === "tel" && (
              <Text color="red !important">{C_data.errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司傳真</Text>
          <Pane className="phone-input">
            <TextInput
              className="country-number"
              name=""
              value={countryNum}
              required
              disabled
            />
            <TextInput
              className="tel"
              name="com_Fax"
              value={C_data.companyData.company_Dt.com_Fax}
              onChange={C_data.handleCompanyContactChange}
              required
            />
            {C_data.errMsg["errField"] === "com_Fax" && (
              <Text color="red !important">{C_data.errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司地址</Text>
          <Pane className="address">
            {/* 第一行地址 */}
            <Pane className="first-address">
              <Paragraph>地址1</Paragraph>
              <TextInput
                name="user_Address1"
                value={C_data.companyData.company_Dt.user_Address1}
                onChange={C_data.handleCompanyContactChange}
              />
            </Pane>

            {/* 第二行地址 */}
            <Pane className="second-address">
              <Paragraph>地址2</Paragraph>
              <TextInput
                name="user_Address2"
                value={C_data.companyData.company_Dt.user_Address2}
                onChange={C_data.handleCompanyContactChange}
              />
            </Pane>
            <Pane className="city-and-district">
              <Pane marginRight="6px">
                <Paragraph>城市</Paragraph>
                <SelectField
                  className="city"
                  label=""
                  name="city"
                  value={C_data.companyData.company_Dt.city}
                  onChange={(e: any) => {
                    C_data.handleCompanyContactChange(e);
                  }}
                >
                  <option value="1">台北市</option>
                  <option value="2">新北市</option>
                  <option value="3">桃園市</option>
                  <option value="4">新竹市</option>
                </SelectField>
              </Pane>
              <Pane>
                <Paragraph>州/省/區域</Paragraph>
                <SelectField
                  className="district"
                  label=""
                  name="district"
                  value={C_data.companyData.company_Dt.district}
                  onChange={(e: any) => {
                    C_data.handleCompanyContactChange(e);
                  }}
                >
                  <option value="1">南港區</option>
                  <option value="2">信義區</option>
                  <option value="3">大安區</option>
                  <option value="4">大同區</option>
                </SelectField>
              </Pane>
            </Pane>
            <Pane className="zip-and-country">
              <Pane marginRight="6px">
                <Paragraph>郵政編號</Paragraph>
                <TextInput
                  name="zip_Code"
                  value={C_data.companyData.company_Dt.zip_Code}
                  onChange={C_data.handleCompanyContactChange}
                />
              </Pane>
              <Pane>
                <Paragraph>國家</Paragraph>
                <SelectField
                  className="country"
                  label=""
                  name="country"
                  value={C_data.companyData.company_Dt.country}
                  onChange={(e: any) => {
                    C_data.handleCompanyContactChange(e);
                  }}
                >
                  <option value="TW">台灣</option>
                  <option value="JP">日本</option>
                  <option value="US">美國</option>
                  <option value="TH">泰國</option>
                </SelectField>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司E-Mail</Text>
          <Pane>
            <TextInput
              name="com_Email"
              value={C_data.companyData.company_Dt.com_Email}
              onChange={C_data.handleCompanyContactChange}
            />
            {C_data.errMsg["errField"] === "com_Email" && (
              <Text color="red !important">{C_data.errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">主要聯絡人</Text>
          <TextInput
            name="contact_Name"
            value={C_data.companyData.company_Dt.contact_Name}
            onChange={C_data.handleCompanyContactChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">主要聯絡人電話</Text>
          <Pane>
            <Pane className="phone-input">
              <Paragraph size={200}>市話</Paragraph>
              <TextInput
                type="tel"
                className="country-number"
                name="country_num_Tel"
                placeholder="ex:+886"
                value={C_data.countryNumInput.contactTel}
                onChange={handleCountryNum}
                required
              />
              <TextInput
                className="contact-tel"
                name="contact_Tel"
                value={C_data.companyData.company_Dt.contact_Tel}
                onChange={C_data.handleCompanyContactChange}
                required
              />
              {C_data.errMsg["errField"] === "contact_Tel" && (
                <Text color="red !important">{C_data.errMsg["errText"]}</Text>
              )}
            </Pane>
            <Pane className="phone-input">
              <Paragraph size={200}>手機</Paragraph>
              <TextInput
                className="country-number"
                name="country_num_Phone"
                placeholder="ex:+886"
                value={C_data.countryNumInput.contactPhone}
                onChange={handleCountryNum}
                required
              />
              <TextInput
                className="contact-phone"
                name="contact_Phone"
                value={C_data.companyData.company_Dt.contact_Phone}
                onChange={C_data.handleCompanyContactChange}
                required
              />
              {C_data.errMsg["errField"] === "contact_Phone" && (
                <Text color="red !important">{C_data.errMsg["errText"]}</Text>
              )}
            </Pane>
          </Pane>
        </Pane>
        <Pane height={1} width={100} backgroundColor="#AFC3DA"></Pane>
        <Pane className="input-line">
          <Text className="">聯絡人2</Text>
          <TextInput
            name="contact_Name"
            value={C_data.companyData.company_Dt.contact_Name}
            onChange={C_data.handleCompanyContactChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="">主要聯絡人電話</Text>
          <Pane>
            <Pane className="phone-input">
              <Paragraph size={200}>市話</Paragraph>
              <TextInput
                type="tel"
                className="country-number"
                name="country_num_Tel"
                placeholder="ex:+886"
                value={C_data.countryNumInput.contactTel}
                onChange={handleCountryNum}
                required
              />
              <TextInput
                className="contact-tel"
                name="contact_Tel"
                value={C_data.companyData.company_Dt.contact_Tel}
                onChange={C_data.handleCompanyContactChange}
                required
              />
              {C_data.errMsg["errField"] === "contact_Tel" && (
                <Text color="red !important">{C_data.errMsg["errText"]}</Text>
              )}
            </Pane>
            <Pane className="phone-input">
              <Paragraph size={200}>手機</Paragraph>
              <TextInput
                className="country-number"
                name="country_num_Phone"
                placeholder="ex:+886"
                value={C_data.countryNumInput.contactPhone}
                onChange={handleCountryNum}
                required
              />
              <TextInput
                className="contact-phone"
                name="contact_Phone"
                value={C_data.companyData.company_Dt.contact_Phone}
                onChange={C_data.handleCompanyContactChange}
                required
              />
              {C_data.errMsg["errField"] === "contact_Phone" && (
                <Text color="red !important">{C_data.errMsg["errText"]}</Text>
              )}
            </Pane>
          </Pane>
        </Pane>

        {/* <Pane className="input-line">
          <Pane className="phone-input">
            <Text>手機</Text>
            <TextInput
              className="country-number"
              name="country_num_Phone"
              placeholder="ex:+886"
              value={C_data.countryNumInput.contactPhone}
              onChange={handleCountryNum}
              required
            />
            <TextInput
              className="contact-phone"
              name="contact_Phone"
              value={C_data.companyData.company_Dt.contact_Phone}
              onChange={C_data.handleCompanyContactChange}
              required
            />
            {C_data.errMsg["errField"] === "contact_Phone" && (
              <Text color="red !important">{C_data.errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane> */}
        <Button
          marginY={8}
          marginRight={12}
          iconBefore={PlusIcon}
          onClick={handleAddContact}
        >
          新增聯絡人
        </Button>
      </form>
    </BodySTY>
  );
}

export default Contact;
