import { Select, TextInput, Textarea } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_AccountDetailItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const ChangePasswordInfoBox = () => {
  //------ functions ------//
  // ------- render ------- //
  const dataFitInfoBox = [
    {
      readonly: false,
      req: true,
      label: "目前密碼",
      editEle: <TextInput />,
      value: ""
    },
    {
      readonly: false,
      req: true,
      label: "新密碼",
      editEle: <TextInput />,
      value: ""
    },
    {
      readonly: false,
      req: true,
      label: "再次輸入密碼",
      editEle: <TextInput />,
      value: ""
    }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={true} infoData={dataFitInfoBox} infoTitle="修改密碼" />
    </BodySTY>
  );
};

export default ChangePasswordInfoBox;

interface I_Props {
  data: I_AccountDetailItem;
  isEdit: boolean;
}
