import { Pane, FileUploader, FileCard } from "evergreen-ui";
import React from "react";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue
} from "react-hook-form";

interface I_InvoiceFile {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  arrayName: string;
  index: number;
  keyName: string;
}

const InvoiceFile = ({
  register,
  arrayName,
  index,
  setValue,
  getValues,
  keyName
}: I_InvoiceFile) => {
  const [files, setFiles] = React.useState<any[]>([]);
  const [fileRejections, setFileRejections] = React.useState<any[]>([]);
  //   const handleChange = React.useCallback(
  //     (files: any[]) => setFiles([files[0]]),
  //     []
  //   );
  const handleChange = (file: any) => {
    console.log("file:::::::::", file);
    setFiles((prev: any) => [...prev, file[0]]);
    localStorage.setItem("file", JSON.stringify(file[0]));

    // const newFile = `@${file[0].name};type=${file[0].type}`;
    setValue(`files[${index}]`, file[0]);
  };
  const handleRejected = React.useCallback(
    (fileRejections: any[]) => setFileRejections([fileRejections[0]]),
    []
  );
  const handleRemove = React.useCallback(() => {
    setFiles([]);
    setFileRejections([]);
  }, []);

  return (
    <Pane maxWidth={654}>
      <FileUploader
        key={keyName}
        maxSizeInBytes={50 * 1024 ** 2}
        maxFiles={1}
        onChange={handleChange}
        onRejected={handleRejected}
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
        // values={files}
        // {...register(`${arrayName}.${index}.files`)}
      />
    </Pane>
  );
};

export default InvoiceFile;
