import React from "react";
import { Pane, Text, Label, TextInput, Select, Textarea } from "evergreen-ui";
import { DivSTY } from "./style";

import { I_RegionsData } from "@services/region/getRegion";

interface I_Props {
  data: I_AddressData;
  isEdit?: boolean;
  options?: { countries: I_RegionsData[]; cities: I_RegionsData[] };
  onChange?: (v: any) => void;
}
interface I_AddressData {
  company_district_code: string;
  country_name: string;
  city_name: string;
  address1: string;
  [key: string]: any;
}

const Address = ({ data, options, onChange, isEdit = false }: I_Props) => {
  if (!isEdit)
    return (
      <DivSTY className="address">
        <Pane className="address__view">
          <Text>{data?.company_district_code}</Text>{" "}
          <Text>{data?.country_name}</Text>
        </Pane>
        <Pane className="address__view">
          <Text>{data?.city_name}</Text>
        </Pane>
        <Text className="address__view">{data?.address1}</Text>
      </DivSTY>
    );

  const { countries, cities } = options || {};

  const handleCompanyContactChange = (e: any) => {
    onChange && onChange(e);
  };

  return (
    <DivSTY className="address">
      <Pane className="address__form" marginRight="6px">
        <Label className="label">郵遞區號</Label>
        <TextInput
          className="input"
          name="company_district_code"
          value={data.company_district_code}
          onChange={handleCompanyContactChange}
        />
      </Pane>
      <Pane className="address__form">
        <Label className="label">國家</Label>
        <Select
          className="input"
          name="company_country"
          value={data.company_country}
          onChange={(e: any) => {
            handleCompanyContactChange(e);
          }}
        >
          <option value={""} disabled>
            請選擇
          </option>
          {countries?.map((item) => (
            <option
              key={item.area_No}
              value={item.area_No}
              selected={data.company_country === item.area_No}
            >
              {item.area_Name_Tw}
            </option>
          ))}
        </Select>
      </Pane>
      <Pane className="city-and-district">
        <Pane className="address__form" marginRight="6px">
          <Label className="label">城市</Label>
          <Select
            className="input"
            name="company_city"
            value={data.company_city}
            onChange={(e: any) => {
              handleCompanyContactChange(e);
            }}
            defaultValue={data.city_name || ""}
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
      </Pane>
      <Pane className="address__form" marginRight="6px">
        <Label className="label">地址</Label>
        <Textarea
          className="input"
          name="address1"
          value={data.address1}
          onChange={handleCompanyContactChange}
        />
      </Pane>
    </DivSTY>
  );
};

export default Address;
