import React from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { TextInput, Select, Checkbox, Textarea, Button } from "evergreen-ui";
import { FormSTY } from "./style";

import { UpdateLicensePayload } from "@contents/Driver/driver.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import { formatDateFromAPI } from "@utils/formatDateFromAPI";
import { LICN_TYP } from "@services/getDDL";

interface Props {
  type: boolean; //true = 新增，false = 更新
  licensesData: any;
  btnRef: any;
  asyncSubmitForm: (data: any) => void;
}

function LicenseForm({ type, licensesData, btnRef, asyncSubmitForm }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdateLicensePayload>({
    defaultValues: type
      ? {
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
          no: licensesData.no.toString(),
          driver_no: licensesData.driver_no,
          licn_typ: licensesData.licn_typ,
          licn_name: licensesData.licn_name,
          licn_unit: licensesData.licn_unit,
          licn_issue: formatDateFromAPI(licensesData.licn_issue),
          licn_exp: formatDateFromAPI(licensesData.licn_exp),
          licn_examine_date: formatDateFromAPI(licensesData.licn_examine_Date),
          licn_filename: licensesData.licn_filename,
          licn_link: licensesData.licn_link
        }
  });
  const [checked, setChecked] = React.useState(false);

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
      label: "證照檔案",
      editEle: (
        <Button
          marginRight={16}
          appearance="primary"
          {...register("licn_examine_date")}
        >
          Primary
        </Button>
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
    <FormSTY onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={btnRef} type="submit" style={{ display: "none" }}></button>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={true} infoData={licenseInfo} />
      </FlexWrapper>
    </FormSTY>
  );
}

export default LicenseForm;
