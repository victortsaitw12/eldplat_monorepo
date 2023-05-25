import React from "react";
import { Pane, FileUploader, Alert, FileCard, majorScale } from "evergreen-ui";
import { UploaderSTY } from "./style";

export default function FileUploaderMulti() {
  // const acceptedMimeTypes = [MimeType.jpeg, MimeType.pdf];
  const maxFiles = 2;
  const maxSizeInBytes = 5 * 1024 ** 2; // 5 MB
  const [files, setFiles] = React.useState([]);
  const [fileRejections, setFileRejections] = React.useState([]);
  const values = React.useMemo(
    () => [
      ...files,
      ...fileRejections.map((fileRejection) => fileRejection.file)
    ],
    [files, fileRejections]
  );
  const handleRemove = React.useCallback(
    (file) => {
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
        { maxFiles, maxSizeInBytes }
        // { acceptedMimeTypes, maxFiles, maxSizeInBytes }
      );

      setFiles(accepted);
      setFileRejections(rejected);
    },
    [files, fileRejections, maxFiles, maxSizeInBytes]
    // [acceptedMimeTypes, files, fileRejections, maxFiles, maxSizeInBytes]
  );

  const fileCountOverLimit = files.length + fileRejections.length - maxFiles;
  const fileCountError = `檔案數量限制: 2 個(jpg/pdf)檔案，請移除 ${fileCountOverLimit} ${
    fileCountOverLimit === 1 ? "個檔案" : "個檔案"
  }.`;

  return (
    <UploaderSTY>
      <Pane maxWidth={654}>
        <FileUploader
          className="drop-field "
          // acceptedMimeTypes={acceptedMimeTypes}
          label=" "
          description="可上傳至 2 個(jpg/pdf)檔案，檔案大小限制 5MB。"
          disabled={files.length + fileRejections.length >= maxFiles}
          maxSizeInBytes={maxSizeInBytes}
          maxFiles={maxFiles}
          onAccepted={setFiles}
          onRejected={setFileRejections}
          renderFile={(file, index) => {
            const { name, size, type } = file;
            const renderFileCountError = index === 0 && fileCountOverLimit > 0;

            // We're displaying an <Alert /> component to aggregate files rejected for being over the maxFiles limit,
            // so don't show those errors individually on each <FileCard />
            const fileRejection = fileRejections.find(
              (fileRejection) =>
                fileRejection.file === file &&
                fileRejection.reason !== FileRejectionReason.OverFileLimit
            );
            const { message } = fileRejection || {};

            return (
              <React.Fragment key={`${file.name}-${index}`}>
                {renderFileCountError && (
                  <Alert
                    intent="danger"
                    marginBottom={majorScale(2)}
                    title={fileCountError}
                  />
                )}
                <FileCard
                  isInvalid={fileRejection != null}
                  name={name}
                  onRemove={() => handleRemove(file)}
                  sizeInBytes={size}
                  type={type}
                  validationMessage={message}
                />
              </React.Fragment>
            );
          }}
          values={values}
        />
      </Pane>
    </UploaderSTY>
  );
}
