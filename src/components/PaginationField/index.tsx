import React from "react";
import { BodySTY } from "./style";
import { IconButton } from "evergreen-ui";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Select,
  CogIcon
} from "evergreen-ui";

// TODO 原本存在各支service檔案裡的defaultPageInfo 改統一引用這一支
export const defaultPageInfo: I_PageInfo = {
  page_Index: 1,
  page_Size: 10,
  orderby: null,
  arrangement: "desc",
  total: 0,
  last_Page: 0
};

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

function PaginationField({
  pageInfo = defaultPageInfo,
  onPageChange
}: I_PaginationField) {
  const pageSizeOption = [10, 20, 30, 40, 50]; // 設計給定值 預設10
  const totalItems = pageInfo.total || 0;

  const startItem =
    ((pageInfo?.page_Index || 1) - 1) * (pageInfo.page_Size || 0) + 1;
  const endItem =
    pageInfo?.last_Page === pageInfo.page_Index
      ? totalItems
      : startItem + (pageInfo.page_Size || 0) - 1;

  // ----- function ----- //
  const handlePrevPage = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (pageInfo.page_Index === 1) return; // page_Index 是 1-based
    const updatePage = pageInfo.page_Index - 1;
    handleUpdatePage(updatePage, undefined);
  };

  const handleNextPage = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (pageInfo.page_Index === pageInfo.last_Page) return;
    const updatePage = pageInfo.page_Index + 1;
    handleUpdatePage(updatePage, undefined);
  };

  const handlePageSizeChange = (e: any) => {
    if (!e.target.value) return;
    // setPageSize(e.target.value);
    handleUpdatePage(undefined, e.target.value);
  };

  const handleUpdatePage = React.useCallback(
    (page_Index: number | undefined, page_Size: number | undefined) => {
      if (!onPageChange || !pageInfo) return;
      const updatedPageInfo = { ...pageInfo };
      if (page_Index) updatedPageInfo.page_Index = page_Index;
      if (page_Size) updatedPageInfo.page_Size = page_Size;
      onPageChange(updatedPageInfo);
    },
    [pageInfo, onPageChange]
  );

  return (
    <BodySTY>
      <div className="container-pagination">
        <span>
          第{startItem}-{endItem}筆, 共{totalItems}筆
        </span>
        <div className="actions">
          <IconButton
            icon={ChevronLeftIcon}
            onClick={(event: any) => handlePrevPage(event)}
            style={{
              minHeight: "24px",
              minWidth: "24px",
              width: "24px",
              height: "24px"
            }}
            disabled={pageInfo.page_Index === 1 || undefined}
          />
          <IconButton
            icon={ChevronRightIcon}
            onClick={(event: any) => handleNextPage(event)}
            style={{
              minHeight: "24px",
              minWidth: "24px",
              width: "24px",
              height: "24px"
            }}
            disabled={pageInfo.page_Index === pageInfo.last_Page || undefined}
          />
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
