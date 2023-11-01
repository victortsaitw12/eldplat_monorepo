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

const RoleDetail = ({ data }: I_Props) => {
  //------ functions ------//

  // ------- render ------- //
  const dataFitInfoBox = [
    {
      editEle: (
        <SelectField label="模組" disabled>
          <option value="foo" selected>
            車輛管理與營運模組{" "}
          </option>
        </SelectField>
      ),
      readonly: false,
      req: true
      // value?: string | Array<string> | React.ReactNode,
      // label?: string | React.ReactNode;
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      editEle: <TextInputField label="角色名稱" placeholder="請輸入角色名稱" />,
      readonly: false,
      req: true
      // value?: string | Array<string> | React.ReactNode,
      // label?: string | React.ReactNode;
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      editEle: (
        <TextInputField
          label="職責描述"
          // description="This is a description."
          placeholder="請輸入職責描述"
        />
      ),
      readonly: false,
      req: true
      // value?: string | Array<string> | React.ReactNode,
      // label?: string | React.ReactNode;
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={true} infoData={dataFitInfoBox} infoTitle="角色明細" />
    </BodySTY>
  );
};

export default RoleDetail;

interface I_Props {
  data: I_RoleItem[];
}
