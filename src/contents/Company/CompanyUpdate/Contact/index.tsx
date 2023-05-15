import React, { useContext, useEffect, useState } from "react";
import {
  Heading,
  Pane,
  Paragraph,
  Text,
  TextInput,
  SelectField,
  Button,
  PlusIcon,
  IconButton,
  TrashIcon
} from "evergreen-ui";
import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import { convertCountryNum } from "@utils/convertValueToText";
import { I_Company_Contact_Type } from "@typings/company_type";

function Contact() {
  const {
    companyData,
    setCompanyData,
    handleCompanyContactChange,
    errMsg,
    countryNumInput,
    setCountryNumInput
  } = useContext<I_Company_Context>(CompanyContext);
  const [contactArr, setContactArr] = useState<I_Company_Contact_Type[]>([
    {
      contact_name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_sort: "1"
    }
  ]);
  const [countryNum, setCountryNum] = useState<string | undefined>("");

  // 可變動的國碼欄位
  const handleCountryNum = (e: any) => {
    const newData = { ...countryNumInput };
    if (e.target.name === "country_num_Tel") {
      newData["contactTel"] = e.target.value;
    } else if (e.target.name === "country_num_Phone") {
      newData["contactPhone"] = e.target.value;
    }
    setCountryNumInput(newData);
  };

  // 不可變動的國碼欄位
  const countryCode = companyData.company_country;
  useEffect(() => {
    setCountryNum(convertCountryNum(countryCode));
  }, [countryCode]);

  // 新增聯絡人按鈕
  const handleAddContact = (e: any) => {
    e.preventDefault();
    setContactArr((prev: any) => [
      ...prev,
      {
        contact_name: "",
        contact_phone_code: "",
        contact_phone: "",
        contact_tel_code: "",
        contact_tel: "",
        contact_email: "",
        contact_sort: "2"
      }
    ]);
  };

  // 移除一個聯絡人
  const handleRemoveContact = (val: I_Company_Contact_Type, idx: number) => {
    const copyData = { ...companyData };
    // 找到聯絡人姓名一樣的把他篩掉
    const filterContact = contactArr.filter((v, i) => {
      return val.contact_name !== v.contact_name;
    });
    copyData["company_contact"] = filterContact;
    setContactArr(filterContact);
    setCompanyData(copyData);
  };

  // 存取多個聯絡人欄位裡的資料
  const handleContactsChange = (
    e: any,
    val: I_Company_Contact_Type,
    idx: number
  ) => {
    const copyData = { ...companyData };
    // 把原始陣列展開後找到要輸入的那格去更改value
    const updatedContact = contactArr.map((v, i) => {
      const newData = { ...v };
      if (idx === i) {
        newData[e.target.name] = e.target.value;
      }
      return newData;
    });
    copyData["company_contact"] = updatedContact;
    setContactArr(updatedContact);
    setCompanyData(copyData);
  };

  console.log("🎈contactArr", contactArr);

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
              name="company_tel"
              value={companyData.company_tel}
              onChange={handleCompanyContactChange}
              required
            />
            {errMsg["errField"] === "tel" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
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
              name="company_fax"
              value={companyData.company_fax}
              onChange={handleCompanyContactChange}
              required
            />
            {errMsg["errField"] === "company_fax" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
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
                name="address1"
                value={companyData.address1}
                onChange={handleCompanyContactChange}
              />
            </Pane>

            {/* 第二行地址 */}
            <Pane className="second-address">
              <Paragraph>地址2</Paragraph>
              <TextInput
                name="address2"
                value={companyData.address2}
                onChange={handleCompanyContactChange}
              />
            </Pane>
            <Pane className="city-and-district">
              <Pane marginRight="6px">
                <Paragraph>城市</Paragraph>
                <SelectField
                  className="city"
                  label=""
                  name="company_city"
                  value={companyData.company_city}
                  onChange={(e: any) => {
                    handleCompanyContactChange(e);
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
                  className="company_area"
                  label=""
                  name="company_area"
                  value={companyData.company_area}
                  onChange={(e: any) => {
                    handleCompanyContactChange(e);
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
                  name="company_district_code"
                  value={companyData.company_district_code}
                  onChange={handleCompanyContactChange}
                />
              </Pane>
              <Pane>
                <Paragraph>國家</Paragraph>
                <SelectField
                  className="country"
                  label=""
                  name="company_country"
                  value={companyData.company_country}
                  onChange={(e: any) => {
                    handleCompanyContactChange(e);
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
              name="company_email"
              value={companyData.company_email}
              onChange={handleCompanyContactChange}
            />
            {errMsg["errField"] === "company_email" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>

        {contactArr.map((value, idx) => {
          return (
            <>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人" : `聯絡人${idx + 1}`}
                </Text>
                <Pane className="contact-first">
                  <TextInput
                    name="contact_name"
                    value={value.contact_name}
                    onChange={(e: any) => {
                      handleContactsChange(e, value, idx);
                    }}
                  />
                  {idx !== 0 && (
                    <IconButton
                      icon={TrashIcon}
                      onClick={() => {
                        handleRemoveContact(value, idx);
                      }}
                    />
                  )}
                </Pane>
              </Pane>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人電話" : `聯絡人${idx + 1}電話`}
                </Text>
                <Pane>
                  <Pane className="phone-input">
                    <Paragraph size={200}>市話</Paragraph>
                    <TextInput
                      type="tel"
                      className="country-number"
                      name="contact_tel_code"
                      placeholder="ex:+886"
                      // value={countryNumInput.contactTel}
                      // onChange={handleCountryNum}
                      value={value.contact_tel_code}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    <TextInput
                      className="contact-tel"
                      name="contact_tel"
                      value={value.contact_tel}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    {errMsg["errField"] === "contact_tel" && (
                      <Text color="red !important">{errMsg["errText"]}</Text>
                    )}
                  </Pane>
                  <Pane className="phone-input">
                    <Paragraph size={200}>手機</Paragraph>
                    <TextInput
                      className="country-number"
                      name="contact_phone_code"
                      placeholder="ex:+886"
                      // value={countryNumInput.contactPhone}
                      // onChange={handleCountryNum}
                      value={value.contact_phone_code}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    <TextInput
                      className="contact-phone"
                      name="contact_phone"
                      // value={companyData.company_Dt.contact_Phone}
                      // onChange={handleCompanyContactChange}
                      value={value.contact_phone}
                      onChange={(e: any) => {
                        handleContactsChange(e, value, idx);
                      }}
                      required
                    />
                    {errMsg["errField"] === "contact_phone" && (
                      <Text color="red !important">{errMsg["errText"]}</Text>
                    )}
                  </Pane>
                </Pane>
              </Pane>
              <Pane className="input-line">
                <Text className="">
                  {idx === 0 ? "主要聯絡人信箱" : `聯絡人${idx + 1}信箱`}
                </Text>
                <TextInput
                  name="contact_email"
                  value={value.contact_email}
                  onChange={(e: any) => {
                    handleContactsChange(e, value, idx);
                  }}
                />
              </Pane>

              <Pane height={1} width={100} backgroundColor="#AFC3DA"></Pane>
            </>
          );
        })}
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

{
  /* <Pane className="input-line">
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
          <Pane className="input-line">
            <Text className="">信箱</Text>
            <TextInput
              name="contact_email"
              // value={C_data.companyData.company_Dt.contact_Name}
              onChange={C_data.handleCompanyContactChange}
            />
          </Pane>
  
          <Pane height={1} width={100} backgroundColor="#AFC3DA"></Pane> */
}

{
  /* <Pane className="input-line">
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
          </Pane> */
}

{
  /* <Pane className="input-line">
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
          </Pane> */
}
