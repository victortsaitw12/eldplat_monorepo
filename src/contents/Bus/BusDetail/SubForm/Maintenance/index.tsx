import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../../bus.type";
import styled from "styled-components";
import {
  getMaintenanceByFilter,
  busMaintenaceParser,
  busMaintenacePattern,
  I_Maintenance
} from "@services/bus/getMaintenanceByFilter";
import { I_PageInfo } from "@components/PaginationField";
import { mappingQueryData } from "@utils/mappingQueryData";
import FilterWrapper from "@layout/FilterWrapper";
import Table from "@components/Table/Table";
import { useBusStore } from "@contexts/filter/busStore";
import PaginationField from "@components/PaginationField";

interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
  busId: string;
}

const BodySTY = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const maintenanceTitle = [
  "維保單號",
  "維保日期",
  "任務狀態",
  "維保里程",
  "分類",
  "維修廠",
  "項目",
];

const DUMMY_FILTER = [
  {
    field_Name: "maintenance_quote_no",
    arrayConditions: ["like", "equal"],
    displayType: "search",
    dataType: "string",
    label: "單號"
  },
  {
    field_Name: "DUMMY_TYPE",
    arrayConditions: ["like", "equal"],
    displayType: "fix",
    dataType: "string",
    label: "分類"
  }
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
  const [pageInfo, setPageInfo] = useState<I_PageInfo>({
    Arrangement: "desc",
    Orderby: null,
    Page_Index: 1,
    Page_Size: 10,
    Last_Page: 10
  });
  const router = useRouter();

  async function fetchMaintenanceData(
    isCanceled: boolean,
    busId: string,
    pageInfo: I_PageInfo
  ) {
    getMaintenanceByFilter(busId, pageInfo).then((res) => {
      if (isCanceled) {
        return;
      }
      // const busMaintenanceData = mappingQueryData(
      //   res.contentList,
      //   busMaintenacePattern,
      //   busMaintenaceParser
      // );

      const busMaintenanceData = res.resultList;

      if (!subFilter) {
        localStorage.setItem(
          "maintenanceInitFilter",
          // JSON.stringify(busMaintenanceData.conditionList)
          JSON.stringify(DUMMY_FILTER)
        );
        initializeSubFilter();
      }

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

  const changeKey = (data: Array<I_Maintenance>) => {
    return data.map((item: I_Maintenance) => {
      return {
        id: item["id"],
        maintenance_no: item["maintenance_no"],
        maintenance_date: item["maintenance_date"],
        maintenance_status: item["maintenance_status"],
        distance: item["distance"],
        category: item["category"],
        repair_garage: item["repair_garage"],
        maintenance_item: item["maintenance_item"]
      };
    });
  };

  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const modifiedData = busMaintenanceData
    ? changeKey(busMaintenanceData)
    : undefined;

  console.log("modifiedData", modifiedData);

  const handleView = () => {
    console.log("handle view");
  };

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      ></FilterWrapper>
      <Table
        titles={maintenanceTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default Maintenance;
