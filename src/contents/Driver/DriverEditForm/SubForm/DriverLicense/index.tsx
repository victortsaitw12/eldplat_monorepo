import { DRIVER_TYPE } from "@typings/driver_type";

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
  UploadIcon
} from "evergreen-ui";
import React, { useState, useRef } from "react";
import { licenseCate_DATA, licn_type_DATA } from "./data";
import { BodySTY } from "./style";

function DriverLicense({ insertData, setInsertData, handleInputChange }: any) {
  const [invalidChecked, setInvalidChecked] = useState<boolean>(false);
  const uploadRef = useRef<HTMLInputElement | null | any>(null);

  const handleUploadClick = () => {
    uploadRef.current.click();
  };
  return (
    <BodySTY>
      <Heading is="h4">駕駛證照</Heading>
      <form>
        <Pane className="input-line">
          <Text>證照種類</Text>
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
        </Pane>
        <Pane className="input-line">
          <Text>證照名稱</Text>
          <TextInput
            name="licn_name"
            value={insertData.licn_name}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>發照單位</Text>
          <TextInput
            name="licn_unit"
            value={insertData.licn_unit}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>發照日期</Text>
          <TextInput
            type="date"
            name="licn_issue"
            value={insertData.licn_issue}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>有效日期</Text>
          <TextInput
            type="date"
            name="licn_exp"
            value={insertData.licn_exp}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>下次審驗日期</Text>
          <TextInput
            type="date"
            name="licn_examine_date"
            value={insertData.licn_examine_date}
            onChange={handleInputChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>證照檔案</Text>
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
        </Pane>
        <Pane className="input-line">
          <Text>失效</Text>
          <Checkbox
            label=""
            checked={invalidChecked}
            onChange={(e: any) => setInvalidChecked(e.target.checked)}
          />
        </Pane>
        <Pane className="input-line">
          <Text>失效備註</Text>
          <Textarea
            name="invalid_remark"
            value={insertData.invalid_remark}
            onChange={handleInputChange}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default DriverLicense;
