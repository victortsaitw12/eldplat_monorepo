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
  busMaintenacePattern
} from "@services/bus/getMaintenanceByFilter";
import { I_PageInfo } from "@components/PaginationField";
import { mappingQueryData } from "@utils/mappingQueryData";
import FilterWrapper from "@layout/FilterWrapper";
import Table from "@components/Table/Table";
import { useBusStore } from "@contexts/filter/busStore";
import PaginationField from "@components/PaginationField";
import IconBtn from "@components/Button/IconBtn";

interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
  busId: string;
}

export interface I_Equipment {
  id: number;
  equipment_no: string;
  equipment_name: string;
  provider: string;
  amount: string;
  purchaser: string;
  status: string;
}

const BodySTY = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const equipmentTitle = [
  "財產編號",
  "財產名稱",
  "供應商",
  "金額",
  "採購人",
  "項目"
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
      equipment_no: "EQU20231201001",
      equipment_name: "麥克風",
      provider: "麥霸國際",
      amount: "1,200",
      purchaser: "林買買",
      status: "2"
    },
    {
      equipment_no: "EQU20231201002",
      equipment_name: "礦泉水",
      provider: "山泉公司",
      amount: "2,500",
      purchaser: "林買買",
      status: "1"
    },
    {
      equipment_no: "EQU20231201003",
      equipment_name: "伴唱帶",
      provider: "麥霸國際",
      amount: "3,800",
      purchaser: "林買買",
      status: "3"
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

function Equipment({
  register,
  errors,
  getValues,
  control,
  isEdit,
  busId
}: Props) {
  const [busEquipmentData, setBusEquipmentData] = useState<any>(null);
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

      // const busEquipmentData = res.resultList;
      const busEquipmentData = DUMMY_DATA.resultList;
      const pageInfo = DUMMY_DATA.pageInfo;

      if (!subFilter) {
        localStorage.setItem(
          "equipmentInitFilter",
          // JSON.stringify(busMaintenanceData.conditionList)
          JSON.stringify(DUMMY_FILTER)
        );
        initializeSubFilter();
      }

      setBusEquipmentData(busEquipmentData);
      setPageInfo(pageInfo);
    });
  }

  useEffect(() => {
    let isCanceled = false;
    fetchMaintenanceData(isCanceled, busId, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [busId]);

  const handleTableEdit = () => {
    console.log("edit");
  };

  const changeKey = (data: Array<I_Equipment>) => {
    return data.map((item: I_Equipment) => {
      return {
        id: item["equipment_no"],
        equipment_no: item["equipment_no"],
        equipment_name: item["equipment_name"],
        provider: item["provider"],
        amount: item["amount"],
        purchaser: item["purchaser"],
        status: item["status"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleTableEdit} />
      };
    });
  };

  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const modifiedData = busEquipmentData
    ? changeKey(busEquipmentData)
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
        titles={equipmentTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default Equipment;
