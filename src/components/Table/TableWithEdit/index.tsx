import React, { useEffect } from "react";
import { ErrorIcon, PlusIcon, Checkbox } from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { TableSTY, TableContainerSTY } from "./style";
import { noButtonData } from "../noButtonData";
import PaginationField, { I_PageInfo } from "@components/PaginationField";
//
const dontShowList = [
  "維保通知",
  "維保任務",
  "維保紀錄",
  "駕駛列表",
  "駕駛證照",
  "員工列表",
  "訂單列表",
  "外部車隊"
];
interface I_Data {
  [key: string]: string | number | React.ReactNode | any;
}

interface I_Table {
  needCheckBox?: boolean;
  needAction?: boolean;
  needCreateBtn?: boolean;
  tableName: string | any;
  cleanTableName?: string | React.ReactNode;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  // onCheck?: (items: any) => void;
  goToCreatePage?: (event: any) => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: string, item: any) => void;
  deleteItem?: (id: any) => void;
  recoverItem?: (id: any) => void;
  handleCheckboxChange?: (item: any) => void;
  handleSelectAll?: () => void;
  handleDeselectAll?: () => void;
  checkboxData?: any[];
  deleteText?: string;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  customTableClass?: { label: string; value: string }[];
  createBtnText?: string;
}
/*
Must provide id field in the Data Array
*/
function Table({
  needCheckBox = true,
  needAction = true,
  needCreateBtn = true,
  tableName,
  cleanTableName,
  titles,
  data,
  goToCreatePage,
  viewItem,
  goToEditPage,
  deleteItem,
  recoverItem,
  handleCheckboxChange = (item) => {
    console.log(item);
  },
  handleSelectAll,
  handleDeselectAll,
  checkboxData,
  deleteText,
  pageInfo,
  onPageChange,
  customTableClass,
  createBtnText
}: I_Table) {
  const [currentTab, setCurrentTab] = React.useState<number | null>(null);
  const [checkedItems, setCheckedItems] = React.useState<any[]>([]);
  useEffect(() => {
    const handleClickOutside = () => {
      setCurrentTab(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  if (!data) return <p>Loading</p>;

  // checkbox +++
  const handleCheckAll = (e: any) => {
    checkedItems.length === data.length
      ? setCheckedItems([])
      : setCheckedItems(data.map((item) => item.id?.value));
    if (!handleSelectAll || !handleDeselectAll) return;
    e.target.checked ? handleSelectAll() : handleDeselectAll();
  };

  const handleCheck = (e: any) => {
    if (checkedItems.includes(e.target.id)) {
      const updated = checkedItems.filter((item) => item !== e.target.id);
      setCheckedItems(updated);
      console.log("🍅checkedItems", checkedItems);
    } else {
      const updated = [...checkedItems, e.target.id];
      setCheckedItems(updated);
    }

    if (!handleCheckboxChange) return;
    e.target.checked
      ? handleCheckboxChange(e.target.value)
      : handleCheckboxChange("");
  };

  return (
    <TableContainerSTY className="TableContainerSTY">
      <div className="container-header">
        <div className="container-header-left">
          {cleanTableName ? (
            <span>{cleanTableName}</span>
          ) : !tableName || dontShowList.includes(tableName) ? (
            <span>{tableName}</span>
          ) : (
            <>
              <span>{tableName}清單</span>
            </>
          )}
        </div>
        {needCreateBtn && !noButtonData.includes(tableName) && (
          <IconLeft
            text={
              createBtnText
                ? createBtnText
                : dontShowList.includes(tableName)
                ? `新增${tableName.substring(0, 2)}`
                : `新增${tableName}`
            }
            onClick={(event) => {
              goToCreatePage && goToCreatePage(event);
            }}
          >
            <PlusIcon size={14} />
          </IconLeft>
        )}
      </div>
      <div className="container-pagination">
        <PaginationField pageInfo={pageInfo} onPageChange={onPageChange} />
      </div>
      <div className="container-table">
        <TableSTY>
          <thead>
            <tr>
              {needCheckBox && (
                <th>
                  <Checkbox
                    style={{ margin: "8px 0" }}
                    onChange={(e) => handleCheckAll(e)}
                    checked={
                      checkedItems.length !== 0 &&
                      checkedItems.length === data.length
                    }
                  />
                </th>
              )}
              {titles.map((title: any) => {
                if (title === "id") {
                  return;
                }
                const finalClass = customTableClass?.find((v) => {
                  return v.label === title;
                });
                return (
                  <th key={title}>
                    <span className={finalClass && finalClass.value}>
                      {title}
                    </span>
                  </th>
                );
              })}
              {needAction && <th style={{ textAlign: "center" }}>操作</th>}
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map((item: any, idx) => {
                return (
                  <tr key={uuid()}>
                    {needCheckBox && (
                      <td>
                        <Checkbox
                          style={{ margin: "8px 0" }}
                          checked={checkedItems.includes(item?.id?.value)}
                          onChange={(e) => handleCheck(e)}
                          id={item?.id?.value}
                        />
                      </td>
                    )}

                    {Object.keys(item).map((key) => {
                      const finalClass = customTableClass?.find((classObj) => {
                        return classObj.value === key;
                      });
                      if (key === "id") return;
                      return (
                        <td key={item.id + key}>
                          <div
                            className={`${finalClass?.value || ""} data-row`}
                          >
                            {item[key].label || "--"}
                          </div>
                        </td>
                      );
                    })}
                    {needAction && (
                      <td>
                        <TableActionButton
                          onView={
                            viewItem &&
                            viewItem.bind(null, item.id?.value, item)
                          }
                          onEdit={
                            goToEditPage &&
                            goToEditPage.bind(null, item.id?.value, item)
                          }
                          onDelete={
                            deleteItem && deleteItem.bind(null, item.id?.value)
                          }
                          onRecover={
                            recoverItem &&
                            recoverItem.bind(null, item.id?.value)
                          }
                          deleteText={deleteText}
                          isOpen={currentTab === idx}
                          openOption={() => {
                            setCurrentTab(idx);
                          }}
                          closeOption={() => {
                            setCurrentTab(null);
                          }}
                          tableName={tableName}
                        />
                      </td>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={100} className="noDataShown">
                  目前無資料
                </td>
              </tr>
            )}
          </tbody>
        </TableSTY>
      </div>
    </TableContainerSTY>
  );
}

export default Table;
