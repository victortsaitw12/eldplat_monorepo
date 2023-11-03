import { BodySTY } from "./style";

import { I_AuthFuncItem } from "@services/role/getRoleDetail";
import InfoBox from "@components/InfoBox";
import Checkbox from "@components/CheckBox";

const AuthPanel = ({ data, isEdit }: I_Props) => {
  //------ functions ------//

  // ------- render ------- //
  const dataFitInfoBox = data?.map((item) => {
    return {
      readonly: false,
      req: false,
      label: item.label,
      editEle: <AuthCheckbox isEdit={isEdit} />,
      value: <AuthCheckbox isEdit={isEdit} />
    };
  });
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="權限" />
    </BodySTY>
  );
};

export default AuthPanel;

const AuthCheckbox = ({ isEdit }: { isEdit: boolean }) => {
  return (
    <div className={`authCheckSet ${isEdit ? "" : "isView"}`}>
      <Checkbox label="檢視" isLabelAfter />
      <Checkbox label="新增" isLabelAfter />
      <Checkbox label="編輯" isLabelAfter />
      <Checkbox label="封存" isLabelAfter />
    </div>
  );
};

interface I_Props {
  data: I_AuthFuncItem[];
  isEdit: boolean;
}
