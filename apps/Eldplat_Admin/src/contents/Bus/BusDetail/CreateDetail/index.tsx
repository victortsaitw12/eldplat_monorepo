import React, { useState } from "react";
import { Pane, Group } from "evergreen-ui";
import { DivSTY } from "./style";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import FinanceDetail from "./SubTabs/Finance";
import MainDetail from "./SubTabs/MainDetail";
import MaintenanceDetail from "./SubTabs/Maintenance";
import SpecificationDetail from "./SubTabs/Specification";
interface Props {
  currentTab: string;
  isEdit: boolean;
  className?: string;
}

function CreateDetail({ currentTab, isEdit, className }: Props) {
  return (
    <DivSTY>
      {currentTab === "1" && <MainDetail isEdit={true} />}
      {currentTab === "2" && <MaintenanceDetail isEdit={true} />}
      {currentTab === "3" && <FinanceDetail isEdit={true} />}
      {currentTab === "4" && <SpecificationDetail isEdit={true} />}
    </DivSTY>
  );
}

export default CreateDetail;
