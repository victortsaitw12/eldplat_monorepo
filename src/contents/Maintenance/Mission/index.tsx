import { useState, useCallback, useEffect } from "react";
import { useRouter,  } from "next/router";
import { DivSTY } from "./style";
import { 
  getMaintenanceMissionData, 
  getMaintenanceMissionTitle 
} from "@services/maintenance/getMaintenanceMission";
import { I_PageInfo } from "@components/PaginationField";
import Table from "@components/Table/Table";
import PaginationField from "@components/PaginationField";
import FilterWrapper from "@layout/FilterWrapper";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
import IconBtn from "@components/Button/IconBtn";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import { PlusIcon } from "evergreen-ui";

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

function MaintenanceMissionList() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const { initializeSubFilter, subFilter, updateSubFilter } = useMaintenanceStore();
  const tableTitle = getMaintenanceMissionTitle();

  useEffect(() => {
    initializeSubFilter();
    const tableData = getMaintenanceMissionData();
    setData(changeKey(tableData));
  }, []);

  const handleView = (id: string) => {
    router.push(`/maintenance/detail/${id}?editPage=view`);
  };

  const changeKey = (data: Array<any>) => {
    return data.map((item: any) => {
      return {
        ...item,
        maintenance_no: <a href="/maintenance">{item.maintenance_no}</a>,
        action: (<>
          <PrimaryBtn
            className="mr-2"
            text="派單"
            onClick={() => router.push(`/maintenance/detail/detail/${item.id}`)}/>
          <IconBtn tip="編輯" type="edit" onClick={() => router.push(`/maintenance/detail/detail/${item.id}`)} />
          </>
        )
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
        btns={
          <PrimaryBtn
            text="新增維保任務"
            onClick={() => router.push("/maintenance/detail/create")}
          >
            <PlusIcon />
          </PrimaryBtn>
        }
       >1</FilterWrapper>
      <Table
          titles={tableTitle}
          data={modifiedData}
          onView={handleView}
          headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </DivSTY>
  );
}

export default MaintenanceMissionList;
