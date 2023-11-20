import React from "react";
import { Select, TextInput, Textarea, Switch } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleListItem } from "@services/role/getRoleList";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const DetailPanel = ({ data, isEdit }: I_Props) => {
  const [isEnabled, setIsEnabled] = React.useState(true);

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
      label: "模組",
      editEle: (
        <Select disabled>
          <option value="foo" selected>
            {data.module_name || "--"}
          </option>
        </Select>
      ),

      value: data.module_name || "--"
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
      value: data.role_desc || "--"
    },
    {
      readonly: false,
      req: true,
      label: "啟用",
      editEle: (
        <div>
          <Switch
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
          <span>啟用</span>
        </div>
      ),
      value:
        (
          <Switch
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
          />
        ) || "--"
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
  data: I_RoleListItem;
  isEdit: boolean;
}
