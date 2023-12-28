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
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
import { PlusIcon } from "evergreen-ui";

interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
  busId: string;
}

export interface I_Fuel {
  id: string;
  transaction_date: string;
  provider: string;
  driver: string;
  current_miles: string;
  fuel_level: string;
  amount: string;
}

const fuelTitle = [
  "交易日期",
  "供應商",
  "駕駛",
  "當下里程",
  "加油量",
  "交易金額",
  ""
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

const DUMMY_DATA = {
  statusCode: "200",
  message: "OK",
  resultList: [
    {
      id: "1",
      transaction_date: "2023-12-01",
      provider: "N072全國文德",
      driver: "簡中華",
      current_miles: "12,895 公里",
      fuel_level: "300 公升",
      amount: "NT 8,400"
    },
    {
      id: "2",
      transaction_date: "2024-01-15",
      provider: "N072全國文德",
      driver: "張晶晶",
      current_miles: "18,753 公里",
      fuel_level: "300 公升",
      amount: "NT 8,400"
    }
  ],
  pageInfo: {
    Page_Index: 1,
    Page_Size: 10,
    Orderby: null,
    Arrangement: "desc",
    Total: 89,
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
  const [fuelData, setFuelData] = useState<any>(null);
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

      const fuelData = DUMMY_DATA.resultList;

      if (!subFilter) {
        localStorage.setItem(
          "maintenanceInitFilter",
          // JSON.stringify(fuelData.conditionList)
          JSON.stringify(DUMMY_FILTER)
        );
        initializeSubFilter();
      }

      setFuelData(fuelData);
      setPageInfo(DUMMY_DATA.pageInfo);
    });
  }

  const handleView = () => {
    setTimeout(() => {
      router.push("/bus/fuel/1?editPage=edit");
    }, 500);
  };

  const handleTableEdit = () => {
    setTimeout(() => {
      router.push("/bus/fuel/1?editPage=edit");
    }, 500);
  };

  const handleCreateFuel = () => {
    setTimeout(() => {
      router.push("/bus/fuel/create");
    }, 500);
  };

  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceData(isCanceled, busId, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [busId]);

  const changeKey = (data: Array<I_Fuel>) => {
    return data.map((item: I_Fuel) => {
      return {
        id: item["id"],
        transaction_date: item["transaction_date"],
        provider: item["provider"],
        driver: item["driver"],
        current_miles: item["current_miles"],
        fuel_level: item["fuel_level"],
        amount: item["amount"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleTableEdit} />
      };
    });
  };

  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const modifiedData = fuelData ? changeKey(fuelData) : undefined;

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
        btns={
          <SecondaryBtn text={"新增油耗紀錄"} onClick={handleCreateFuel}>
            <PlusIcon size={14} />
          </SecondaryBtn>
        }
      ></FilterWrapper>
      <Table
        titles={fuelTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default FuelRecord;
