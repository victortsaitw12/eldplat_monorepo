import React, { useEffect, useState } from "react";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
import TableWithEdit from "@components/Table/TableWithEdit";
//
import styled from "styled-components";
import { getMaintenanceByFilter } from "@services/bus/getMaintenanceByFilter";
//
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
  busId: string;
}
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
function Maintenance({
  register,
  errors,
  getValues,
  control,
  isEdit,
  busId
}: Props) {
  const [busMaintenanceData, setBusMaintenanceData] = useState<any>(null);
  useEffect(() => {
    //TODO get busMaintenanceData
    getMaintenanceByFilter(busId).then((res) => {
      console.log("busMaintanceData", res);
    });
  }, [busId]);
  return (
    <FlexWrapper padding="0">
      <BodySTY>
        <TableWithEdit
          tableName="維保計劃"
          cleanTableName="維保計劃"
          titles={maintenanceTitle}
          data={[]}
          goToCreatePage={() => {
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
