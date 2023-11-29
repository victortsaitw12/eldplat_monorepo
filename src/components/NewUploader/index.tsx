import React, { useState } from "react";
import { NewUploaderSTY } from "./style";
import {
  Pane,
  InlineAlert,
  ExportIcon,
  toaster,
  PaperclipIcon,
  SmallTickIcon,
  TrashIcon
} from "evergreen-ui";
import SecondaryButton from "@components/Button/Secondary/IconLeft";

const DUMMY_FILES = [
  { name: "檔案1", url: "www.google.com", id: "1" },
  { name: "檔案2", url: "www.google.com", id: "2" },
  { name: "檔案3", url: "www.google.com", id: "3" }
];

interface I_File {
  name: string;
  url: string;
  id: string;
}

interface I_NewUploader {
  uploadedFiles: I_File[];
}

const NewUploader = (props: I_NewUploader) => {
  const { uploadedFiles } = props;
  return (
    <NewUploaderSTY>
      <InlineAlert intent="none" marginBottom={8} className={"inline-alert"}>
        檔案格式僅接受.png、.jpg、.jpeg、pdf 格式，且每個檔案大小不得大於5MB
      </InlineAlert>
      <SecondaryButton
        text="上傳檔案"
        className={"upload-button"}
        onClick={() => toaster.danger("檔案太大或格式不符")}
      >
        <ExportIcon />
      </SecondaryButton>
      <div className="uploaded-files">
        <span className="title">檔案</span>
        {DUMMY_FILES.map((file: any) => {
          return (
            <Pane className="content-wrapper" key={file.id}>
              <span className="icon">
                <PaperclipIcon />
              </span>
              <span className="file-name">{file.name}.pdf</span>
              <span className="check">
                <SmallTickIcon color="success" />
              </span>
              <button className="delete">
                <TrashIcon size={16} />
              </button>
            </Pane>
          );
        })}
      </div>
    </NewUploaderSTY>
  );
};

export default NewUploader;
