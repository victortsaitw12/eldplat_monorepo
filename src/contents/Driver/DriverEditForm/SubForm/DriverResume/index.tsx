import {
  Checkbox,
  Heading,
  Pane,
  Select,
  Text,
  Textarea,
  TextInput,
  SmallTickIcon,
  SmallCrossIcon
} from "evergreen-ui";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { BodySTY } from "./style";

import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import { region_DATA, city_DATA, driver_DT_DATA } from "./data";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";

function DriverResume({
  userId,
  insertData,
  currentUserInfo,
  handleInputChange,
  handleMultiSelect,
  isDisabled
}: any) {
  const [blackChecked, setBlackChecked] = useState<boolean>(false);
  const { register, errors, control, handleSubmit } = useFormContext();
  return (
    <BodySTY>
      <Heading is="h4">駕駛履歷</Heading>
      <div className="form">
        <Pane className="input-line">
          <Text>使用者編號</Text>
          <Text>{(currentUserInfo && currentUserInfo?.user_No) || userId}</Text>
        </Pane>
        {isDisabled ? (
          <>
            <Pane className="input-line">
              <Text className="title">駕照編號</Text>
              <Text>
                {currentUserInfo && currentUserInfo.license_No
                  ? currentUserInfo.license_No
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>執照州/省/地區</Text>
              <Text>
                {currentUserInfo && currentUserInfo.license_Area
                  ? currentUserInfo.license_Area
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>牌照等級</Text>
              <Text>
                {currentUserInfo && currentUserInfo.license_Lvl
                  ? currentUserInfo.license_Lvl
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>駕駛資歷(年)</Text>
              <Text>
                {currentUserInfo && currentUserInfo.driver_seniority
                  ? currentUserInfo.driver_seniority
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>派遣區域</Text>
              <Text>
                {currentUserInfo && currentUserInfo.dsph_area
                  ? currentUserInfo.dsph_area
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>派遣都市</Text>

              <Text>
                {currentUserInfo && currentUserInfo.dsph_city
                  ? currentUserInfo.dsph_city
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>黑名單註記</Text>
              <Text>
                {currentUserInfo && currentUserInfo.blocklist_mark === "1" ? (
                  <SmallTickIcon style={{ color: "#8EA8C7" }} />
                ) : (
                  <SmallCrossIcon style={{ color: "#8EA8C7" }} />
                )}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>黑名單註記</Text>
              {isDisabled ? (
                <Text>
                  {currentUserInfo && currentUserInfo.remark
                    ? currentUserInfo.remark
                    : "---"}
                </Text>
              ) : (
                <Textarea
                  name="remark"
                  value={insertData.remark}
                  onChange={handleInputChange}
                />
              )}
            </Pane>
          </>
        ) : (
          <>
            <HorizatalInput
              label="駕照編號"
              errorMessage={errors.license_no ? "必填欄位" : ""}
              {...register("license_no", {
                validate: textValidation
              })}
            />
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="執照州/省/地區"
              name="license_area"
              options={region_DATA}
            />

            <HorizatalInput
              label="牌照等級"
              errorMessage={errors.license_lvl ? "必填欄位" : ""}
              {...register("license_lvl", {
                validate: textValidation
              })}
            />

            <HorizatalInput
              label="駕駛資歷(年)"
              errorMessage={errors.driver_seniority ? "必填欄位" : ""}
              {...register("driver_seniority", {
                validate: textValidation
              })}
            />

            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="派遣區域"
              name="dsph_area"
              options={city_DATA}
            />

            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="派遣都市"
              name="dsph_city"
              options={city_DATA}
            />

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
              <Text>黑名單備註</Text>
              <Textarea
                name="remark"
                value={insertData.remark}
                onChange={handleInputChange}
              />
            </Pane>

            <HorizontalSelect
              control={control}
              label="標籤"
              isDisabled={isDisabled}
              name="bus.label"
              options={driver_DT_DATA}
            />
          </>
        )}
      </div>
    </BodySTY>
  );
}

export default DriverResume;
