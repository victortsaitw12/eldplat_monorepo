import { useRouter } from "next/router";
import {
  SelectField,
  TextInputField,
  TextareaField,
  Checkbox
} from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleItem } from "@services/role/getRoleList";
import { IconLeft } from "@components/Button/Primary";
import TableWithEdit from "@components/Table/TableWithEdit";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import PaginationField from "@components/PaginationField";
import InfoBox from "@components/InfoBox";
import Requred from "@components/Required";

const AuthPanel = ({ data }: I_Props) => {
  //------ functions ------//

  // ------- render ------- //
  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "使用者管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "車輛管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "維保管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "駕駛管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "任務管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "訂單管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "客戶管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "供應商管理",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    },
    {
      readonly: false,
      req: false,
      label: "設定",
      editEle: <AuthCheckbox />,
      value: <AuthCheckbox />
    }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={true} infoData={dataFitInfoBox} infoTitle="權限" />
    </BodySTY>
  );
};

export default AuthPanel;

interface I_Props {
  data: I_RoleItem[];
}

const AuthCheckbox = () => {
  return (
    <>
      <Checkbox label="檢視" />
      <Checkbox label="新增" />
      <Checkbox label="編輯" />
      <Checkbox label="封存" />
    </>
  );
};
