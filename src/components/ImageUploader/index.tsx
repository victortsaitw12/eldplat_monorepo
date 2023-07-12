import { FileUploader, FileRejection, CrossIcon } from "evergreen-ui";
import Image from "next/image";
import React from "react";
import { BodySTY, StyledButton } from "./style";
interface Props {
  isEdit: boolean;
}
const ImageUploader = ({ isEdit }: Props) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileRejections, setFileRejections] = React.useState<FileRejection[]>(
    []
  );
  const handleChange = React.useCallback((files: File[]) => {
    setFiles([files[0]]);
  }, []);
  const handleRejected = React.useCallback(
    (fileRejections: FileRejection[]) => setFileRejections([fileRejections[0]]),
    []
  );
  const handleRemove = React.useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);
  return (
    <BodySTY>
      <FileUploader
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
        browseOrDragText={() => "上傳照片"}
        disabled={!isEdit}
        renderFile={(file) => {
          return (
            <div>
              <Image
                src={URL.createObjectURL(file)}
                fill
                style={{ objectFit: "fill" }}
                alt="upload image"
              />
              <StyledButton onClick={handleRemove}>
                <CrossIcon />
              </StyledButton>
            </div>
          );
        }}
        values={files}
      />
    </BodySTY>
  );
};
export default ImageUploader;
