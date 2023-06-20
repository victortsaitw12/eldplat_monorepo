import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";
import React, { useState } from "react";
import InsideTableOnAssignment from "../InsideTableOnAssignment";
import { I_Data } from "..";
import { getSubAssignmentTitle } from "@services/assignment/getAllAssignment";

interface I_TableRow {
  idx: number;
  item: any;
  //   titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  subAssignData: any;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: any, item: any) => void;
  deleteItem?: (item: any) => void;
}

const TableRow = ({
  idx,
  item,
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
}: I_TableRow) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const titles = getSubAssignmentTitle();

  const handleInsideTableOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr>
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
          {isOpen ? (
            <ChevronUpIcon onClick={handleInsideTableOpen} cursor="pointer" />
          ) : (
            <ChevronDownIcon onClick={handleInsideTableOpen} cursor="pointer" />
          )}
        </td>
      </tr>
      {isOpen && (
        <tr>
          <td colSpan={7}>
            <InsideTableOnAssignment
              tableName="派單"
              idx={idx}
              titles={titles}
              data={data}
              subAssignData={subAssignData}
              goToCreatePage={goToCreatePage}
              deleteItem={deleteItem}
              goToEditPage={goToEditPage}
              viewItem={viewItem}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
