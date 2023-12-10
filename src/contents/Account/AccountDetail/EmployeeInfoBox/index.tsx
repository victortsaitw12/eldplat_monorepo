import React from "react";
import { Select, TextInput, Textarea } from "evergreen-ui";
import {
  FieldErrors,
  UseFormRegister,
  Control,
  Controller,
  UseFormSetValue
} from "react-hook-form";
import { BodySTY } from "./style";

import { I_AccountDetailItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import InvitSatus from "@contents/Account/AccountList/InvitSatus";
import {
  textValidation,
  textValidationAllowBlank
} from "@utils/hookFormValidation";
import CustomTextInput from "@components/CustomTextInput";
import HookFormMultiSelect from "@components/HookForm/Select/MultiSelect";
import { I_AccountDDLItem } from "@services/account/getAccountDDL";

const EmployeeInfoBox = ({
  data,
  ddl,
  isEdit,
  register,
  control,
  setValue,
  getValues
}: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//

  // TODO only for DEMO purpose
  const handleOrgNameChage = (e: any) => {
    const orgName = e.target.value.map((item: string) => {
      return ddl.org_no.find((org) => org.value === item)?.label;
    });

    setValue("org_name", orgName);
  };

  // ------- render ------- //

  const options = [
    ...ddl.org_no.map((item) => ({ label: item.label, value: item.value }))
  ];

  const values = data.org_no;

  const labels = data.org_name?.join("/");

  const dataFitInfoBox = [
    {
      readonly: false,
      req: true,
      label: "隸屬組織",
      editEle: (
        <div className="org__select">
          <HookFormMultiSelect
            name="org_no"
            control={control}
            options={options}
            isDisabled={!isEdit}
            rules={{
              onChange: handleOrgNameChage,
              required: true,
              validate: {
                length: (v) => v.length > 0 || "必填欄位"
              }
            }}
          />
        </div>
      ),

      value: data.porg_name.concat("/", labels) || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: false,
      label: "員工編號",
      editEle: (
        <CustomTextInput
          className="required"
          placeholder="請輸入員工編號"
          {...register("staff_no", {
            required: false,
            validate: textValidationAllowBlank
          })}
        />
      ),

      value: data.staff_no || "--"
    },
    {
      readonly: false,
      req: false,
      label: "職稱",
      editEle: (
        <TextInput
          placeholder="請輸入職稱"
          {...register("job_title", {
            required: false,
            validate: textValidationAllowBlank
          })}
        />
      ),
      value: data.job_title || "--"
    },
    isEdit
      ? {}
      : {
          readonly: false,
          req: true,
          label: "帳號狀態",
          editEle: "",
          value:
            (
              <InvitSatus
                value={data.invt_sts || "03"}
                {...register("invt_sts")}
              />
            ) || "--"
        }
  ];
  return (
    <BodySTY className="employee">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="職員資料" />
    </BodySTY>
  );
};

export default EmployeeInfoBox;

interface I_Props {
  data: I_AccountDetailItem;
  ddl: I_AccountDDLItem;
  isEdit: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
}
