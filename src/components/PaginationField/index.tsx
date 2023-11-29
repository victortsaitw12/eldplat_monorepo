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
  Page_Index: 1,
  Page_Size: 10,
  Orderby: null,
  Arrangement: "desc",
  Total: 5,
  Last_Page: 1
};

function PaginationField({
  pageInfo = defaultPageInfo,
  onPageChange
}: I_PaginationField) {
  const pageSizeOption = [10, 20, 30, 40, 50]; // 設計給定值 預設10
  const totalItems = pageInfo.Total || 0;

  const startItem =
    ((pageInfo?.Page_Index || 1) - 1) * (pageInfo.Page_Size || 0) + 1;
  const endItem =
    pageInfo?.Last_Page === pageInfo.Page_Index
      ? totalItems
      : startItem + (pageInfo.Page_Size || 0) - 1;

  // ----- function ----- //
  const handlePrevPage = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (pageInfo.Page_Index === 1) return;
    const updatePage = pageInfo.Page_Index - 1;
    handleUpdatePage(updatePage, undefined);
  };

  const handleNextPage = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (pageInfo.Page_Index === pageInfo.Last_Page) return;
    const updatePage = pageInfo.Page_Index + 1;
    handleUpdatePage(updatePage, undefined);
  };

  const handlePageSizeChange = (e: any) => {
    if (!e.target.value) return;
    // setPageSize(e.target.value);
    handleUpdatePage(1, e.target.value);
  };

  const handleUpdatePage = React.useCallback(
    (Page_Index: number | undefined, Page_Size: number | undefined) => {
      if (!onPageChange || !pageInfo) return;
      const updatedPageInfo = { ...pageInfo };
      if (Page_Index) updatedPageInfo.Page_Index = Page_Index;
      if (Page_Size) updatedPageInfo.Page_Size = Page_Size;
      onPageChange(updatedPageInfo);
    },
    [pageInfo, onPageChange]
  );

  return (
    <BodySTY>
      <div className="pageTotal">共 {totalItems} 筆</div>
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
          disabled={pageInfo.Page_Index === 1 || undefined}
        />
        <span className="actions__page">{pageInfo?.Page_Index}</span>
        <IconButton
          icon={ChevronRightIcon}
          onClick={(event: any) => handleNextPage(event)}
          style={{
            minHeight: "24px",
            minWidth: "24px",
            width: "24px",
            height: "24px"
          }}
          disabled={pageInfo.Page_Index === pageInfo.Last_Page || undefined}
        />
        <div>
          <Select
            defaultValue={10}
            style={{ marginLeft: "8px", height: "24px" }}
            onChange={(e) => handlePageSizeChange(e)}
          >
            {pageSizeOption.map((item: number, i) => (
              <option key={`items-${i}`} value={item}>
                {item}筆/頁
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

// ------- TYPING ------- //
interface I_PaginationField {
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  onClickNext?: () => void;
  onClickPrevious?: () => void;
}
export interface I_PageInfo {
  Page_Index: number; //1
  Page_Size: number; //10
  Orderby?: string | null;
  Arrangement?: string; //"ASC" | "desc"
  Total?: number; //5
  Last_Page?: number; //1
}
