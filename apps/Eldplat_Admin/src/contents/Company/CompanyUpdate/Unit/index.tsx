import React, { useContext, useEffect, useState } from "react";
import { Heading, Pane, SelectField, Text } from "evergreen-ui";

import { BodySTY } from "./style";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

function Unit() {
  const { companyData, companyDDL, handleCompanyDDLChange } =
    useContext<I_Company_Context>(CompanyContext);

  const milageDDL = companyDDL?.milage_options;
  const fuelUnitDDL = companyDDL?.fuel_unit_options;
  const measurmentUnitsDDL = companyDDL?.measurement_units_options;

  return (
    <BodySTY>
      <Heading is="h4">單位設定</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">里程</Text>
          <SelectField
            className=""
            label=""
            name="milage"
            value={companyData?.milage}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
            disabled
          >
            {milageDDL?.map(
              (item: { option_code: string; option_name: string }) => (
                <option key={item.option_name} value={item.option_code}>
                  {item.option_name}
                </option>
              )
            )}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text className="">燃料容量</Text>
          <SelectField
            className=""
            label=""
            name="fuel_unit"
            value={companyData?.fuel_unit}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
            disabled
          >
            {fuelUnitDDL?.map(
              (item: { option_code: string; option_name: string }) => (
                <option key={item.option_name} value={item.option_code}>
                  {item.option_name}
                </option>
              )
            )}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text className="">測量系統</Text>
          <SelectField
            className=""
            label=""
            name="measurement_units"
            value={companyData?.measurement_units}
            onChange={(e: any) => {
              handleCompanyDDLChange(e);
            }}
            disabled
          >
            {measurmentUnitsDDL?.map(
              (item: { option_code: string; option_name: string }) => (
                <option key={item.option_code} value={item.option_code}>
                  {item.option_name}
                </option>
              )
            )}
          </SelectField>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Unit;
