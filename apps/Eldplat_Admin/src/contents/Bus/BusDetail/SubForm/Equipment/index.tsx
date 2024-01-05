import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  UseFormGetValues
} from "react-hook-form";
import { BusDataTypes } from "../../../bus.type";
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
import { BodySTY } from "./style";
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

export interface I_Equipment {
  equipment_no: string;
  provider: string;
  purchaser: string;
  duration: string;
  equipment_item: string;
}

const equipmentTitle = [
  "財產編號",
  "供應商",
  "採購人",
  "合作日期區間",
  "項目",
  "操作"
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
      provider: "麥霸國際",
      purchaser: "林買買",
      duration: "2023-12-01~2024-12-01",
      equipment_item: "麥克風、卡拉OK伴唱機"
    },
    {
      equipment_no: "EQU20231201002",
      provider: "山泉公司",
      purchaser: "林買買",
      duration: "2023-12-01~2024-12-01",
      equipment_item: "礦泉水"
    },
    {
      equipment_no: "EQU20231201003",
      provider: "麥霸國際",
      purchaser: "林買買",
      duration: "2023-12-01~2024-12-01",
      equipment_item: "礦泉水"
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
  const { initializeSubFilter, subFilter, updateSubFilter } = useBusStore();

  const handleView = () => {
    setTimeout(() => {
      router.push("/bus/equipment/1?editPage=edit");
    }, 500);
  };

  const handleTableEdit = () => {
    setTimeout(() => {
      router.push("/bus/equipment/1?editPage=edit");
    }, 500);
  };

  const handleCreateEquipment = () => {
    console.log("create");
    setTimeout(() => {
      router.push("/bus/equipment/create");
    }, 500);
  };

  const changeKey = (data: Array<I_Equipment>) => {
    return data.map((item: I_Equipment) => {
      return {
        equipment_no: item["equipment_no"],
        provider: item["provider"],
        purchaser: item["purchaser"],
        duration: item["duration"],
        equipment_item: item["equipment_item"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleTableEdit} />
      };
    });
  };

  useEffect(() => {
    setBusEquipmentData(DUMMY_DATA.resultList);
    if (!subFilter) {
      initializeSubFilter();
    }
  }, []);

  const modifiedData = busEquipmentData
    ? changeKey(busEquipmentData)
    : undefined;

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
        btns={
          <SecondaryBtn text={"新增設備"} onClick={handleCreateEquipment}>
            <PlusIcon size={14} />
          </SecondaryBtn>
        }
      />
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
