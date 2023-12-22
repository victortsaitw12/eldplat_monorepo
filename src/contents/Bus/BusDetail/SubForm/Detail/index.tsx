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
import InfoCard from "@components/InfoCard";
import {
  tagList,
  IdentityInfo,
  CategoryInfo,
  CardInfo,
  TagInFo,
  MaintenanceInfo,
  FinanceInfo,
  InsuranceInfo,
  SpecificationInfo,
  AppearanceInfo,
  WeightInfo,
  PerformanceInfo,
  EngineInfo,
  TireInfo,
  TransmissionInfo,
  EcoMileageInfo,
  FuelInfo,
  OilInfo
} from "./InfoCardData";
import styled from "styled-components";

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

export const BodySTY = styled.div``;

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
      {currentTab === "1" && (
        <Pane className={"detail"}>
          <InfoCard
            isEdit={isEdit}
            infoData={IdentityInfo}
            infoTitle="基本資料"
          />
          <Group className={"col-wrapper"}>
            {isEdit && (
              <InfoCard
                isEdit={isEdit}
                infoData={CategoryInfo}
                infoTitle="分類"
              />
            )}
            <InfoCard
              isEdit={isEdit}
              infoData={CardInfo}
              infoTitle="相關卡號"
            />
          </Group>
          <Pane className={"w-50"}>
            <InfoCard isEdit={isEdit} infoData={TagInFo} infoTitle="標籤" />
          </Pane>
        </Pane>
      )}

      {currentTab === "2" && (
        <Pane className={"maintenance"}>
          <InfoCard
            isEdit={isEdit}
            infoData={MaintenanceInfo}
            infoTitle="定期保養設定"
          />
        </Pane>
      )}

      {currentTab === "3" && (
        <Pane className={"finance"}>
          <InfoCard
            isEdit={isEdit}
            infoData={FinanceInfo}
            infoTitle="財務成本"
          />
          <InfoCard isEdit={isEdit} infoData={InsuranceInfo} infoTitle="保險" />
        </Pane>
      )}

      {currentTab === "4" && (
        <Pane className={"specification"}>
          <InfoCard
            isEdit={isEdit}
            infoData={SpecificationInfo}
            infoTitle="尺寸"
          />
          <Pane className={"row"}>
            <InfoCard
              isEdit={isEdit}
              infoData={AppearanceInfo}
              infoTitle="車身"
            />
            <InfoCard isEdit={isEdit} infoData={WeightInfo} infoTitle="重量" />
            <InfoCard
              isEdit={isEdit}
              infoData={PerformanceInfo}
              infoTitle="性能"
            />
          </Pane>
          <InfoCard isEdit={isEdit} infoData={EngineInfo} infoTitle="引擎" />
          <InfoCard
            isEdit={isEdit}
            infoData={TireInfo}
            infoTitle="車輪和輪胎"
          />
          <Pane className={"row"}>
            <InfoCard
              isEdit={isEdit}
              infoData={TransmissionInfo}
              infoTitle="變速器"
              height={365}
            />
            <InfoCard
              isEdit={isEdit}
              infoData={WeightInfo}
              infoTitle="重量"
              height={365}
            />
            <InfoCard
              isEdit={isEdit}
              infoData={EcoMileageInfo}
              infoTitle="EPA燃油經濟性/油耗表現"
              height={365}
            />
            <InfoCard
              isEdit={isEdit}
              infoData={FuelInfo}
              infoTitle="燃料"
              height={365}
            />
            <InfoCard
              isEdit={isEdit}
              infoData={OilInfo}
              infoTitle="機油"
              height={365}
            />
          </Pane>
        </Pane>
      )}
    </DivSTY>
  );
}

export default Details;
