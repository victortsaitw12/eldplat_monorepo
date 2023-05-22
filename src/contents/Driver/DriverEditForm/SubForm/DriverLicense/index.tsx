import Image from "next/image";

import {
  Button,
  Checkbox,
  Heading,
  Icon,
  Pane,
  Select,
  Text,
  Textarea,
  TextInput,
  MediaIcon,
  UploadIcon,
  IconButton
} from "evergreen-ui";
import React, { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { BodySTY } from "./style";

import { I_driverInfo } from "@contents/driver/driver.typing";
import { licn_type_DATA } from "./data";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizatalInputDate from "@components/HookForm/Input/HorizontalInputDate";
import HorizontalTextArea from "@components/HookForm/Input/HorizontalTextArea";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
import SingleCheckBox from "@components/HookForm/CheckBox/SingleCheckBox";

function DriverLicense({
  currentUserInfo,
  insertData,
  setInsertData,
  handleInputChange,
  isDisabled
}: any) {
  const [invalidChecked, setInvalidChecked] = useState<boolean>(false);
  const uploadRef = useRef<HTMLInputElement | null | any>(null);
  const { register, errors, control, handleSubmit } = useFormContext();

  const trimFileName = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex !== -1) return fileName.substring(0, lastDotIndex);
    return fileName;
  };
  const handleUploadClick = () => {
    uploadRef.current.click();
  };
  return (
    <BodySTY>
      <Heading is="h4">駕駛證照</Heading>
      <div className="form">
        {isDisabled ? (
          <>
            <Pane className="input-line">
              <Text>證照種類</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_typ
                  ? currentUserInfo.licn_typ
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>證照名稱</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_name
                  ? currentUserInfo.licn_name
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>發照單位</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_unit
                  ? currentUserInfo.licn_unit
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>發照日期</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_issue
                  ? currentUserInfo.licn_issue
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>有效日期</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_exp
                  ? currentUserInfo.licn_exp
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>下次審驗日期</Text>
              <Text>
                {currentUserInfo && currentUserInfo.licn_examine_date
                  ? currentUserInfo.licn_examine_date
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text style={{ alignSelf: "baseline" }}>證照檔案</Text>
              <Pane style={{ border: "none" }}>
                <Text>
                  {currentUserInfo && currentUserInfo.licn_filename
                    ? trimFileName(currentUserInfo.licn_filename)
                    : "---"}
                </Text>
                <Pane className="licnFileBox">
                  <IconButton className="mediaIcon" icon={MediaIcon} />
                  <div className="licnFileInfo">
                    {currentUserInfo && currentUserInfo.licn_filename
                      ? currentUserInfo.licn_filename
                      : "---"}
                    <div className="fileSize">1.2MB</div>
                  </div>
                </Pane>
              </Pane>
            </Pane>
            <Pane className="input-line">
              <Text>失效</Text>
              <Text>
                {currentUserInfo && currentUserInfo.invalid
                  ? currentUserInfo.invalid
                  : "---"}
              </Text>
            </Pane>
            <Pane className="input-line">
              <Text>失效備註</Text>
              <>
                <Text>
                  {currentUserInfo && currentUserInfo.invalid_remark
                    ? currentUserInfo.invalid_remark
                    : "---"}
                </Text>
                <Pane></Pane>
              </>
            </Pane>
          </>
        ) : (
          <>
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              isRequire={true}
              label="證照種類"
              name="licn_typ"
              options={licn_type_DATA}
              {...register("licn_typ", {
                required: true
              })}
            />
            <HorizatalInput
              isRequire={true}
              label="證照名稱"
              errorMessage={errors.licn_name ? "必填欄位" : ""}
              {...register("licn_name", {
                validate: textValidation,
                required: true
              })}
            />
            <HorizatalInput
              isRequire={true}
              label="發照單位"
              errorMessage={errors.licn_unit ? "必填欄位" : ""}
              {...register("licn_unit", {
                validate: textValidation,
                required: true
              })}
            />
            <HorizatalInputDate
              isRequire={true}
              label="發照日期"
              errorMessage={errors.licn_issue ? "必填欄位" : ""}
              {...register("licn_issue", {
                required: true
              })}
            />
            <HorizatalInputDate
              isRequire={true}
              label="有效日期"
              errorMessage={errors.licn_exp ? "必填欄位" : ""}
              {...register("licn_exp", {
                required: true
              })}
            />
            <HorizatalInputDate
              isRequire={true}
              label="下次審驗日期"
              errorMessage={errors.licn_examine_date ? "必填欄位" : ""}
              {...register("licn_examine_date", {
                required: true
              })}
            />
            <Pane className="input-line">
              <Text style={{ alignSelf: "baseline" }}>證照檔案</Text>
              <>
                <TextInput
                  type="file"
                  id="file"
                  ref={uploadRef}
                  display="none"
                />
                <Button
                  className="license-file-btn"
                  iconBefore={UploadIcon}
                  onClick={(e: any) => {
                    e.preventDefault();
                    handleUploadClick();
                  }}
                >
                  上傳證照檔案
                </Button>
              </>
            </Pane>
            <Pane className="input-line">
              <Text>失效</Text>
              <SingleCheckBox
                type="checkbox"
                placeholder="invalid"
                checked={invalidChecked}
                {...register("invalid")}
              />
            </Pane>
            <HorizontalTextArea
              label="失效備註"
              {...register("invalid_remark")}
            />
          </>
        )}
      </div>
    </BodySTY>
  );
}

export default DriverLicense;
