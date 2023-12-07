import React from "react";
import { Select, TextInput, Textarea } from "evergreen-ui";
import {
  FieldErrors,
  UseFormRegister,
  Control,
  Controller
} from "react-hook-form";
import { BodySTY } from "./style";

import { I_AccountDetailItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import InvitSatus from "@contents/Account/AccountList/InvitSatus";
import { textValidation } from "@utils/hookFormValidation";
import CustomTextInput from "@components/CustomTextInput";
import HookFormMultiSelect from "@components/HookForm/Select/MultiSelect";

const EmployeeInfoBox = ({ data, isEdit, register, control }: I_Props) => {
  const [selectedOrg, setSelectedOrg] = React.useState<string[]>([]);

  const handleMultiSelect = (v: any[]) => {
    setSelectedOrg(v);
  };
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//

  // ------- render ------- //

  const options = [
    { label: "組織名稱", value: "" }, // 這個是 placeholder
    ...data.org_name.map((item) => ({ label: item, value: item }))
  ];

  const values = data.org_name.map((item) => item);
  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "隸屬組織",
      editEle: (
        <div className="org__select">
          {/* <HookFormMultiSelect
            options={options}
            isDisabled={!isEdit}
            control={control}
            formValue={values}
            onFormChange={handleMultiSelect}
          />
          <Select>
            <option value="" selected disabled>
              組織名稱
            </option>
            {data.org_name.map((item, i) => (
              <option key={`org_name-${i}`} value={item}>
                {data.org_name[i] || "--"}
              </option>
            ))}
          </Select>
          <div className="org__value">
            {data.porg_name.concat("/", data.org_name.join("/")) || "--"}
          </div> */}
        </div>
      ),

      value: data.porg_name.concat("/", data.org_name.join("/")) || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "員工編號",
      editEle: (
        <CustomTextInput
          className="required"
          placeholder="請輸入員工編號"
          {...register("staff_no", {
            required: false,
            validate: textValidation
          })}
        />
      ),

      value: data.staff_no || "--"
    },
    {
      readonly: false,
      req: true,
      label: "職稱",
      editEle: <TextInput placeholder="請輸入職稱" />,
      value: data.job_title || "--"
    },
    isEdit
      ? {}
      : {
          readonly: false,
          req: true,
          label: "帳號狀態",
          editEle: "",
          value: <InvitSatus value={data.invt_sts} /> || "--"
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
  isEdit: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  control: Control<any>;
}
