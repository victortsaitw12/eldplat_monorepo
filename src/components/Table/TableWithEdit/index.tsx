import React, { useState } from "react";
import { ErrorIcon, PlusIcon } from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
// import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { FormattedMessage } from "react-intl";
import { TableSTY, TableContainerSTY, StyledDot } from "./style";
import FinishBtn from "@contents/maintenance/Mission/MissionList/FinishBtn";
import { noButtonData } from "../noButtonData";
//
interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  tableName: string | any;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: string, item: any) => void;
  deleteItem?: (item: any) => void;
  handleCheckboxChange?: (item: any) => void;
  handleSelectAll?: () => void;
  handleDeselectAll?: () => void;
  checkboxData?: any[];
}
/*
Must provide id field in the Data Array
*/
function Table({
  tableName,
  titles,
  data,
  goToCreatePage,
  viewItem,
  goToEditPage,
  deleteItem,
  handleCheckboxChange = (item) => {
    console.log(item);
  },
  handleSelectAll,
  handleDeselectAll,
  checkboxData
}: I_Table) {
  // const [checkedItems, setCheckedItems] = useState<Array<string | number>>([]);
  // const router = useRouter();
  if (!data) return <p>Loading</p>;
  return (
    <TableContainerSTY className="TableContainerSTY">
      <div className="container-header">
        <div className="container-header-left">
          <span>{tableName}列表</span>
          <ErrorIcon color="#8EA8C7" />
        </div>
        {!noButtonData.includes(tableName) && (
          <IconLeft text={`新增${tableName}`} onClick={goToCreatePage}>
            <PlusIcon size={14} />
          </IconLeft>
        )}
      </div>
      {/* <div className="container-pagination">
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
      </div> */}
      <TableSTY>
        <thead>
          <tr>
            {/* <th>
              <Checkbox onChange={handleCheckAll} />
            </th> */}

            {tableName === "維保通知" && (
              <th>
                <input
                  type="checkbox"
                  checked={checkboxData?.every((item) => item.checked)}
                  onChange={
                    checkboxData?.every((item) => item.checked)
                      ? handleDeselectAll
                      : handleSelectAll
                  }
                />
              </th>
            )}
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
            <th>
              {/* <span>{<FormattedMessage key="action" id="action" />}</span> */}
              <span>操作</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((item: any, idx) => {
              return (
                <tr key={uuid()}>
                  {/* <td>
                  <Checkbox
                    checked={checkedItems.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                  />
                </td> */}
                  {tableName === "維保通知" && (
                    <td>
                      <input
                        type="checkbox"
                        checked={checkboxData?.map((v) => v.checked)[idx]}
                        onChange={() => {
                          handleCheckboxChange(item.mission.value);
                        }}
                      />
                    </td>
                  )}
                  {Object.keys(item).map((key) => {
                    if (key === "id") return;

                    if (!item[key].label) {
                      return (
                        <td key={item.id + key}>
                          <span className="no-data">
                            <div />
                          </span>
                        </td>
                      );
                    }
                    return (
                      <>
                        <td key={item.id + key}>
                          <div className="data-row">
                            <div>{item[key].label}</div>
                          </div>
                        </td>
                      </>
                    );
                  })}
                  <td>
                    <TableActionButton
                      onView={
                        viewItem && viewItem.bind(null, item.id?.value, item)
                      }
                      onEdit={
                        goToEditPage &&
                        goToEditPage.bind(null, item.id?.value, item)
                      }
                      onDelete={
                        deleteItem && deleteItem.bind(null, item.id?.value)
                      }
                    />
                  </td>
                </tr>
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

export default Table;
