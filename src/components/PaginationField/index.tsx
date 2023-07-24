import React from "react";
import { BodySTY } from "./style";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Select,
  CogIcon
} from "evergreen-ui";

interface I_PaginationField {
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
}
export interface I_PageInfo {
  arrangement: "desc" | "asc"; //"desc"
  orderby: string | null; //null
  page_Index: number; //1
  page_Size: number; //10
  total?: number; //5
  last_Page?: number; //1
}

function PaginationField(props: I_PaginationField) {
  const {
    pageInfo,
    onPageChange
    // onClickNext,
    // onClickPrevious
  } = props;
  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);

  const pageSizeOption = [10, 20, 30, 40, 50]; // 設計給定值 預設10
  const totalItems = pageInfo?.total || 0;

  const startItem =
    ((pageInfo?.page_Index || 1) - 1) * (pageInfo?.page_Size || 0) + 1;
  const endItem =
    pageInfo?.last_Page === pageInfo?.page_Index
      ? totalItems
      : startItem + (pageInfo?.page_Size || 0) - 1;

  // ----- function ----- //
  const handlePrevPage = () => {
    if (pageIndex === 1) return; // page_Index 是 1-based
    const updatePage = pageIndex - 1;
    setPageIndex(updatePage);
  };
  const handleNextPage = () => {
    if (pageIndex === pageInfo?.last_Page) return;
    const updatePage = pageIndex + 1;
    setPageIndex(updatePage);
  };

  const handlePageSizeChange = (e: any) => {
    if (!e.target.value) return;
    setPageSize(e.target.value);
  };
  const handleUpdatePage = React.useCallback(
    (type: "index" | "size") => {
      if (!onPageChange || !pageInfo) return;
      const updatedPageInfo = { ...pageInfo };
      updatedPageInfo.page_Index = type === "index" ? pageIndex : 1;
      updatedPageInfo.page_Size = pageSize;
      onPageChange(updatedPageInfo);
      console.log(pageInfo);
    },
    [pageIndex, pageSize, pageInfo, onPageChange]
  );

  // ----- useEffect ----- //
  React.useEffect(() => {
    handleUpdatePage.call(null, "index");
  }, [pageIndex]);
  React.useEffect(() => {
    handleUpdatePage.call(null, "size");
  }, [pageSize]);

  return (
    <BodySTY>
      <div className="container-pagination">
        <span>
          第{startItem}-{endItem}筆, 共{totalItems}筆
        </span>
        <div className="actions">
          <button>
            <ChevronLeftIcon onClick={handlePrevPage} size={12} />
          </button>
          <button>
            <ChevronRightIcon onClick={handleNextPage} size={12} />
          </button>
        </div>
        <div>
          <span>每頁筆數</span>
          <Select
            defaultValue={10}
            style={{ marginLeft: "8px", height: "24px" }}
            onChange={(e) => handlePageSizeChange(e)}
          >
            {pageSizeOption.map((item: number, i) => (
              <option key={`items-${i}`} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>
        <div className="actions">
          <button>
            <CogIcon size={12} />
          </button>
        </div>
      </div>
    </BodySTY>
  );
}

export default PaginationField;
