import { Select, TextInput, Textarea } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_UserDetailItem } from "@services/account/getUserDetail";
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
          <option value="foo" selected>
            {data.account_no || "--"}
          </option>
        </Select>
      ),

      value: data.account_no || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "員工編號",
      editEle: <TextInput className="required" placeholder="請輸入員工編號" />,

      value: data.account_no || "--"
    },
    {
      readonly: false,
      req: true,
      label: "職稱",
      editEle: <TextInput placeholder="請輸入職稱" />,
      value: data.account_no || "--"
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
  data: I_UserDetailItem;
  isEdit: boolean;
}
