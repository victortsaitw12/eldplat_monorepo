import { useState, useCallback, useEffect } from "react";
import { useRouter  } from "next/router";
import Table from "@components/Table/Table";
import FilterWrapper from "@layout/FilterWrapper";
import { DivSTY } from "./style";
import PaginationField from "@components/PaginationField";
import { I_PageInfo } from "@components/PaginationField";
import { useOrderStore } from "@contexts/filter/orderStore";
import {
  getConditionList,
  getOrderDocsTitle, 
  getOrderDocsData 
} from "@services/orders/getOrderDocs";
import SecondaryBtn from "@components/Button/Secondary/IconLeft";
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

const Docs = () => {
    const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
    const [data, setData] = useState<any>(null);
    const { initializeSubFilter, subFilter, updateSubFilter } = useOrderStore();
    const tableTitle = getOrderDocsTitle();
    const router = useRouter();

    useEffect(() => {
      const conditionList = getConditionList();
      const tableData = getOrderDocsData();
      if (!subFilter) {
        localStorage.setItem(
          "orderInitFilter",
          JSON.stringify(conditionList)
        );
      }
      initializeSubFilter();
      setData(tableData);
    }, []);

    const handleView = (id: string) => {
        console.log(`hande view: ${id}`);
    };

    const handleAddDoc = () => {
      console.log(`hande add file`);
      router.push("/orders/doc/create");
    }
    
    const changeKey = (data: Array<any>) => {
        return data.map((item: any) => {
          return {
            ...item,
            file_name: <a href="/maintenance">{item.file_name}</a>
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
              <SecondaryBtn
                text="新增檔案"
                onClick={handleAddDoc}
              >
                <PlusIcon />
              </SecondaryBtn>
            }
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

export default Docs;