import React from "react";
import { TableTitleSTY } from "./style";
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

interface I_TITLE {
  tableName: Array<string | number | React.ReactNode> | string;
  control?: Array<string | number | React.ReactNode> | string;
  sub?: Array<string | number | React.ReactNode>;
  page: boolean;
}

const TableTitle = ({ tableName, control, sub, page = true }: I_TITLE) => {
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
        {page ? (
          <div className="container-pagination">
            <span>
              第{1}-{2}筆, 共{2}筆
            </span>
            <div className="actions">
              <button>
                <ChevronLeftIcon size={12} />
              </button>
              <button>
                <ChevronRightIcon size={12} />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </TableTitleSTY>
  );
};

export default TableTitle;
