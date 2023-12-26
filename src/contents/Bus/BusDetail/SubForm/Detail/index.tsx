import React, { useState } from "react";
import Image from "next/image";
import { Pane, Group } from "evergreen-ui";
import { DivSTY } from "./style";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import { BusDataTypes } from "../../../bus.type";
import FinanceDetail from "./SubTabs/Finance";
import MainDetail from "./SubTabs/MainDetail";
import MaintenanceDetail from "./SubTabs/Maintenance";
import SpecificationDetail from "./SubTabs/Specification";

interface Props {
  currentTab: string;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  setValue: UseFormSetValue<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  busOptions: any;
  isEdit: boolean;
  fetchDDL: (v: any) => void;
  className?: string;
}

function Details({
  currentTab,
  register,
  errors,
  getValues,
  setValue,
  control,
  isEdit,
  busOptions,
  fetchDDL,
  className
}: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isDriverDDLLoading, setIsDriverDDLoading] = useState<boolean>(false);

  const handleDriverGroupChange = async (e: any) => {
    setIsDriverDDLoading(true);
    setValue("bus.operator_no", "");
    setValue("bus.operator_bus_group_name", e.target.label);
    const bus_group = e.target.value;
    await fetchDDL(bus_group);
    setIsDriverDDLoading(false);
  };

  return (
    <DivSTY>
      {currentTab === "1" && <MainDetail isEdit={isEdit} />}
      {currentTab === "2" && <MaintenanceDetail isEdit={isEdit} />}
      {currentTab === "3" && <FinanceDetail isEdit={isEdit} />}
      {currentTab === "4" && <SpecificationDetail isEdit={isEdit} />}
    </DivSTY>
  );
}

export default Details;
