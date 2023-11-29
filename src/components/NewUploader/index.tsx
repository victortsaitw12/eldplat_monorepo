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

// interface I_NewUploader {}
const NewUploader = () => {
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
        <Pane className="content-wrapper">
          <span className="icon">
            <PaperclipIcon />
          </span>
          <span className="file-name">檔案名稱.pdf</span>
          <button className="check">
            <SmallTickIcon color="success" />
          </button>
          <button className="delete" >
            <TrashIcon size={16}/>
          </button>
        </Pane>
      </div>
    </NewUploaderSTY>
  );
};

export default NewUploader;
