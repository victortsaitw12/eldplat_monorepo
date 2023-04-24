import React, { useState } from "react";
import { ErrorIcon, PlusIcon } from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
// import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { TableSTY, TableContainerSTY, StyledDot } from "./style";
//
interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  tableName: string;
  titles: Array<string | number | React.ReactNode>;
  data: I_Data[];
  onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string) => void;
  viewItem?: (item: any) => void;
  // editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}
/*
Must provide id field in the Data Array
*/
function Table({
  tableName,
  titles,
  data,
  goToCreatePage,
  viewItem = (item) => {
    console.log(item);
  },
  goToEditPage = (id) => {
    console.log(id);
  },
  deleteItem = (item) => {
    console.log(item);
  }
}: I_Table) {
  console.log("data", data);
  // const [checkedItems, setCheckedItems] = useState<Array<string | number>>([]);
  // const router = useRouter();
  if (!data) return <p>Loading</p>;
  return (
    <TableContainerSTY>
      <div className="container-header">
        <div className="container-header-left">
          <span>{tableName}列表</span>
          <ErrorIcon color="#8EA8C7" />
        </div>
        <IconLeft text={`新增${tableName}`} onClick={goToCreatePage}>
          <PlusIcon size={14} />
        </IconLeft>
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
            {titles.map((title, i) => {
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
              <span>操作</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            console.log("item", item);
            return (
              <tr key={uuid()}>
                {/* <td>
                  <Checkbox
                    checked={checkedItems.includes(item.id)}
                    onChange={() => handleCheck(item.id)}
                  />
                </td> */}
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
                  if (key === "vendor_website") {
                    return (
                      <td key={item.id + key}>
                        <div className="data-row">
                          <a
                            href={item[key].value}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item[key].label}
                          </a>
                        </div>
                      </td>
                    );
                  }
                  return (
                    <td key={item.id + key}>
                      <div className="data-row">
                        {key === "status" && (
                          <StyledDot value={item[key].value} />
                        )}
                        <div>{item[key].label}</div>
                      </div>
                    </td>
                  );
                })}
                <td>
                  <TableActionButton
                    onView={viewItem.bind(null, item.id.value)}
                    onEdit={goToEditPage.bind(null, item.id.value)}
                    onDelete={deleteItem.bind(null, item.id.value)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableSTY>
    </TableContainerSTY>
  );
}

export default Table;
