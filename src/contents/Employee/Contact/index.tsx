import { I_Content_Props } from "@typings/employee_type";
import {
  Heading,
  Pane,
  Paragraph,
  SelectField,
  Text,
  TextInput,
  Label,
  Select,
  Textarea
} from "evergreen-ui";
import React, { useContext, useEffect } from "react";
import { BodySTY } from "./style";
import { RegionContext } from "@contexts/regionContext/regionProvider";
import { getValue } from "evergreen-ui/types/theme";

function Contact({ handleEmployeeChange, insertData }: I_Content_Props) {
  const {
    handleCountryChange,
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

  useEffect(() => {
    if (!insertData.dt_country) return;
    handleCountryChange(insertData.dt_country);
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
              value={insertData.user_phone_code || ""}
              onChange={handleEmployeeChange}
              required
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
        <Pane className="input-line address-frame">
          <Text className="">聯絡地址</Text>
          <Pane className="address">
            <Pane className="address__form" marginRight="6px">
              <Label className="label" marginBottom={8}>
                郵遞區號
              </Label>
              <TextInput
                className="input"
                name="zip_code"
                value={insertData.zip_code || ""}
                onChange={handleEmployeeChange}
              />
            </Pane>
            <Pane className="address__form" marginRight="6px">
              <Label className="label">國家</Label>
              <Select
                className="input"
                name="dt_country"
                defaultValue={""}
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
              </Select>
            </Pane>
            <Pane className="address__form" marginRight="6px">
              <Label className="label">城市</Label>
              <Select
                className="input"
                name="city"
                value={insertData.city || ""}
                onChange={(e: any) => {
                  handleEmployeeChange(e);
                  handleCityChange(e.target.value);
                }}
              >
                <option value={""} disabled>
                  請選擇
                </option>
                {cities?.map((city) => (
                  <option key={city.area_No} value={city.area_No}>
                    {city.area_Name_Tw}
                  </option>
                ))}
              </Select>
            </Pane>
            <Pane className="address__form" marginRight="6px">
              {" "}
              <Label className="label">地址</Label>
              <Textarea
                className="input"
                name="user_address1"
                placeholder="例如:街道地址、郵政信箱等"
                value={insertData.user_address1 || ""}
                onChange={handleEmployeeChange}
              />
            </Pane>
          </Pane>
        </Pane>
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
