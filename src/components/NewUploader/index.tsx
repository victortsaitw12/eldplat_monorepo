import React, { useState } from "react";
import { NewUploaderSTY } from "./style";
import { Textarea, Pane, InlineAlert, ExportIcon } from "evergreen-ui";
import SecondaryButton from "@components/Button/Secondary/IconLeft";

// interface I_NewUploader {}
const NewUploader = () => {

  return (
    <NewUploaderSTY>
      <InlineAlert intent="none" marginBottom={8} className={"inline-alert"}>
        檔案格式僅接受.png、.jpg、.jpeg、pdf 格式，且每個檔案大小不得大於5MB
      </InlineAlert>
      <SecondaryButton text="上傳檔案" className={"upload-button"}>
        <ExportIcon />
      </SecondaryButton>
    </NewUploaderSTY>
  );
};

export default NewUploader;
