import { useState, useRef, useEffect } from "react";
import { NewUploaderSTY } from "./style";
import {
  InlineAlert,
  ExportIcon,
  toaster,
  PaperclipIcon,
  SmallTickIcon,
  TrashIcon,
  Pane
} from "evergreen-ui";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import FileCard from "@components/FileCard";

interface I_NewUploader {
  existedFiles?: File[];
  isMultiple?: boolean;
  maxSize?: number;
  isEditable?: boolean;
}

const NewUploader = (props: I_NewUploader) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const {
    existedFiles = null,
    isMultiple = false,
    maxSize = 5,
    isEditable = false
  } = props;
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

      {/*🦭上方是為了切版展示，下方的邏輯才是正確的 */}
      {existedFiles || files ? (
        <FileCard existedFiles={existedFiles}>
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
        </FileCard>
      ) : (
        <FileCard />
      )}
      {/* {(existedFiles || files) && (
        <FileCard existedFiles={existedFiles}>
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
        </FileCard>
      )} */}
    </NewUploaderSTY>
  );
};

export default NewUploader;
