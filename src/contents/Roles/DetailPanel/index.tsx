import { Select, TextInput, Textarea } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleItem } from "@services/role/getRoleList";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const DetailPanel = ({ data, isEdit }: I_Props) => {
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
        <Select disabled>
          <option value="foo" selected>
            {data.module_name || "--"}
          </option>
        </Select>
      ),

      value: data.module_name || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "角色名稱",
      editEle: <TextInput className="required" placeholder="請輸入角色名稱" />,

      value: data.role_name || "--"
    },
    {
      readonly: false,
      req: true,
      label: "職責描述",
      editEle: (
        <Textarea placeholder="請輸入職責描述" style={{ minHeight: "64px" }} />
      ),
      value: data.description || "--"
    }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="角色明細" />
    </BodySTY>
  );
};

export default DetailPanel;

interface I_Props {
  data: I_RoleItem;
  isEdit: boolean;
}
