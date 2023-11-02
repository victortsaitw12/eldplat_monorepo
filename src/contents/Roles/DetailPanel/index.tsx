import { useRouter } from "next/router";
import { SelectField, TextInputField, TextareaField } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleItem } from "@services/role/getRoleList";
import { IconLeft } from "@components/Button/Primary";
import TableWithEdit from "@components/Table/TableWithEdit";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import PaginationField from "@components/PaginationField";
import InfoBox from "@components/InfoBox";
import Requred from "@components/Required";
import LoadingSpinner from "@components/LoadingSpinner";

const DetailPanel = ({ data }: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//
  console.log("🈶 data:", data);
  // ------- render ------- //
  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "模組",
      editEle: (
        <SelectField disabled>
          <option value="foo" selected>
            {data.module_name || "--"}
          </option>
        </SelectField>
      ),

      value: data.module_name || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "角色名稱",
      editEle: (
        <TextInputField className="required" placeholder="請輸入角色名稱" />
      ),

      value: data.role_name || "--"
    },
    {
      readonly: false,
      req: true,
      label: "職責描述",
      editEle: (
        <TextInputField
          placeholder="請輸入職責描述"
          style={{ minHeight: "64px" }}
        />
      ),
      value: data.description || "--"
    }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={true} infoData={dataFitInfoBox} infoTitle="角色明細" />
    </BodySTY>
  );
};

export default DetailPanel;

interface I_Props {
  data: I_RoleItem;
}
