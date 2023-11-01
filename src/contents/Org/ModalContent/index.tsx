import React from "react";
import { TextInputField, Switch, Group } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { DivSTY } from "./style";

const ModalContent = ({ popContent }: I_Props) => {
  const isEdit = popContent.enabled ? true : false;
  return (
    <DivSTY className="modal">
      <TextInputField label="父層組織" value={popContent.parentName} />
      <TextInputField
        label="組織名稱"
        placeholder="請輸入組織名稱"
        value={popContent.newOrgName}
      />
      {isEdit && (
        <Group className="modal__status">
          <Switch height={16} name="status" checked={true} />
          <span>啟用</span>
        </Group>
      )}
    </DivSTY>
  );
};

export default ModalContent;

//====== OUTSIDE-REACT-DOM: FUNCTION ======//

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  popContent: I_PopContent;
}

export interface I_PopContent {
  title: string;
  parentOrgId: string;
  parentName: string;
  newOrgName: string;
  enabled?: boolean;
}

export const defaultPopContent = {
  title: "新增下級",
  parentOrgId: "",
  parentName: "",
  newOrgName: ""
};
