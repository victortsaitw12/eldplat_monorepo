import React, { useEffect } from "react";
import { ErrorIcon, PlusIcon, Checkbox } from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { TableSTY, TableContainerSTY } from "./style";
import { noButtonData } from "../noButtonData";
import PaginationField, { I_PageInfo } from "@components/PaginationField";
//
const dontShowList = ["維保通知", "維保任務", "維保紀錄", "駕駛列表"];
interface I_Data {
  [key: string]: string | number | React.ReactNode | any;
}

interface I_Table {
  tableName: string | any;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  // onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: string, item: any) => void;
  deleteItem?: (item: any) => void;
  handleCheckboxChange?: (item: any) => void;
  handleSelectAll?: () => void;
  handleDeselectAll?: () => void;
  checkboxData?: any[];
  deleteText?: string;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  createBtnText?: string;
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
  checkboxData,
  deleteText,
  pageInfo,
  onPageChange,
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
          {dontShowList.includes(tableName) ? (
            <span>{tableName}</span>
          ) : (
            <>
              <span>{tableName}清單</span>
            </>
          )}
        </div>
        {!noButtonData.includes(tableName) && (
          <IconLeft
            text={createBtnText ? createBtnText : `新增${tableName}`}
            onClick={goToCreatePage}
          >
            <PlusIcon size={14} />
          </IconLeft>
        )}
      </div>
      <div className="container-pagination">
        <PaginationField pageInfo={pageInfo} onPageChange={onPageChange} />
      </div>

      <TableSTY>
        <thead>
          <tr>
            {tableName !== "維保通知" && (
              <th>
                <Checkbox
                  onChange={(e) => handleCheckAll(e)}
                  checked={checkedItems.length === data.length}
                />
              </th>
            )}
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
                  {tableName !== "維保通知" && (
                    <td>
                      <Checkbox
                        checked={checkedItems.includes(item?.id?.value)}
                        onChange={(e) => handleCheck(e)}
                        id={item?.id?.value}
                      />
                    </td>
                  )}
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
                      <td key={item.id + key}>
                        <div className="data-row">{item[key].label}</div>
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
