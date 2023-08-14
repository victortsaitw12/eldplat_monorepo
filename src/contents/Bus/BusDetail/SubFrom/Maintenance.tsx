import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
import {
  getMaintenanceByFilter,
  busMaintenaceParser,
  busMaintenacePattern
} from "@services/bus/getMaintenanceByFilter";
import { PageInfoType } from "@services/type";
import { mappingQueryData } from "@utils/mappingQueryData";
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
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    arrangement: "desc",
    orderby: null,
    page_Index: 1,
    page_Size: 10,
    last_Page: 10
  });
  const router = useRouter();
  async function fetchMaintenanceData(
    isCanceled: boolean,
    busId: string,
    pageInfo: PageInfoType
  ) {
    getMaintenanceByFilter(busId, pageInfo).then((res) => {
      if (isCanceled) {
        return;
      }
      const busMaintenanceData = mappingQueryData(
        res.contentList,
        busMaintenacePattern,
        busMaintenaceParser
      );
      setBusMaintenanceData(busMaintenanceData);
      setPageInfo(res.pageInfo);
    });
  }

  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceData(isCanceled, busId, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [busId]);

  return (
    <FlexWrapper padding="0">
      <BodySTY>
        <TableWithEdit
          tableName="維保計劃"
          cleanTableName="維保計劃"
          titles={maintenanceTitle}
          data={busMaintenanceData}
          goToCreatePage={(e) => {
            e.preventDefault()
            router.push("/maintenance/mission");
          }}
          needAction={false}
          pageInfo={pageInfo}
        />
      </BodySTY>
    </FlexWrapper>
  );
}

export default Maintenance;
