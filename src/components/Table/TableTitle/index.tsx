import React from "react";
import { TableTitleSTY } from "./style";
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import PaginationField, { I_PageInfo } from "@components/PaginationField";

interface I_TableTitle {
  tableName: Array<string | number | React.ReactNode> | string;
  control?: Array<string | number | React.ReactNode> | string;
  sub?: Array<string | number | React.ReactNode>;
  page: boolean;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
}

const TableTitle = ({
  tableName,
  control,
  sub,
  page = true,
  pageInfo,
  onPageChange
}: I_TableTitle) => {
  const headerLeft = Array.isArray(tableName) ? (
    tableName.map((item, i) => <span key={i}>{item}</span>)
  ) : (
    <span>{tableName}列表</span>
  );
  const headerControl = Array.isArray(control) ? (
    control.map((item, i) => <span key={i}>{item}</span>)
  ) : (
    <IconLeft
      text={`新增${control}`}
      onClick={() => {
        console.log("called");
      }}
    >
      <PlusIcon size={14} />
    </IconLeft>
  );

  return (
    <TableTitleSTY>
      <div className="container-header">
        <div className="container-header-left">{headerLeft}</div>
        <div className="container-header-right">{headerControl}</div>
      </div>
      <div className="container-sub">
        <div className="subTitle">{sub}</div>
        <div className="container-pagination">
          {page ? (
            <PaginationField pageInfo={pageInfo} onPageChange={onPageChange} />
          ) : (
            ""
          )}
        </div>
      </div>
    </TableTitleSTY>
  );
};

export default TableTitle;
