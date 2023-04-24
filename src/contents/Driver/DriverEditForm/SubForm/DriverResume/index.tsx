import MultiSelect from "@components/MultiSelect";
import {
  Checkbox,
  Heading,
  Pane,
  Select,
  Text,
  Textarea,
  TextInput
} from "evergreen-ui";
import React, { useState } from "react";
import { region_DATA, city_DATA, driver_DT_DATA } from "./data";
import { BodySTY } from "./style";

function DriverResume({
  insertData,
  currentUserInfo,
  handleInputChange,
  handleMultiSelect
}: any) {
  const [blackChecked, setBlackChecked] = useState<boolean>(false);

  return (
    <BodySTY>
      <Heading is="h4">駕駛履歷</Heading>
      <form>
        <Pane className="input-line">
          <Text>使用者編號</Text>
          <Text>{currentUserInfo ? currentUserInfo.user_No : ""}</Text>
        </Pane>
        <Pane className="input-line">
          <Text>駕照編號</Text>
          <TextInput
            name="license_no"
            value={insertData.license_no}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>執照州/省/地區</Text>
          <Select
            width="100%"
            name="license_area"
            value={insertData.license_area}
            onChange={handleInputChange}
          >
            {region_DATA.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </Pane>
        <Pane className="input-line">
          <Text>牌照等級</Text>
          <TextInput
            name="license_lvl"
            value={insertData.license_lvl}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>駕駛資歷(年)</Text>
          <TextInput
            name="driver_seniority"
            value={insertData.driver_seniority}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>駕駛分類</Text>
          <MultiSelect
            name="driver_typ"
            handleMultiSelect={handleMultiSelect}
            optionData={driver_DT_DATA}
          />
        </Pane>
        <Pane className="input-line">
          <Text>派遣區域</Text>
          <Select
            width="100%"
            name="dsph_area"
            value={insertData.dsph_area}
            onChange={handleInputChange}
          >
            {region_DATA.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </Pane>
        <Pane className="input-line">
          <Text>派遣都市</Text>
          <Select
            width="100%"
            name="dsph_city"
            value={insertData.dsph_city}
            onChange={handleInputChange}
          >
            {city_DATA.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </Pane>
        <Pane className="input-line">
          <Text>黑名單註記</Text>
          <Checkbox
            name="blocklist_mark"
            label=""
            checked={blackChecked}
            onChange={(e: any) => setBlackChecked(e.target.checked)}
          />
        </Pane>
        <Pane className="input-line">
          <Text>黑名單註記</Text>
          <Textarea
            name="remark"
            value={insertData.remark}
            onChange={handleInputChange}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default DriverResume;
