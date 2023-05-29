import { I_Content_Props } from "@typings/employee_type";
import {
  Button,
  FileCard,
  FileUploader,
  Heading,
  Pane,
  RadioGroup,
  SelectField,
  SelectMenu,
  Text,
  TextInput
} from "evergreen-ui";
import React, { useCallback, useContext, useState } from "react";
import { genderOption_DATA } from "./data";
import { BodySTY } from "./style";
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";

// interface I_Basic_Props extends I_Content_Props {
//   setCountryNum: (t: string) => void;
// }

function Basic({
  handleEmployeeChange,
  insertData,
  setInsertData
}: I_Content_Props) {
  const { allCountries } = useContext<I_Region_Context>(RegionContext);

  // 性別選擇
  const handleChangeSex = (e: any) => {
    const newData = { ...insertData };
    newData.user_sex = e.target.value;
    setInsertData(newData);
  };

  // 上傳照片 ------
  const [files, setFiles] = useState<any[]>([]);
  const [fileRejections, setFileRejections] = useState<any[]>([]);
  const handleChangeFile = (files: any[]) => {
    setFiles([files[0]]);
    const newFile = { ...insertData };
    newFile.user_photo_link = files[0].name;
    setInsertData(newFile);
  };
  const handleRejected = useCallback(
    (fileRejections: any[]) => setFileRejections([fileRejections[0]]),
    []
  );
  const handleRemove = useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);
  // 上傳照片 end ------

  // const handleCountryNum = (e: any) => {
  //   if (e.target.value === "TW") {
  //     setCountryNum("(+886)");
  //   } else if (e.target.value === "JP") {
  //     setCountryNum("(+81)");
  //   } else if (e.target.value === "US") {
  //     setCountryNum("(+1)");
  //   }
  // };

  console.log("allCountries", allCountries);

  return (
    <BodySTY>
      <Heading is="h4">基本資料</Heading>
      <form>
        <Pane className="input-line">
          <Text className="required">姓</Text>
          <TextInput
            name="user_first_name"
            value={insertData.user_first_name}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text className="required">名</Text>
          <TextInput
            name="user_name"
            value={insertData.user_name}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>英文名</Text>
          <TextInput
            name="user_english_name"
            value={insertData.user_english_name}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>身分證字號</Text>
          <TextInput
            name="user_identity"
            value={insertData.user_identity}
            onChange={handleEmployeeChange}
            placeholder="外籍人士請填寫護照號碼"
          />
        </Pane>
        <Pane className="input-line nation-select-parent">
          <Text>國籍</Text>
          <SelectField
            label=""
            value={insertData.user_country}
            name="user_country"
            onChange={(e) => {
              handleEmployeeChange(e);
              // handleCountryNum(e);
            }}
          >
            {allCountries?.map((item) => (
              <option key={item.areaNo} value={item.areaNo}>
                {item.regionName}
              </option>
            ))}
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text>生日</Text>
          <TextInput
            type="date"
            name="user_birthday"
            value={insertData.user_birthday}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <RadioGroup
            className="gender-radio"
            label="性別"
            value={insertData.user_sex}
            options={genderOption_DATA}
            onChange={handleChangeSex}
          />
        </Pane>

        {/* 上傳照片 */}
        <Pane maxWidth={654}>
          <FileUploader
            maxSizeInBytes={50 * 1024 ** 2} // 50MB上限
            maxFiles={1}
            onChange={handleChangeFile}
            onRejected={handleRejected}
            renderFile={(file) => {
              const { name, size, type } = file;
              const fileRejection = fileRejections.find(
                (fileRejection) => fileRejection.file === file
              );
              const { message } = fileRejection || {};
              return (
                <FileCard
                  key={name}
                  isInvalid={fileRejection != null}
                  name={name}
                  onRemove={handleRemove}
                  sizeInBytes={size}
                  type={type}
                  validationMessage={message}
                />
              );
            }}
            values={files}
          />
        </Pane>
      </form>
    </BodySTY>
  );
}

export default Basic;
