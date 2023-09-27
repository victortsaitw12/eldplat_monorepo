import React from "react";
import { v4 as uuid } from "uuid";
import { TableSTY, TableContainerSTY } from "./style";
import TableRow from "./TableRow";
import PaginationField, { I_PageInfo } from "@components/PaginationField";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_FirstDrawer } from "@contents/Assignment/AssignmentDrawers";

//
export interface I_labelValue {
  label: string | React.ReactNode;
  value: string;
}
export interface I_Data {
  [key: string]: I_labelValue;
  maintenance_quote_no: I_labelValue;
}

interface I_Table {
  tableName: string | any;
  titles: Array<string | number | React.ReactNode> | any;
  ordersData: I_Data[];
  assignsData: any;
  handleAssignCreate: (type: I_FirstDrawer, id: string) => void;
  handleAssignEdit: (item: any) => void;
  onCheck?: (items: any) => void;
  viewItem?: (id: any, item: any) => void;
  editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
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
  ordersData,
  assignsData,
  pageInfo,
  onPageChange,
  handleAssignCreate,
  handleAssignEdit
}: I_Table) {
  if (!ordersData) return <LoadingSpinner />;
  return (
    <TableContainerSTY className="TableContainerSTY">
      <div className="container-header">
        <div className="container-header-left">
          <span>{tableName}列表</span>
        </div>
      </div>
      <div className="container-pagination">
        <PaginationField pageInfo={pageInfo} onPageChange={onPageChange} />
      </div>
      <div className="container-table">
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
            {ordersData.length !== 0 ? (
              ordersData.map((item: any, idx) => {
                return (
                  <TableRow
                    key={`outsideRow-${item.maintenance_quote_no.value}`}
                    orderData={ordersData[idx]}
                    assignData={assignsData[idx]}
                    handleAssignCreate={handleAssignCreate}
                    handleAssignEdit={handleAssignEdit}
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
      </div>
    </TableContainerSTY>
  );
}

export default OutsideTableOnAssignment;
