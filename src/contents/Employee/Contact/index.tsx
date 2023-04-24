import { I_Content_Props } from "@typings/employee_type";
import {
  Combobox,
  Heading,
  Pane,
  SelectField,
  Text,
  TextInput
} from "evergreen-ui";
import React from "react";
import { convertCountryNum } from "@utils/convertValueToText";
import { BodySTY } from "./style";

function Contact({
  handleEmployeeChange,
  insertData,
  setInsertData
}: I_Content_Props) {
  const countryNum = convertCountryNum(insertData.user_country);

  return (
    <BodySTY>
      <Heading is="h4">聯絡資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text className="required">E-Mail</Text>
          <TextInput
            name="user_email"
            value={insertData.user_email}
            onChange={handleEmployeeChange}
            required
          />
        </Pane>
        <Pane className="input-line">
          <Text className="required">手機</Text>
          <Pane className="phone-input">
            <TextInput
              className="country-number"
              name=""
              value={countryNum}
              onChange={handleEmployeeChange}
              required
              disabled
            />
            <TextInput
              className="phone-number"
              name="user_phone"
              value={insertData.user_phone}
              onChange={handleEmployeeChange}
              required
            />
          </Pane>
        </Pane>
        <Pane className="input-line">
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
              {/* <Combobox
                openOnFocus
                name="city"
                value={insertData.city}
                width="120px"
                items={city_DATA.map((v) => v.label)}
                onChange={handleChangeAddress}
                placeholder="縣市"
              /> */}
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
              {/* <Combobox
                openOnFocus
                width="120px"
                items={district_DATA}
                onChange={(selected) => console.log(selected)}
                placeholder="鄉鎮市區"
              /> */}
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
              {/* <Combobox
                openOnFocus
                width="120px"
                items={road_DATA}
                onChange={(selected) => console.log(selected)}
                placeholder="道路街名"
              /> */}
            </Pane>
            <TextInput
              marginTop={16}
              name="user_address"
              value={insertData.user_address}
              onChange={handleEmployeeChange}
            />
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>緊急聯絡人</Text>
          <TextInput
            name="emgc_contact"
            value={insertData.emgc_contact}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>緊急聯絡人手機</Text>
          <TextInput
            name="emgc_phone"
            value={insertData.emgc_phone}
            onChange={handleEmployeeChange}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Contact;
