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
  "員工列表"
];
interface I_Data {
  [key: string]: string | number | React.ReactNode | any;
}

interface I_Table {
  tableName: string | any;
  cleanTableName?: string | React.ReactNode;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  // onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
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
        {!noButtonData.includes(tableName) && (
          <IconLeft
            text={
              createBtnText
                ? createBtnText
                : dontShowList.includes(tableName)
                ? `新增${tableName.substring(0, 2)}`
                : `新增${tableName}`
            }
            onClick={goToCreatePage}
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
              <th>
                <Checkbox
                  style={{ margin: "8px 0" }}
                  onChange={(e) => handleCheckAll(e)}
                  checked={checkedItems.length === data.length}
                />
              </th>

              {/* {tableName === "維保通知" && (
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
              )} */}
              {titles.map((title: any) => {
                if (title === "id") {
                  return;
                }
                const finalClass = customTableClass?.map((v) => {
                  if (v.label === title) {
                    return v.value;
                  }
                });
                return (
                  <th key={uuid()}>
                    <span className={finalClass && finalClass[0]}>{title}</span>
                  </th>
                );
              })}
              <th style={{ textAlign: "center" }}>操作</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 ? (
              data.map((item: any, idx) => {
                return (
                  <tr key={uuid()}>
                    <td>
                      <Checkbox
                        style={{ margin: "8px 0" }}
                        checked={checkedItems.includes(item?.id?.value)}
                        onChange={(e) => handleCheck(e)}
                        id={item?.id?.value}
                      />
                    </td>

                    {/* {tableName === "維保通知" && (
                      <td>
                        <input
                          type="checkbox"
                          checked={checkboxData?.map((v) => v.checked)[idx]}
                          onChange={() => {
                            handleCheckboxChange(item.mission.value);
                          }}
                        />
                      </td>
                    )} */}
                    {Object.keys(item).map((key) => {
                      const finalClass = customTableClass?.map((v) => {
                        if (v.value === key) {
                          return v.value;
                        }
                      });

                      if (key === "id") return;
                      if (!item[key].label) {
                        return (
                          // 🟡NEW:
                          <td key={item.id + key}>
                            <span className={`${finalClass && finalClass[0]}`}>
                              --
                            </span>
                          </td>
                        );
                      }
                      return (
                        <td key={item.id + key}>
                          <div
                            className={`${
                              finalClass && finalClass[0]
                            } data-row`}
                          >
                            {item[key].label}
                          </div>
                        </td>
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
                        onRecover={
                          recoverItem && recoverItem.bind(null, item.id?.value)
                        }
                        deleteText={deleteText}
                        isOpen={currentTab === idx}
                        openOption={() => {
                          console.log("openOption");
                          setCurrentTab(idx);
                        }}
                        closeOption={() => {
                          console.log("closeOption");
                          setCurrentTab(null);
                        }}
                        tableName={tableName}
                      />
                    </td>
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
