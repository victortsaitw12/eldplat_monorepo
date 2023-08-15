import React from "react";
import { useForm } from "react-hook-form";
import {
  TextInput,
  Select,
  Checkbox,
  Textarea,
  UploadIcon,
  Pane,
  Text,
  IconButton,
  DocumentIcon
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UpdateLicensePayload } from "@contents/Driver/driver.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import { formatDateFromAPI } from "@utils/formatDateFromAPI";
import { LICN_TYP } from "@services/getDDL";
import ButtonPrimaryRadius from "@components/Button/PrimaryRadius";

interface Props {
  editNo: number | null;
  licensesData: any[];
  btnRef: any;
  asyncSubmitCreateForm: (data: any) => void;
  asyncSubmitEditForm: (data: any) => void;
  driverNo: string;
}

function LicenseForm({
  editNo,
  licensesData,
  btnRef,
  asyncSubmitCreateForm,
  asyncSubmitEditForm,
  driverNo
}: Props) {
  const licenseData = licensesData.find(
    (item: any) => item.no?.toString() === editNo
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue
  } = useForm<UpdateLicensePayload>({
    defaultValues: !editNo
      ? {
          driver_no: driverNo,
          licn_typ: null,
          licn_name: null,
          licn_unit: null,
          licn_issue: null,
          licn_exp: null,
          licn_examine_date: null,
          licn_filename: null,
          licn_link: null
        }
      : {
          no: editNo?.toString(),
          driver_no: licenseData?.driver_no,
          licn_typ: licenseData?.licn_typ,
          licn_name: licenseData?.licn_name,
          licn_unit: licenseData?.licn_unit,
          licn_issue: formatDateFromAPI(licenseData?.licn_issue),
          licn_exp: formatDateFromAPI(licenseData?.licn_exp),
          licn_examine_date: formatDateFromAPI(licenseData?.licn_examine_date),
          licn_filename: licenseData?.licn_filename,
          licn_link: licenseData?.licn_link
        }
  });
  const [checked, setChecked] = React.useState(false);
  const [isUploadFile, setIsUpladFile] = React.useState(false);

  // ----- function ----- //
  const handleUploadClick = () => {
    alert("上傳檔案");
  };

  // 駕駛證照
  const licenseInfo = [
    {
      req: true,
      label: "證照種類",
      value: getValues("licn_typ") || "目前無資料",
      editEle: (
        <Select key="licn_typ" {...register("licn_typ")} marginBottom="0">
          {Object.keys(LICN_TYP).map((key) => (
            <option key={key} value={key}>
              {LICN_TYP[key].label}
            </option>
          ))}
        </Select>
      )
    },
    {
      req: true,
      label: "證照名稱",
      editEle: <TextInput {...register("licn_name")} />
    },
    {
      req: true,
      label: "發照單位",
      editEle: <TextInput {...register("licn_unit")} />
    },
    {
      req: true,
      label: "發照日期",
      editEle: <TextInput type="date" {...register("licn_issue")} />
    },
    {
      req: true,
      label: "有效日期",
      editEle: <TextInput type="date" {...register("licn_exp")} />
    },
    {
      req: true,
      label: "下次審驗日期",
      editEle: <TextInput type="date" {...register("licn_examine_date")} />
    },
    {
      req: true,
      label: "證照檔案", //    line-height: 20px;align-items: stretch;
      editEle: getValues("licn_filename") ? (
        <Pane>
          <Text>{getValues("licn_filename")}</Text>
          <Pane className="licnFileBox">
            <IconButton className="DocumentIcon" icon={DocumentIcon} disabled />
            <div className="licnFileInfo">
              {getValues("licn_filename")}
              <div className="fileSize">1.2MB</div>
            </div>
          </Pane>
        </Pane>
      ) : (
        <Pane>
          <ButtonPrimaryRadius
            type="button"
            className="license-file-btn"
            iconBefore={UploadIcon}
            onClick={() => {
              setIsUpladFile(true);
              setValue("licn_filename", `${getValues("licn_name")}.jpg`);
              setValue("licn_link", "uwww.eldplat.com/img0000");
            }}
          >
            {/* //TODO style this */}
            <input
              className="uploadFileBtn"
              type="file"
              name="licn_filename"
              accept="image/png, image/jpeg"
            />
            上傳證照檔案
          </ButtonPrimaryRadius>
        </Pane>
      )
    },
    {
      req: false,
      label: "失效",
      editEle: (
        <span style={{ minWidth: "16px" }}>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </span>
      )
    },
    {
      req: false,
      label: "失效備註",
      editEle: <Textarea name="invlid_remark" placeholder="備註限制50字元" />
    }
  ];
  return (
    <FormSTY
      onSubmit={handleSubmit(
        editNo ? asyncSubmitEditForm : asyncSubmitCreateForm
      )}
    >
      <button ref={btnRef} type="submit" style={{ display: "none" }}></button>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={true} infoData={licenseInfo} />
      </FlexWrapper>
    </FormSTY>
  );
}

export default LicenseForm;
