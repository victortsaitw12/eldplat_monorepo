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
import { BodySTY } from "./style";

import { I_driverInfo } from "@contents/driver/driver.typing";
import { licn_type_DATA } from "./data";

function DriverLicense({
  currentUserInfo,
  insertData,
  setInsertData,
  handleInputChange,
  isDisabled
}: any) {
  const [invalidChecked, setInvalidChecked] = useState<boolean>(false);
  const uploadRef = useRef<HTMLInputElement | null | any>(null);

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
        <Pane className="input-line">
          <Text>證照種類</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_typ
                ? currentUserInfo.licn_typ
                : "---"}
            </Text>
          ) : (
            <Select
              width="100%"
              name="licn_typ"
              value={insertData.licn_typ}
              onChange={handleInputChange}
            >
              {licn_type_DATA.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </Select>
          )}
        </Pane>
        <Pane className="input-line">
          <Text>證照名稱</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_name
                ? currentUserInfo.licn_name
                : "---"}
            </Text>
          ) : (
            <TextInput
              name="licn_name"
              value={insertData.licn_name}
              onChange={handleInputChange}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text>發照單位</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_unit
                ? currentUserInfo.licn_unit
                : "---"}
            </Text>
          ) : (
            <TextInput
              name="licn_unit"
              value={insertData.licn_unit}
              onChange={handleInputChange}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text>發照日期</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_issue
                ? currentUserInfo.licn_issue
                : "---"}
            </Text>
          ) : (
            <TextInput
              type="date"
              name="licn_issue"
              value={insertData.licn_issue}
              onChange={handleInputChange}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text>有效日期</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_exp
                ? currentUserInfo.licn_exp
                : "---"}
            </Text>
          ) : (
            <TextInput
              type="date"
              name="licn_exp"
              value={insertData.licn_exp}
              onChange={handleInputChange}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text>下次審驗日期</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.licn_examine_date
                ? currentUserInfo.licn_examine_date
                : "---"}
            </Text>
          ) : (
            <TextInput
              type="date"
              name="licn_examine_date"
              value={insertData.licn_examine_date}
              onChange={handleInputChange}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text style={{ alignSelf: "baseline" }}>證照檔案</Text>
          {isDisabled ? (
            <Pane>
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
          ) : (
            <>
              <TextInput type="file" id="file" ref={uploadRef} display="none" />
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
          )}
        </Pane>
        <Pane className="input-line">
          <Text>失效</Text>
          {isDisabled ? (
            <Text>
              {currentUserInfo && currentUserInfo.invalid
                ? currentUserInfo.invalid
                : "---"}
            </Text>
          ) : (
            <Checkbox
              name="invalid"
              label=""
              checked={invalidChecked}
              onChange={(e: any) => setInvalidChecked(e.target.checked)}
            />
          )}
        </Pane>
        <Pane className="input-line">
          <Text>失效備註</Text>
          {isDisabled ? (
            <>
              <Text>
                {currentUserInfo && currentUserInfo.invalid_remark
                  ? currentUserInfo.invalid_remark
                  : "---"}
              </Text>
              <Pane></Pane>
            </>
          ) : (
            <Textarea
              name="invalid_remark"
              value={insertData.invalid_remark}
              onChange={handleInputChange}
            />
          )}
        </Pane>
      </div>
    </BodySTY>
  );
}

export default DriverLicense;
