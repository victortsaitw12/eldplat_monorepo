import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ErrorIcon,
  Pane
} from "evergreen-ui";
import { v4 as uuid } from "uuid";
import { TableSTY, TableContainerSTY, StyledDot } from "./style";
import TableRow from "./TableRow";
//
export interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  tableName: string | any;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  subAssignData: any;
  onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: any, item: any) => void;
  // editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}

export interface I_OpenTable {
  id: string;
  opened: boolean;
}
/*
Must provide id field in the Data Array
*/
function OutsideTableOnAssignment({
  tableName,
  titles,
  data,
  subAssignData,
  goToCreatePage,
  viewItem = (id, item) => {
    console.log(id, item);
  },
  goToEditPage = (id, item) => {
    console.log(id, item);
  },
  deleteItem = (item) => {
    console.log(item);
  }
}: I_Table) {
  console.log("data in outside table", data);
  if (!data) return <p>Loading</p>;
  return (
    <TableContainerSTY className="TableContainerSTY">
      <div className="container-header">
        <div className="container-header-left">
          <span>{tableName}列表</span>
          <ErrorIcon color="#8EA8C7" />
        </div>
      </div>
      <div className="container-pagination">
        <span>
          第{1}-{5}筆, 共{5}筆
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
      <TableSTY>
        <thead>
          <tr>
            {titles.map((title: any) => {
              if (title === "id") {
                return;
              }
              return (
                <th key={uuid()}>
                  <span>{title}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((item: any, idx) => {
              return (
                <TableRow
                  key={uuid()}
                  item={item}
                  data={data}
                  subAssignData={subAssignData}
                  goToCreatePage={goToCreatePage}
                  deleteItem={deleteItem}
                  goToEditPage={goToEditPage}
                  viewItem={viewItem}
                />
              );
            })
          ) : (
            <tr className="noDataShown">
              <td>查無資料</td>
            </tr>
          )}
        </tbody>
      </TableSTY>
    </TableContainerSTY>
  );
}

export default OutsideTableOnAssignment;
