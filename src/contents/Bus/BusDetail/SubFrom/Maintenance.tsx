import React, { useState } from "react";
import { SelectField, Pane } from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupColumn, {
  RadioColumnField
} from "@components/RadioGroupColumn";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import TableWithEdit from "@components/Table/TableWithEdit";
//
import { getBusTitle } from "@services/bus/getAllBuses";
import styled from "styled-components";
import { useRouter } from "next/router";
//
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
}
//
const maintenace_info = [
  {
    label: "",
    value: ""
  }
];
//
const BodySTY = styled.div`
  padding: 1rem;
  background-color: #fff;
  overflow-x: auto;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding: 30px 20px;
`;
//
const maintenanceTitle = [
  "維保序號",
  "日期",
  "里程數",
  "供應商",
  "項目",
  "類別",
  "派工單",
  "派車單"
];
function Maintenance({ register, errors, getValues, control, isEdit }: Props) {
  const router = useRouter();
  return (
    <FlexWrapper padding="0">
      <BodySTY>
        <TableWithEdit
          tableName="維保計劃"
          cleanTableName="維保計劃"
          titles={maintenanceTitle}
          data={[]}
          goToCreatePage={(e) => {
            e.preventDefault();
            router.push("/maintenance/mission");
            console.log("goToCreatePage");
          }}
          deleteItem={() => {
            console.log("deleteItem");
          }}
          goToEditPage={() => {
            console.log("goToEditPage");
          }}
          viewItem={() => {
            console.log("viewItem");
          }}
        />
      </BodySTY>
    </FlexWrapper>
  );
}

export default Maintenance;
