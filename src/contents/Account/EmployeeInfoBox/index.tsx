import { Select, TextInput, Textarea } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_AccountDetailItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const EmployeeInfoBox = ({ data, isEdit }: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//
  // ------- render ------- //
  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "隸屬組織",
      editEle: (
        <Select>
          <option value={data.org_no} selected>
            {data.org_name || "--"}
          </option>
        </Select>
      ),

      value: data.org_name || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "員工編號",
      editEle: <TextInput className="required" placeholder="請輸入員工編號" />,

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
          value: data.invt_sts || "--"
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
}
