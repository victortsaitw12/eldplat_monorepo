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
import { BodySTY } from "./style";
import IconBtn from "@components/Button/IconBtn";
// import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { PlusIcon } from "evergreen-ui";

interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
  busId: string;
}

export interface I_EditHistory {
  id: string;
  description: string;
  editor: string;
  edit_time: string;
}

const editHistoryTitle = ["修改說明", "修改人員", "修改時間"];

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

const DUMMY_DATA = {
  statusCode: "200",
  message: "OK",
  resultList: [
    {
      id: "1",
      description: "編輯加油卡號",
      editor: "林筠紹",
      edit_time: "2022-11-11 13:40"
    },
    {
      id: "2",
      description: "新增該車輛資料車輛資料",
      editor: "王薇翔",
      edit_time: "2022-11-11 10:30"
    }
  ],
  pageInfo: {
    Page_Index: 1,
    Page_Size: 10,
    Orderby: null,
    Arrangement: "desc",
    Total: 4,
    Last_Page: 9
  }
};

function FuelRecord({
  register,
  errors,
  getValues,
  control,
  isEdit,
  busId
}: Props) {
  const [editData, setEditData] = useState<any>(null);
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

      const editData = DUMMY_DATA.resultList;

      if (!subFilter) {
        localStorage.setItem(
          "maintenanceInitFilter",
          // JSON.stringify(fuelData.conditionList)
          JSON.stringify(DUMMY_FILTER)
        );
        initializeSubFilter();
      }

      setEditData(editData);
      setPageInfo(DUMMY_DATA.pageInfo);
    });
  }

  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceData(isCanceled, busId, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [busId]);

  const changeKey = (data: Array<I_EditHistory>) => {
    return data.map((item: I_EditHistory) => {
      return {
        id: item["id"],
        description: item["description"],
        editor: item["editor"],
        edit_time: item["edit_time"]
      };
    });
  };

  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const modifiedData = editData ? changeKey(editData) : undefined;

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      />
      <Table
        titles={editHistoryTitle}
        data={modifiedData}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default FuelRecord;
