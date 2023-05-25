import {
  Button,
  Pane,
  Select,
  Text,
  Textarea,
  TextInput,
  MediaIcon,
  UploadIcon,
  IconButton,
  SelectField
} from "evergreen-ui";
import React, { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";

import { licn_typ_MAP } from "./data";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import InfoBox from "@components/InfoBox";
import FileUploaderMulti from "@contents/Driver/FileUploaderMulti";

interface Props {
  userId: string;
  isEdit: boolean;
  currentUserInfo: any;
  isLoading: boolean;
}

// userId={userId}
// isEdit={isEdit}
// currentUserInfo={currentUserInfo}
// isLoading={isLoading}

function DriverLicense({ userId, isEdit, currentUserInfo, isLoading }: Props) {
  const [invalidChecked, setInvalidChecked] = useState<boolean>(false);
  const uploadRef = useRef<HTMLInputElement | null | any>(null);
  const { register, errors, control, handleSubmit } = useFormContext();

  const trimFileName = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex !== -1) return fileName.substring(0, lastDotIndex);
    return fileName;
  };
  const handleUploadClick = () => {
    uploadRef.current.click();
  };
  const formatDate = (dateStr: string) => {
    if (!dateStr) return;
    const formatedDate = dateStr.replaceAll("-", " / ");
    return formatedDate;
  };

  const license_info = [
    {
      req: true,
      label: "證照種類",
      value: licn_typ_MAP.get(currentUserInfo.licn_typ)?.label || "---",
      editEle: (
        <SelectField
          className="inputField"
          key="licn_typ"
          {...register("licn_typ", {
            required: "必填"
          })}
        >
          {Array.from(licn_typ_MAP).map(([key, value]) => (
            <option key={`licn-${key}`} value={key}>
              {value.label}
            </option>
          ))}
        </SelectField>
      )
    },
    {
      req: true,
      label: "證照名稱",
      value: currentUserInfo.licn_name || "---",
      editEle: (
        <TextInput
          key="licn_name"
          {...register("licn_name", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "發照單位",
      value: currentUserInfo.licn_unit || "---",
      editEle: (
        <TextInput
          key="licn_unit"
          {...register("licn_unit", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "發照日期",
      value: formatDate(currentUserInfo.licn_issue) || "---",
      editEle: (
        <TextInput type="date" key="licn_issue" {...register("licn_issue")} />
      )
    },
    {
      req: true,
      label: "有效日期",
      value: formatDate(currentUserInfo.licn_exp) || "---",
      editEle: (
        <TextInput type="date" key="licn_exp" {...register("licn_exp")} />
      )
    },
    {
      req: true,
      label: "下次審驗日期",
      value: formatDate(currentUserInfo.licn_examine_Date) || "---",
      editEle: (
        <TextInput
          type="date"
          key="licn_examine_Date"
          {...register("licn_examine_Date")}
        />
      )
    },
    {
      req: true,
      label: "證照檔案",
      value: (
        <>
          <Pane style={{ border: "none" }}>
            <Text>
              {currentUserInfo && currentUserInfo.licn_filename
                ? trimFileName(currentUserInfo.licn_filename)
                : "尚未上傳證照"}
            </Text>
            {currentUserInfo && currentUserInfo.licn_filename && (
              <Pane className="licnFileBox">
                <IconButton className="mediaIcon" icon={MediaIcon} />
                <div className="licnFileInfo">
                  {currentUserInfo && currentUserInfo.licn_filename
                    ? currentUserInfo.licn_filename
                    : "---"}
                  <div className="fileSize">1.2MB</div>
                </div>
              </Pane>
            )}
          </Pane>
        </>
      ),
      editEle: (
        <>
          <TextInput type="file" id="file" ref={uploadRef} display="none" />
          <div className="license-file-container">
            <Button
              className="license-file-btn"
              iconBefore={UploadIcon}
              appearance="primary"
              onClick={(e: any) => {
                e.preventDefault();
                handleUploadClick();
              }}
            >
              上傳證照檔案
            </Button>
            {/* <FileUploaderMulti /> */}
          </div>
        </>
      )
    },
    {
      req: true,
      label: "失效",
      value: currentUserInfo.invalid || "---",
      editEle: (
        <input
          className="checkbox"
          key="invalid"
          type="checkbox"
          {...register("invalid")}
        />
      )
    },
    {
      req: true,
      label: "失效備註",
      value: currentUserInfo.invalid_remark || "---",
      editEle: <Textarea key="invalid_remark" {...register("invalid_remark")} />
    }
  ];

  return (
    <>
      {!isLoading && currentUserInfo && (
        <>
          <InfoBox
            isEdit={isEdit}
            infoData={license_info}
            infoTitle="駕駛證照"
          />
        </>
      )}
    </>
  );
}

export default DriverLicense;
