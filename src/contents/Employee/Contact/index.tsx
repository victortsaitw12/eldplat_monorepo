import { I_Content_Props } from "@typings/employee_type";
import {
  Combobox,
  Heading,
  Pane,
  Paragraph,
  SelectField,
  Text,
  TextInput
} from "evergreen-ui";
import React, { useContext, useEffect } from "react";
import { convertCountryNum } from "@utils/convertValueToText";
import { BodySTY } from "./style";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

function Contact({
  handleEmployeeChange,
  insertData,
  setInsertData
}: I_Content_Props) {
  // const {
  //   handleStateChange,
  //   handleCityChange,
  //   handleCountryChange,
  //   allCountries,
  //   allStates,
  //   allCities
  // } = useContext<I_Region_Context>(RegionContext);

  const {
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    countries,
    states,
    cities,
    initOptions
  } = useContext(RegionContext);

  useEffect(() => {
    initOptions({
      country: insertData?.dt_country,
      state: insertData?.district
    });
  }, []);
  console.log("🉐insertData in contact", insertData);

  return (
    <BodySTY>
      <Heading is="h4">聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="required">E-Mail</Text>
          <TextInput
            name="user_email"
            value={insertData.user_email || ""}
            onChange={handleEmployeeChange}
            required
          />
        </Pane>
        <Pane className="input-line">
          <Text className="required">手機</Text>
          <Pane className="phone-input">
            <TextInput
              className="country-number"
              name="user_phone_code"
              // value={handleCountryCode(insertData?.user_country) || ""}
              value={""}
              onChange={handleEmployeeChange}
              required
              disabled
            />
            <TextInput
              className="phone-number"
              name="user_phone"
              value={insertData.user_phone || ""}
              onChange={handleEmployeeChange}
              required
            />
          </Pane>
        </Pane>
        {/**/}
        <Pane className="input-line address-frame">
          <Text className="">聯絡地址</Text>
          <Pane className="address">
            {/* 第一行地址 */}
            <Pane className="first-address">
              <Paragraph>地址1</Paragraph>
              <TextInput
                name="user_address1"
                placeholder="例如:街道地址、郵政信箱等"
                value={insertData.user_address1 || ""}
                onChange={handleEmployeeChange}
              />
            </Pane>

            {/* 第二行地址 */}
            <Pane className="second-address">
              <Paragraph>地址2</Paragraph>
              <TextInput
                name="user_address2"
                placeholder="例如:套房、建築、大樓、樓層等"
                value={insertData.user_address2 || ""}
                onChange={handleEmployeeChange}
              />
            </Pane>
            <Pane className="city-and-district">
              <Pane marginRight="6px">
                <Paragraph>城市</Paragraph>
                <SelectField
                  className="city"
                  label=""
                  name="city"
                  value={insertData.city || ""}
                  onChange={(e: any) => {
                    handleEmployeeChange(e);
                    handleCityChange(e.target.value);
                  }}
                >
                  <>
                    <option value={""} disabled>
                      請選擇
                    </option>
                    {cities?.map((city) => (
                      <option key={city.area_No} value={city.area_No}>
                        {city.area_Name_Tw}
                      </option>
                    ))}
                  </>
                </SelectField>
              </Pane>
              <Pane>
                <Paragraph>州/省/區域</Paragraph>
                <SelectField
                  className="district"
                  label=""
                  name="district"
                  value={insertData.district || ""}
                  onChange={(e: any) => {
                    handleEmployeeChange(e);
                    handleStateChange(e.target.value);
                  }}
                >
                  <>
                    <option value={""} disabled>
                      請選擇
                    </option>
                    {states?.map((state) => (
                      <option key={state.area_No} value={state.area_No}>
                        {state.area_Name_Tw}
                      </option>
                    ))}
                  </>
                </SelectField>
              </Pane>
            </Pane>
            <Pane className="zip-and-country">
              <Pane marginRight="6px">
                <Paragraph marginBottom={8}>郵政編號</Paragraph>
                <TextInput
                  className="zip-code"
                  name="zip_code"
                  value={insertData.zip_code || ""}
                  onChange={handleEmployeeChange}
                />
              </Pane>
              <Pane>
                <Paragraph>國家</Paragraph>
                <SelectField
                  className="country"
                  label=""
                  name="dt_country"
                  value={insertData.dt_country || ""}
                  onChange={(e: any) => {
                    handleEmployeeChange(e);
                    handleCountryChange(e.target.value);
                  }}
                >
                  <>
                    <option value={""} disabled>
                      請選擇
                    </option>
                    {countries?.map((item) => (
                      <option key={item.area_No} value={item.area_No}>
                        {item.area_Name_Tw}
                      </option>
                    ))}
                  </>
                </SelectField>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        {/**/}
        <Pane className="input-line">
          <Text>緊急聯絡人</Text>
          <TextInput
            name="emgc_contact"
            value={insertData.emgc_contact || ""}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>緊急聯絡人手機</Text>
          <Pane className="phone-input">
            <TextInput
              className="country-number"
              name="emgc_phone_code"
              placeholder="ex:+886"
              value={insertData.emgc_phone_code || ""}
              onChange={(e: any) => {
                handleEmployeeChange(e);
              }}
              required
            />
            <TextInput
              name="emgc_phone"
              value={insertData.emgc_phone || ""}
              onChange={handleEmployeeChange}
            />
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Contact;

/* <Pane className="input-line">
<Text>聯絡地址</Text>
<Pane>
  <Pane className="address">
    <SelectField
      label=""
      name="city"
      value={insertData.city}
      onChange={handleEmployeeChange}
    >
      <option value="1">台北市</option>
      <option value="2">新北市</option>
      <option value="3">桃園市</option>
      <option value="4">新竹市</option>
    </SelectField>  
    <SelectField
      label=""
      name="district"
      value={insertData.district}
      onChange={handleEmployeeChange}
    >
      <option value="1">南港區</option>
      <option value="2">信義區</option>
      <option value="3">大安區</option>
      <option value="4">大同區</option>
    </SelectField>
 
    <SelectField
      label=""
      name="street"
      value={insertData.street}
      onChange={handleEmployeeChange}
    >
      <option value="1">忠孝東路一段</option>
      <option value="2">忠孝東路二段</option>
      <option value="3">忠孝東路三段</option>
      <option value="4">忠孝東路四段</option>
    </SelectField>

  </Pane>
  <TextInput
    marginTop={16}
    name="user_address"
    value={insertData.user_address}
    onChange={handleEmployeeChange}
  />
</Pane>
</Pane>  */
