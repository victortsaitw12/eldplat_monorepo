import React from "react";
import { SelectField, TextInputField } from "evergreen-ui";

interface I_Props {
  popContent: {};
  ddlOptions: any[];
}

export interface I_PopContent {
  title: string;
  parentOrgId: string;
  newOrgName: string;
}

export const defaultPopContent = {
  title: "新增下級",
  parentOrgId: "",
  newOrgName: ""
};

const ModalContent = ({ popContent, ddlOptions }: I_Props) => {
  const ddlOps = ddlOptions.map((item: any, i: number) => (
    <option key={`parentOps-${i}`} value={item.id}>
      {item.label}
    </option>
  ));

  return (
    <>
      <SelectField label="父層組織">
        {ddlOps}
        <option value="bar">Bar</option>
      </SelectField>
      <TextInputField label="組織名稱" placeholder="請輸入組織名稱" />
    </>
  );
};

export default ModalContent;
