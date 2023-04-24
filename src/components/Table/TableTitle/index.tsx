import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import { TableTitleSTY } from "./style";

function TableTitle({ tableName }: { tableName: string }) {
  return (
    <TableTitleSTY>
      <div className="container-header">
        <div className="container-header-left">
          <span>{tableName}列表</span>
          {/* <ErrorIcon color="#8EA8C7" /> */}
        </div>
        {/* <IconLeft text={`新增${tableName}`} onClick={goToCreatePage}>
					<PlusIcon size={14} />
				</IconLeft> */}
      </div>
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
    </TableTitleSTY>
  );
}

export default TableTitle;
