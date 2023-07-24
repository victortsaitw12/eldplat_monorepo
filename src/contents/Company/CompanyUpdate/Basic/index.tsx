import React, { useCallback, useContext, useState } from "react";
import {
  FileCard,
  FileUploader,
  Heading,
  Pane,
  Text,
  TextInput
} from "evergreen-ui";

import { BodySTY } from "./style";
import {
  CompanyContext,
  I_Company_Context
} from "@contexts/companyContext/companyProvider";

function Basic({}) {
  const { companyData, handleCompanyBasicChange, errMsg } =
    useContext<I_Company_Context>(CompanyContext);

  // 上傳照片 ------
  const [files, setFiles] = useState<any[]>([]);
  const [fileRejections, setFileRejections] = useState<any[]>([]);
  const handleChangeFile = (files: any[]) => {
    setFiles([files[0]]);
    // const newFile = { ...insertData };
    // newFile.user_photo_link = files[0].name;
    // setInsertData(newFile);
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

  return (
    <BodySTY>
      <Heading is="h4">公司基本資料</Heading>
      <form>
        <Pane className="input-line">
          <Text className="">序號</Text>
          <Text>123456789</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司編號</Text>
          <Text>{companyData.company_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">代理商編號</Text>
          <Text>{companyData.agent_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司名稱</Text>
          <Pane>
            <TextInput
              name="company_name"
              value={companyData.company_name}
              onChange={handleCompanyBasicChange}
            />
            {errMsg["errField"] === "company_name" && (
              <Text color="red !important">{errMsg["errText"]}</Text>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text className="">統一編號</Text>
          <Text>{companyData.company_gui_no}</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">公司類型</Text>
          <Text>運輸業</Text>
        </Pane>
        <Pane className="input-line">
          <Text className="">負責人</Text>
          <TextInput
            name="company_owner"
            value={companyData.company_owner}
            onChange={handleCompanyBasicChange}
          />
        </Pane>

        {/* 上傳照片 */}
        <Pane maxWidth={654} className="upload-file-frame">
          <FileUploader
            className="upload-file"
            maxSizeInBytes={50 * 1024 ** 2} // 50MB上限
            maxFiles={1}
            onChange={handleChangeFile}
            onRejected={handleRejected}
            browseOrDragText={() => {
              return (
                <Text color="#567190" marginTop={10} fontWeight={400}>
                  添加公司 LOGO
                </Text>
              );
            }}
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
