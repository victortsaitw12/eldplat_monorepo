import React, { useState, useRef } from "react";
import { NewUploaderSTY } from "./style";
import {
  Pane,
  InlineAlert,
  ExportIcon,
  toaster,
  PaperclipIcon,
  SmallTickIcon,
  TrashIcon,
} from "evergreen-ui";
import SecondaryButton from "@components/Button/Secondary/IconLeft";

// const DUMMY_FILES: File[] = [
//   new File([], "fakeImage1.jpg", { type: "image/jpeg" }),
//   new File([], "fakeImage2.png", { type: "image/png" }),
//   new File([], "fakeDocument1.pdf", { type: "application/pdf" })
// ];

interface I_NewUploader {
  existedFiles?: File[];
  isMultiple?: boolean;
  maxSize?: number;
}

const NewUploader = (props: I_NewUploader) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const { existedFiles = null, isMultiple = false, maxSize = 5 } = props;
  const hiddenFileInput = useRef<any>(null);

  // const maxFiles = 5;
  const maxSizeInBytes = maxSize * 1024 ** 2; // 5 MB

  function isFileSizeValid(size: number): boolean {
    return size <= maxSizeInBytes;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;

    let isValid = true;

    if (uploadedFiles) {
      const uploadedFilesArray = Array.from(uploadedFiles);

      for (const file of uploadedFilesArray) {
        if (!isFileSizeValid(file.size)) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        setFiles(uploadedFilesArray);
      } else {
        toaster.danger("檔案太大或格式不符");
      }
    }
  };

  const handleClickUpload = () => {
    hiddenFileInput.current?.click();
  };

  const handleRemove = (file: File, fileArray: File[]) => {
    const updatedFileArray: File[] = [...fileArray].filter(
      (item) => item !== file
    );
    setFiles(updatedFileArray);
  };


  return (
    <NewUploaderSTY>
      <InlineAlert intent="none" marginBottom={8} className={"inline-alert"}>
        檔案格式僅接受.png、.jpg、.jpeg、pdf 格式，且每個檔案大小不得大於5MB
      </InlineAlert>
      <SecondaryButton
        text="上傳檔案"
        className={"upload-button"}
        onClick={handleClickUpload}
      >
        <ExportIcon />
      </SecondaryButton>
      <input
        ref={hiddenFileInput}
        type="file"
        multiple={isMultiple}
        accept=".png, .jpg, .jpeg, .pdf"
        onChange={handleFileChange}
      />
      {(existedFiles || files) && (
        <div className="uploaded-files">
          <span className="title">檔案</span>
          {existedFiles &&
            existedFiles.map((file: any) => {
              return (
                <Pane className="content-wrapper existed" key={file.id}>
                  <span className="icon">
                    <PaperclipIcon />
                  </span>
                  <span className="file-name">{file.name}</span>
                  <button
                    className="delete"
                    onClick={() => handleRemove(file, existedFiles)}
                  >
                    <TrashIcon size={16} />
                  </button>
                </Pane>
              );
            })}

          {files &&
            Array.from(files).map((file) => {
              return (
                <Pane className="content-wrapper " key={file.name}>
                  <span className="icon">
                    <PaperclipIcon />
                  </span>
                  <span className="file-name">{file.name}</span>
                  <span className="check">
                    <SmallTickIcon color="success" />
                  </span>

                  <button
                    className="delete"
                    onClick={() => handleRemove(file, files)}
                  >
                    <TrashIcon size={16} />
                  </button>
                </Pane>
              );
            })}
        </div>
      )}
    </NewUploaderSTY>
  );
};

export default NewUploader;
