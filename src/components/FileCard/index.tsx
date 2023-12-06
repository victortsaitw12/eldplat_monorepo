import React, { useState, useRef } from "react";
import { FileCardSTY } from "./style";
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

interface I_FileCard {
  existedFiles?: File[] | null;
  children?: any;
  isEdit?: boolean;
}

const FileCard = (props: I_FileCard) => {
  const { existedFiles = null, children, isEdit = false } = props;

  const handleRemove = () => {
    console.log("remove existed file");
  };

  return (
    <FileCardSTY>
      <div className="uploaded-files">
        <span className="title">檔案</span>
        <Pane className="content-wrapper existed">
          <span className="icon">
            <PaperclipIcon />
          </span>
          <span className="file-name">檔案名稱1.pdf</span>
          {isEdit && (
            <button className="delete" onClick={() => handleRemove()}>
              <TrashIcon size={16} />
            </button>
          )}
        </Pane>
        {children}
      </div>
      {/* {existedFiles && (
        <div className="uploaded-files">
          <span className="title">檔案</span>
          {existedFiles.map((file: any) => {
            return (
              <Pane className="content-wrapper existed" key={file.id}>
                <span className="icon">
                  <PaperclipIcon />
                </span>
                <span className="file-name">{file.name}</span>
                {isEdit && (
                  <button className="delete" onClick={() => handleRemove()}>
                    <TrashIcon size={16} />
                  </button>
                )}
              </Pane>
            );
          })}
          {children}
        </div>
      )} */}
    </FileCardSTY>
  );
};

export default FileCard;
