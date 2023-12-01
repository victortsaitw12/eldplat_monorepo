import React, { useState, useCallback, useMemo } from "react";
import { NewUploaderSTY } from "./style";
import {
  Pane,
  InlineAlert,
  ExportIcon,
  toaster,
  PaperclipIcon,
  SmallTickIcon,
  TrashIcon,
  MimeType,
  rebaseFiles,
  FileRejectionReason
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
  uploadedFiles?: I_File[];
}

const NewUploader = (props: I_NewUploader) => {
  const { uploadedFiles } = props;

  const acceptedMimeTypes = [MimeType.jpeg, MimeType.pdf];
  const maxFiles = 5;
  const maxSizeInBytes = 50 * 1024 ** 2; // 50 MB
  const [files, setFiles] = useState<Array<any>>([]);
  const [fileRejections, setFileRejections] = useState<Array<any>>([]);
  const values = useMemo(
    () => [
      ...files,
      ...fileRejections.map((fileRejection) => fileRejection.file)
    ],
    [files, fileRejections]
  );
  const handleRemove = useCallback(
    (file: any) => {
      const updatedFiles = files.filter(
        (existingFile) => existingFile !== file
      );
      const updatedFileRejections = fileRejections.filter(
        (fileRejection) => fileRejection.file !== file
      );

      // Call rebaseFiles to ensure accepted + rejected files are in sync (some might have previously been
      // rejected for being over the file count limit, but might be under the limit now!)
      const { accepted, rejected } = rebaseFiles(
        [
          ...updatedFiles,
          ...updatedFileRejections.map((fileRejection) => fileRejection.file)
        ],
        { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      );

      setFiles(accepted);
      setFileRejections(rejected);
    },
    [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
  );

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
  const fileCountError = `You can upload up to 5 files. Please remove ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? "file" : "files"
  }.`;

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
