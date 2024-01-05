import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import {
  getConditionList,
  getMaintenanceRecordTitle,
  getMaintenanceRecordData
} from "@services/maintenance/getMaintenanceRecord";
import { I_PageInfo } from "@components/PaginationField";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField";
import FilterWrapper from "@layout/FilterWrapper";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";

export const defaultPageInfo: I_PageInfo = {
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 0,
  Last_Page: 0
};

interface Props {
  clientData: any;
  goToDetailPage: (id: string) => void;
  pageInfo: I_PageInfo;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

function MaintenanceRecordList() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const { initializeSubFilter, subFilter, updateSubFilter } =
    useMaintenanceStore();
  const tableTitle = getMaintenanceRecordTitle();

  useEffect(() => {
    const conditionList = getConditionList();
    const tableData = getMaintenanceRecordData();
    if (!subFilter) {
      localStorage.setItem(
        "maintenanceInitFilter",
        JSON.stringify(conditionList)
      );
    }
    initializeSubFilter();
    setData(tableData);
  }, []);

  const handleView = (id: string) => {
    router.push(`/maintenance/detail/${id}?editPage=view`);
  };

  const changeKey = (data: Array<any>) => {
    return data.map((item: any) => {
      return {
        ...item,
        maintenance_no: <a href="/maintenance">{item.maintenance_no}</a>
      };
    });
  };

  const modifiedData = data ? changeKey(data) : undefined;

  return (
    <DivSTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      />
      <Table
        titles={tableTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </DivSTY>
  );
}

export default MaintenanceRecordList;
